import { expect, test } from "bun:test";
import { ORION, orionProductSchema } from "./orion";

test("Orion costs ₹1,499 in INR", () => {
  const schema = orionProductSchema("https://orion-ambition-page.lovable.app/assets/bottle.webp");
  expect(schema.offers.price).toBe(1499);
  expect(schema.offers.priceCurrency).toBe("INR");
});
test("purchase handoff uses the verified official Orion page", () => {
  expect(ORION.storeUrl).toBe("https://www.sarkar.store/products/orion");
});