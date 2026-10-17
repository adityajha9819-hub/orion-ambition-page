import { describe, expect, test } from "bun:test";
import { isSitemapRouteIncluded, sitemapXML } from "./sitemap";
import type { AnyRoute } from "@tanstack/react-router";

describe("public sitemap", () => {
  test("lists the canonical Orion page without fabricated modification dates", () => {
    const xml = sitemapXML("https://orion-ambition-page.lovable.app", [{ path: "/" }, { path: "/" }]);
    expect(xml.match(/<loc>/g)?.length).toBe(1);
    expect(xml).toContain("<loc>https://orion-ambition-page.lovable.app/</loc>");
    expect(xml).not.toContain("<lastmod>");
  });
  test("rejects foreign URLs instead of advertising external pages as local routes", () => {
    expect(() => sitemapXML("https://orion-ambition-page.lovable.app", [{ path: "//www.sarkar.store/" }])).toThrow("Invalid sitemap path");
  });
  test("excluded parent sections cannot be included by child routes", () => {
    const route = { isRoot: false, options: { staticData: { sitemap: true } }, parentRoute: { options: { staticData: { sitemap: "exclude-subtree" } } } } as unknown as AnyRoute;
    expect(isSitemapRouteIncluded(route)).toBe(false);
  });
});