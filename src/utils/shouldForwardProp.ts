export const excludeProps =
  (...props: string[]) =>
  (prop: PropertyKey) =>
    !props.includes(prop as string);
