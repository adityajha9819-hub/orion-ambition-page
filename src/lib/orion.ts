export const ORION = {
  name: "SARKAR ORION Unisex Parfum 100ml",
  tagline: "Infinite. Cold. Ambitious.",
  price: 1499,
  currency: "INR",
  siteUrl: "https://orion-ambition-page.lovable.app/",
  storeUrl: "https://www.sarkar.store/products/orion",
  contact: "support@sarkar.store",
  description: "ORION by SARKAR is a Fresh, Citrus, Aromatic unisex parfum. Infinite. Cold. Ambitious. 100ml with 25% perfume oil, ₹1,499 inclusive of all taxes.",
  notes: [
    { tier: "Top", items: ["Lavender", "Lemon"], text: "Lavender and lemon introduce the fresh, citrus character of ORION." },
    { tier: "Heart", items: ["Geranium", "Rose", "Cherry"], text: "Geranium, rose and cherry form the heart of the composition." },
    { tier: "Base", items: ["Patchouli", "Sandalwood", "Musk"], text: "Patchouli, sandalwood and musk complete the base." },
  ],
} as const;

export function orionProductSchema(imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${ORION.siteUrl}#product`,
    name: ORION.name,
    description: ORION.description,
    image: [imageUrl],
    url: ORION.siteUrl,
    brand: { "@type": "Brand", name: "SARKAR", url: "https://www.sarkar.store/" },
    category: "Unisex Parfum",
    size: "100ml",
    offers: {
      "@type": "Offer",
      priceCurrency: ORION.currency,
      price: ORION.price,
      url: ORION.storeUrl,
      seller: { "@type": "Organization", name: "SARKAR", url: "https://www.sarkar.store/" },
    },
  };
}