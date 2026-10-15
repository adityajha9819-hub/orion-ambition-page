// vite-imagetools v12 no longer ships a "client" types entry — declare the
// query-suffixed image imports used by this project (single wildcard, TS limit).
declare module "*?*" {
  const src: string;
  export default src;
}
