// vite-imagetools v12 no longer ships a "client" types entry — declare the
// exact query-suffixed image imports used by this project.
declare module "@/assets/orion-hero.jpg?w=960&format=webp" {
  const src: string;
  export default src;
}
declare module "@/assets/orion-hero.jpg?w=420;720;960;1200&format=webp&as=srcset" {
  const src: string;
  export default src;
}
declare module "@/assets/orion-packaging.jpg?w=900&format=webp" {
  const src: string;
  export default src;
}
declare module "@/assets/orion-packaging.jpg?w=420;720;900&format=webp&as=srcset" {
  const src: string;
  export default src;
}
declare module "@/assets/orion-mood.jpg?w=900&format=webp" {
  const src: string;
  export default src;
}
declare module "@/assets/orion-mood.jpg?w=420;720;900&format=webp&as=srcset" {
  const src: string;
  export default src;
}
