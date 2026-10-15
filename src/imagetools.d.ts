// vite-imagetools v12 no longer ships a "client" types entry — declare the
// query-suffixed image imports used by this project.
declare module "*.jpg?*" {
  const src: string;
  export default src;
}
declare module "*.png?*" {
  const src: string;
  export default src;
}
declare module "*.webp?*" {
  const src: string;
  export default src;
}
