declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}
