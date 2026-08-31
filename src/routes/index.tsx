import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Facebook,
  Instagram,
  ShoppingBag,
  Star,
  Twitter,
  X,
  Zap,
} from "lucide-react";

import { Reveal, useParallax, useReveal } from "@/components/orion/reveal";
import { cn } from "@/lib/utils";
import heroShot from "@/assets/orion-hero.jpg?w=960&format=webp";
import heroSet from "@/assets/orion-hero.jpg?w=420;720;960;1200&format=webp&as=srcset";
import packagingShot from "@/assets/orion-packaging.jpg?w=900&format=webp";
import packagingSet from "@/assets/orion-packaging.jpg?w=420;720;900&format=webp&as=srcset";
import moodShot from "@/assets/orion-mood.jpg?w=900&format=webp";
import moodSet from "@/assets/orion-mood.jpg?w=420;720;900&format=webp&as=srcset";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ORION 100ml — SARKAR Parfum by Bhuvan Bam" },
      {
        name: "description",
        content:
          "SARKAR ORION is a fresh citrus aromatic unisex parfum with 25% oil concentration, French and Spanish formulation cues, and a cold maximalist launch experience.",
      },
      { property: "og:title", content: "ORION 100ml — SARKAR Parfum" },
      {
        property: "og:description",
        content:
          "Citrus, lavender, cedarwood and early wins. A maximalist fast-loading product story for SARKAR ORION.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrionPage,
});

const PRICE = "₹1,499";

const GALLERY = [
  {
    src: heroShot,
    srcSet: heroSet,
    alt: "ORION parfum bottle lit by cold blue light on black stone",
    label: "Bottle",
    caption: "Frosted glass · brushed steel · cold geometry",
  },
  {
    src: packagingShot,
    srcSet: packagingSet,
    alt: "ORION matte black packaging beside the frosted bottle",
    label: "Ritual",
    caption: "Matte black case · silver liner · unboxing theatre",
  },
  {
    src: moodShot,
    srcSet: moodSet,
    alt: "Icy blue mist drifting over dark obsidian stone",
    label: "Atmosphere",
    caption: "Citrus air · lavender signal · cedarwood trail",
  },
];

const NOTES = [
  {
    tier: "Top",
    items: ["Lemon", "Citrus Spark", "Cold Air"],
    text: "Instant brightness built for workdays, morning runs and everyday momentum.",
  },
  {
    tier: "Heart",
    items: ["Lavender", "Mineral Mist", "Blue Aromatics"],
    text: "A clean aromatic pulse that feels polished without becoming predictable.",
  },
  {
    tier: "Base",
    items: ["Cedarwood", "Musk", "Sandalwood"],
    text: "A grounded drydown with smooth woods and a quietly confident trail.",
  },
];

const COLLECTION = [
  { name: "Noble", note: "Woody · Spiced Amber · Warm", price: "₹1,499", href: "#" },
  { name: "Throne", note: "Leather · Oud · Commanding", price: "₹2,499", href: "#" },
  { name: "Regal", note: "Floral · Vanilla · Opulent", price: "₹1,499", href: "#" },
];

const WINNING_ROUNDS = [
  {
    round: "01",
    idea: "Constellation Commerce",
    score: "9.6",
    reason:
      "Best blend of brand drama, fast static layout, clear CTA and cosmic ORION memory hooks.",
  },
  {
    round: "02",
    idea: "Cinema Drop",
    score: "9.3",
    reason: "Framer-style pacing, oversized type and product stills create a premium launch feel.",
  },
  {
    round: "03",
    idea: "React Bits Energy",
    score: "9.2",
    reason:
      "CSS-only dot fields, glare cards and animated badges deliver motion without heavy runtime cost.",
  },
  {
    round: "04",
    idea: "Bharat Luxury Maximalism",
    score: "9.5",
    reason:
      "Royal colour, creator-led confidence and value proof make the page distinct for India.",
  },
];

function OrionPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [qty, setQty] = useState(0);
  const [activeShot, setActiveShot] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const hero = useParallax<HTMLDivElement>(0.035);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const addToCart = () => {
    setQty((q) => q + 1);
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header cartCount={qty} onCart={() => setCartOpen(true)} />
      <main>
        <Hero offset={hero.offset} heroRef={hero.ref} onAdd={addToCart} />
        <ProofStrip />
        <StickyGallery active={activeShot} setActive={setActiveShot} />
        <ScentNotes />
        <ConceptLab />
        <DetailsBar />
        <CrossSell />
      </main>
      <Footer />
      <StickyAddBar visible={showBar && !cartOpen} onAdd={addToCart} />
      <CartDrawer open={cartOpen} qty={qty} onClose={() => setCartOpen(false)} setQty={setQty} />
    </div>
  );
}

function Hero({
  offset,
  heroRef,
  onAdd,
}: {
  offset: number;
  heroRef: React.RefObject<HTMLDivElement | null>;
  onAdd: () => void;
}) {
  return (
    <section className="hero-grid relative isolate min-h-screen px-5 pt-24 pb-14 md:px-10 lg:pt-28">
      <div className="orb orb-cyan" aria-hidden />
      <div className="orb orb-rose" aria-hidden />
      <div className="dot-matrix" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <div className="relative z-10 order-2 lg:order-1">
          <Reveal>
            <p className="eyebrow text-frost">SARKAR by Bhuvan Bam · Unisex fresh parfum</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-display mt-5 text-[25vw] leading-[0.74] sm:text-[17vw] lg:text-[11rem]">
              ORI<span className="text-gradient">ON</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-balance text-2xl leading-tight text-silver sm:text-4xl">
              It smells like citrus, lavender and early wins — now staged as a maximalist cold-sky
              ritual.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-9 grid max-w-xl grid-cols-3 gap-2">
              <Metric v="25%" k="Oil concentration" />
              <Metric v="100ml" k="Full size" />
              <Metric v="24–36h" k="Ships fast" />
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <AddButton onClick={onAdd} />
              <a href="#composition" className="magnetic-link">
                Explore notes <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-display text-4xl text-accent">{PRICE}</p>
            </div>
          </Reveal>
        </div>
        <div ref={heroRef} className="relative order-1 lg:order-2">
          <div className="product-stage">
            <img
              src={heroShot}
              srcSet={heroSet}
              sizes="(min-width: 1024px) 52vw, 100vw"
              alt="ORION 100ml unisex parfum bottle under cold blue light"
              width={960}
              height={1280}
              fetchPriority="high"
              decoding="async"
              className="h-[58vh] w-full object-cover sm:h-[68vh] lg:h-[82vh]"
              style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.035)` }}
            />
            <div className="scanline" aria-hidden />
          </div>
          <div className="floating-ticket">
            <Star className="h-4 w-4 fill-current" /> Premium parfum · IFRA-compliant positioning
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ v, k }: { v: string; k: string }) {
  return (
    <div className="glass-card p-4">
      <p className="text-display text-3xl">{v}</p>
      <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">{k}</p>
    </div>
  );
}

function AddButton({ onClick, block }: { onClick: () => void; block?: boolean }) {
  return (
    <button onClick={onClick} className={cn("cta-button", block && "w-full")}>
      Add to Cart <Zap className="h-4 w-4" />
    </button>
  );
}

function Header({ cartCount, onCart }: { cartCount: number; onCart: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.28em] text-muted-foreground uppercase hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Shop</span>
        </a>
        <a href="#top" className="text-display text-xl tracking-[0.45em]">
          SARKAR
        </a>
        <button
          onClick={onCart}
          aria-label="Open cart"
          className="relative text-muted-foreground hover:text-foreground"
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

function ProofStrip() {
  return (
    <section className="border-y border-border bg-card/45 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
        <span>Fresh citrus aromatic</span>
        <span>French + Spanish formulation cues</span>
        <span>Mass-premium price, niche theatre</span>
        <span>Mobile-first performance</span>
      </div>
    </section>
  );
}

function StickyGallery({ active, setActive }: { active: number; setActive: (i: number) => void }) {
  return (
    <section className="border-t border-border px-5 py-20 md:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="lg:sticky lg:top-24 lg:h-[76vh]">
          <div className="product-stage h-[58vh] lg:h-full">
            {GALLERY.map((shot, i) => (
              <img
                key={shot.label}
                src={shot.src}
                srcSet={shot.srcSet}
                sizes="(min-width: 1024px) 50vw, 100vw"
                alt={shot.alt}
                loading="lazy"
                decoding="async"
                width={900}
                height={1125}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                )}
              />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {GALLERY.map((shot, i) => (
              <button
                key={shot.label}
                onClick={() => setActive(i)}
                className={cn(
                  "glass-card p-3 text-left text-[10px] tracking-[0.25em] uppercase",
                  i === active ? "text-accent" : "text-muted-foreground",
                )}
              >
                {shot.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-16 py-4 lg:py-20">
          {GALLERY.map((shot, i) => (
            <GalleryCopy key={shot.label} index={i} onEnter={setActive} caption={shot.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCopy({
  index,
  onEnter,
  caption,
}: {
  index: number;
  onEnter: (i: number) => void;
  caption: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.55);
  useEffect(() => {
    if (shown) onEnter(index);
  }, [shown, index, onEnter]);
  return (
    <div ref={ref} className={cn("reveal glass-card max-w-xl p-7", shown && "reveal-in")}>
      <p className="eyebrow">
        0{index + 1} — {GALLERY[index]?.label}
      </p>
      <h2 className="text-display mt-5 text-4xl lg:text-6xl">{caption}</h2>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        A high-contrast editorial block designed to feel like a Framer launch page while staying
        simple, server-rendered and fast.
      </p>
    </div>
  );
}

function ScentNotes() {
  return (
    <section id="composition" className="border-t border-border px-5 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow">Fresh · Citrus · Aromatic</p>
          <h2 className="text-display mt-6 text-6xl lg:text-8xl">The Composition</h2>
        </Reveal>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {NOTES.map((n, i) => (
            <Reveal key={n.tier} delay={i * 100}>
              <article className="glare-card h-full p-7">
                <p className="eyebrow text-accent">{n.tier} Notes</p>
                <h3 className="text-display mt-6 text-4xl">{n.items.join(" · ")}</h3>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptLab() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow">Research → rating → only winners kept</p>
          <h2 className="text-display mt-5 max-w-4xl text-5xl lg:text-7xl">
            Four concept rounds filtered to 9/10+ ideas.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {WINNING_ROUNDS.map((r) => (
            <Reveal key={r.round}>
              <article className="glass-card h-full p-6">
                <p className="eyebrow">Round {r.round}</p>
                <div className="mt-7 flex items-end justify-between gap-3">
                  <h3 className="text-display text-4xl">{r.idea}</h3>
                  <strong className="text-gradient text-3xl">{r.score}</strong>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{r.reason}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const DETAILS = [
  { k: "Size", v: "100 ml / 3.4 fl. oz." },
  { k: "Concentration", v: "25% perfume oil" },
  { k: "Occasion", v: "Workdays · runs · everyday" },
  { k: "Made for", v: "Men & women" },
];
function DetailsBar() {
  return (
    <section className="border-y border-border bg-card/40 px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {DETAILS.map((d, i) => (
          <Reveal key={d.k} delay={i * 60}>
            <p className="eyebrow">{d.k}</p>
            <p className="text-display mt-3 text-3xl">{d.v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function CrossSell() {
  return (
    <section className="px-5 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-display text-5xl lg:text-6xl">Complete the SARKAR shelf</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {COLLECTION.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <a href={c.href} className="glare-card block p-7">
                <span className="eyebrow">Parfum · 100ml · {c.price}</span>
                <span className="text-display mt-20 flex items-center gap-2 text-5xl text-foreground group-hover:text-accent">
                  {c.name}
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <span className="mt-3 block text-xs tracking-widest text-muted-foreground uppercase">
                  {c.note}
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
    <footer className="border-t border-border px-5 py-14 pb-28 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <span className="text-display text-lg tracking-[0.45em]">SARKAR</span>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          <a href="#">Shipping</a>
          <a href="#">Returns</a>
          <a href="#">Privacy</a>
          <a href="mailto:care@sarkarparfum.com">care@sarkarparfum.com</a>
        </nav>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Instagram className="h-4 w-4" />
          <Twitter className="h-4 w-4" />
          <Facebook className="h-4 w-4" />
        </div>
      </div>
    </footer>
  );
}
function StickyAddBar({ visible, onAdd }: { visible: boolean; onAdd: () => void }) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/88 backdrop-blur-xl transition-all duration-500",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <div className="min-w-0">
          <p className="text-display truncate text-xl">ORION · 100ml</p>
          <p className="text-[11px] tracking-widest text-muted-foreground uppercase">
            {PRICE} · Incl. taxes
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
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <p className="eyebrow">Your Bag</p>
          <button onClick={onClose} aria-label="Close cart">
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
                width={96}
                height={128}
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
                    className="px-3 py-1"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 text-sm">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-3 py-1"
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
          <button
            disabled={qty === 0}
            className="cta-button mt-6 w-full justify-center disabled:opacity-30"
          >
            Checkout <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  );
}
