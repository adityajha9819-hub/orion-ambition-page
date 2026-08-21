import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShoppingBag, X, ArrowLeft, ArrowUpRight, Instagram, Twitter, Facebook } from "lucide-react";

import { Reveal, useParallax, useReveal } from "@/components/orion/reveal";
import { cn } from "@/lib/utils";
import heroShot from "@/assets/orion-hero.jpg?w=1200&format=webp";
import heroSet from "@/assets/orion-hero.jpg?w=480;768;1200&format=webp&as=srcset";
import packagingShot from "@/assets/orion-packaging.jpg?w=1200&format=webp";
import packagingSet from "@/assets/orion-packaging.jpg?w=480;768;1200&format=webp&as=srcset";
import moodShot from "@/assets/orion-mood.jpg?w=1200&format=webp";
import moodSet from "@/assets/orion-mood.jpg?w=480;768;1200&format=webp&as=srcset";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORION 100ml — Luxury Unisex Parfum | SARKAR" },
      {
        name: "description",
        content:
          "SARKAR ORION — infinite, cold, ambitious. A fresh citrus aromatic unisex parfum, 100ml, ₹1,499 incl. of all taxes.",
      },
      { property: "og:title", content: "ORION 100ml — Luxury Unisex Parfum | SARKAR" },
      {
        property: "og:description",
        content: "Infinite. Cold. Ambitious. A fresh citrus aromatic unisex parfum from SARKAR.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrionPage,
});

const PRICE = "₹1,499";

const GALLERY = [
  { src: heroShot, srcSet: heroSet, alt: "ORION parfum bottle lit by cold blue light on black stone", label: "The Bottle" },
  { src: packagingShot, srcSet: packagingSet, alt: "ORION matte black packaging beside the frosted bottle", label: "The Case" },
  { src: moodShot, srcSet: moodSet, alt: "Icy blue mist drifting over dark obsidian stone", label: "The Mood" },
];

const NOTES = [
  { tier: "Top", items: ["Sicilian Bergamot", "Frozen Grapefruit", "Pink Pepper"], text: "The first strike — bright, glacial citrus." },
  { tier: "Heart", items: ["Clary Sage", "Lavender Absolute", "Sea Salt Accord"], text: "An aromatic core, clean and unsentimental." },
  { tier: "Base", items: ["Cedarwood", "White Musk", "Ambroxan"], text: "A long silver trail that refuses to fade." },
];

const COLLECTION = [
  { name: "Noble", note: "Woody · Spiced Amber · Warm", href: "#" },
  { name: "Throne", note: "Leather · Oud · Commanding", href: "#" },
  { name: "Regal", note: "Floral · Vanilla · Opulent", href: "#" },
];

function OrionPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [qty, setQty] = useState(0);
  const [activeShot, setActiveShot] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const hero = useParallax<HTMLDivElement>(0.06);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCart = () => {
    setQty((q) => q + 1);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header cartCount={qty} onCart={() => setCartOpen(true)} />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-28 pb-16 md:px-10 lg:pt-36 lg:pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute top-[-20%] left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
          style={{ background: "var(--gradient-frost)" }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div ref={hero.ref} className="relative order-1">
            <div
              className="relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-lift)" }}
            >
              <img
                src={heroShot}
                alt="ORION 100ml unisex parfum bottle under cold blue light"
                width={1200}
                height={1600}
                className="h-[62vh] w-full object-cover lg:h-[86vh]"
                style={{ transform: `translate3d(0, ${hero.offset}px, 0) scale(1.06)` }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 70% at 50% 30%, transparent 30%, var(--ink) 100%)",
                }}
              />
            </div>
          </div>

          <div className="order-2">
            <Reveal>
              <p className="eyebrow">Unisex Parfum · 100ml</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="text-display mt-6 text-[22vw] leading-[0.82] sm:text-[15vw] lg:text-[11rem]">
                ORION
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-display mt-4 text-2xl text-accent italic sm:text-3xl">
                Infinite. Cold. Ambitious.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="frost-line mt-10 opacity-60" />
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                Fresh · Citrus · Aromatic — a glacial signature built for the ones who never
                stand still.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-end gap-8">
                <div>
                  <p className="text-display text-4xl">{PRICE}</p>
                  <p className="mt-1 text-[11px] tracking-widest text-muted-foreground uppercase">
                    Incl. of all taxes
                  </p>
                </div>
                <AddButton onClick={addToCart} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StickyGallery active={activeShot} setActive={setActiveShot} />

      <ScentNotes />

      {/* EDITORIAL */}
      <section className="px-6 py-28 md:px-10 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">The Inspiration</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-display mt-10 text-3xl leading-[1.25] sm:text-4xl lg:text-5xl">
              Orion was drawn from the coldest hour of the night — the moment ambition stops
              speaking and simply moves. It is citrus over frozen stone, a clean and distant
              light that keeps its distance from warmth.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-10 text-sm leading-relaxed text-muted-foreground">
              Worn by anyone with somewhere to be, and no need to announce it.
            </p>
          </Reveal>
        </div>
      </section>

      <DetailsBar />

      <CrossSell />

      <Footer />

      <StickyAddBar visible={showBar && !cartOpen} onAdd={addToCart} />
      <CartDrawer open={cartOpen} qty={qty} onClose={() => setCartOpen(false)} setQty={setQty} />
    </div>
  );
}

function AddButton({ onClick, block }: { onClick: () => void; block?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden border border-border bg-transparent px-10 py-4 text-[11px] tracking-[0.3em] uppercase transition-colors duration-500 hover:border-accent hover:text-accent-foreground",
        block && "w-full",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
        style={{ background: "var(--gradient-frost)" }}
      />
      <span className="relative">Add to Cart</span>
    </button>
  );
}

function Header({ cartCount, onCart }: { cartCount: number; onCart: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Shop</span>
        </a>
        <span className="text-display text-xl tracking-[0.45em]">SARKAR</span>
        <button
          onClick={onCart}
          aria-label="Open cart"
          className="relative text-muted-foreground transition-colors hover:text-foreground"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] text-accent-foreground">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function StickyGallery({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <section className="border-t border-border px-6 py-20 md:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-24 lg:h-[78vh]">
          <div className="relative h-[58vh] overflow-hidden bg-card lg:h-full">
            {GALLERY.map((shot, i) => (
              <img
                key={shot.label}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={1200}
                height={1500}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-out",
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            {GALLERY.map((shot, i) => (
              <button
                key={shot.label}
                onClick={() => setActive(i)}
                className={cn(
                  "flex-1 border-t pt-3 text-left text-[10px] tracking-[0.25em] uppercase transition-colors duration-500",
                  i === active
                    ? "border-accent text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {shot.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-24 py-4 lg:gap-40 lg:py-24">
          {GALLERY.map((shot, i) => (
            <GalleryCopy key={shot.label} index={i} onEnter={setActive} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY_COPY = [
  {
    eyebrow: "01 — The Bottle",
    title: "Weight in the hand",
    body: "Thick frosted glass, cut square, capped in brushed steel. Cold to the touch before the first spray, and unmistakable on a shelf of louder things.",
  },
  {
    eyebrow: "02 — The Case",
    title: "Sealed in black",
    body: "A matte outer case lined in silver foil. Nothing decorative — just the discipline of a house that lets the scent speak first.",
  },
  {
    eyebrow: "03 — The Mood",
    title: "Air at altitude",
    body: "Orion belongs to open, freezing space: the clarity after rain, the quiet of a city at four in the morning, the pull of somewhere further out.",
  },
];

function GalleryCopy({ index, onEnter }: { index: number; onEnter: (i: number) => void }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.6);
  useEffect(() => {
    if (shown) onEnter(index);
  }, [shown, index, onEnter]);
  const copy = GALLERY_COPY[index] ?? GALLERY_COPY[0]!;
  return (
    <div ref={ref} className={cn("reveal max-w-md", shown && "reveal-in")}>
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2 className="text-display mt-5 text-4xl lg:text-5xl">{copy.title}</h2>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{copy.body}</p>
    </div>
  );
}

function ScentNotes() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-10 lg:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow">Fresh · Citrus · Aromatic</p>
          <h2 className="text-display mt-6 text-5xl lg:text-7xl">The Composition</h2>
        </Reveal>

        <div className="mt-20 space-y-0">
          {NOTES.map((n, i) => (
            <Reveal key={n.tier} delay={i * 120}>
              <div className="group relative grid gap-6 border-t border-border py-10 transition-colors duration-500 hover:border-accent md:grid-cols-[auto_1fr_1.1fr] md:items-baseline md:gap-12">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="absolute inset-0 rounded-full opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ background: "var(--gradient-frost)" }}
                    />
                  </span>
                  <span className="eyebrow">{n.tier} Notes</span>
                </div>
                <p className="text-display text-3xl lg:text-4xl">{n.items.join(" · ")}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </div>
            </Reveal>
          ))}
          <div className="frost-line opacity-60" />
        </div>
      </div>
    </section>
  );
}

const DETAILS = [
  { k: "Size", v: "100 ml / 3.4 fl. oz." },
  { k: "Longevity", v: "7–9 hours, moderate projection" },
  { k: "Occasion", v: "Daily wear · Office · Evening" },
  { k: "Made for", v: "Unisex" },
];

function DetailsBar() {
  return (
    <section className="border-y border-border bg-card/40 px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {DETAILS.map((d, i) => (
          <Reveal key={d.k} delay={i * 80}>
            <p className="eyebrow">{d.k}</p>
            <p className="text-display mt-3 text-2xl">{d.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CrossSell() {
  return (
    <section className="px-6 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-display text-4xl lg:text-5xl">Explore the rest of the collection</h2>
        </Reveal>
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {COLLECTION.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <a
                href={c.href}
                className="group flex h-full flex-col justify-between gap-16 bg-background p-8 transition-colors duration-500 hover:bg-card"
              >
                <span className="eyebrow">Parfum · 100ml</span>
                <span>
                  <span className="text-display flex items-center gap-2 text-4xl transition-colors duration-500 group-hover:text-accent">
                    {c.name}
                    <ArrowUpRight className="h-5 w-5 -translate-x-1 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-3 block text-xs tracking-widest text-muted-foreground uppercase">
                    {c.note}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14 pb-28 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <span className="text-display text-lg tracking-[0.45em]">SARKAR</span>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          <a className="transition-colors hover:text-foreground" href="#">Shipping</a>
          <a className="transition-colors hover:text-foreground" href="#">Returns</a>
          <a className="transition-colors hover:text-foreground" href="#">Privacy</a>
          <a className="transition-colors hover:text-foreground" href="#">Terms</a>
          <a className="transition-colors hover:text-foreground" href="mailto:care@sarkarparfum.com">
            care@sarkarparfum.com
          </a>
        </nav>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-foreground">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-foreground">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-foreground">
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-[11px] tracking-widest text-muted-foreground/70 uppercase">
        © {new Date().getFullYear()} Sarkar Parfum. All rights reserved.
      </p>
    </footer>
  );
}

function StickyAddBar({ visible, onAdd }: { visible: boolean; onAdd: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/85 backdrop-blur-xl transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <div className="min-w-0">
          <p className="text-display truncate text-xl">ORION · 100ml</p>
          <p className="text-[11px] tracking-widest text-muted-foreground uppercase">
            {PRICE} · Incl. of all taxes
          </p>
        </div>
        <AddButton onClick={onAdd} />
      </div>
    </div>
  );
}

function CartDrawer({
  open,
  qty,
  onClose,
  setQty,
}: {
  open: boolean;
  qty: number;
  onClose: () => void;
  setQty: (n: number) => void;
}) {
  const total = 1499 * qty;
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden
        className={cn(
          "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-500",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <aside
        aria-hidden={!open}
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background transition-transform duration-500",
          open ? "translate-x-0" : "translate-x-full",
        )}
        style={{ transitionTimingFunction: "var(--ease-silk)" }}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Your Bag</p>
          <button onClick={onClose} aria-label="Close cart" className="text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          {qty === 0 ? (
            <p className="text-sm text-muted-foreground">Your bag is empty.</p>
          ) : (
            <div className="flex gap-5">
              <img
                src={heroShot}
                alt="ORION 100ml parfum"
                loading="lazy"
                width={1200}
                height={1600}
                className="h-32 w-24 shrink-0 object-cover"
              />
              <div className="flex-1">
                <p className="text-display text-2xl">ORION</p>
                <p className="mt-1 text-[11px] tracking-widest text-muted-foreground uppercase">
                  Unisex Parfum · 100ml
                </p>
                <p className="mt-4 text-sm">{PRICE}</p>
                <div className="mt-4 inline-flex items-center border border-border">
                  <button
                    onClick={() => setQty(Math.max(0, qty - 1))}
                    className="px-3 py-1 text-muted-foreground hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 text-sm">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-1 text-muted-foreground hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border px-6 py-6">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">Total</span>
            <span className="text-display text-3xl">₹{total.toLocaleString("en-IN")}</span>
          </div>
          <p className="mt-1 text-[11px] tracking-widest text-muted-foreground uppercase">
            Incl. of all taxes
          </p>
          <button
            disabled={qty === 0}
            className="mt-6 w-full py-4 text-[11px] tracking-[0.3em] uppercase text-accent-foreground transition-opacity disabled:opacity-30"
            style={{ background: "var(--gradient-frost)" }}
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
