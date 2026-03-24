declare module '*.astro' {
  const component: { (props: Record<string, unknown>): => string };
  export default component;
}
