// src/global.d.ts
interface Window {
  cookieconsent: any;  // Declare cookieconsent on the window object
  gaLoaded?: boolean;
  dataLayer?: any[];
}

// Declare the gtag function globally
declare function gtag(command: string, eventName: string, params?: any): void;