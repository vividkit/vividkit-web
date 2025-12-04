declare module 'alpinejs' {
  const Alpine: any;
  export default Alpine;
}

declare global {
  interface Window {
    Alpine: any;
  }
}

export {};