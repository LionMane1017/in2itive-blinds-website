export interface PageInfo {
  title: string;
  path: string;
}

export const pages: PageInfo[] = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Study", path: "/study" },
  { title: "Executive Summary", path: "/executive-summary" },
  { title: "Vendor Lock-in", path: "/vendor-lockin" },
  { title: "CTO Strategic Vision", path: "/cto-vision" },
  { title: "Current Infrastructure", path: "/current-infrastructure" },
  { title: "The Solution", path: "/solution" },
  { title: "Financial Analysis", path: "/financial-analysis" },
  { title: "Technical Strategy", path: "/technical-strategy" },
  { title: "CTO Validation", path: "/cto-validation" },
  { title: "Supporting Evidence", path: "/evidence" },
  { title: "Conclusion", path: "/conclusion" },
  { title: "Elaborated Executive Summary", path: "/elab-executive-summary" },
  { title: "Elaborated Vendor Lock-in", path: "/elab-vendor-lockin" },
  { title: "Elaborated CTO Strategic Vision", path: "/elab-cto-vision" },
  { title: "Elaborated Current Infrastructure", path: "/elab-current-infrastructure" },
  { title: "Elaborated Solution", path: "/elab-solution" },
  { title: "Elaborated Financial Analysis", path: "/elab-financial-analysis" },
  { title: "Elaborated Technical Strategy", path: "/elab-technical-strategy" },
  { title: "Elaborated CTO Validation", path: "/elab-cto-validation" },
  { title: "Elaborated Supporting Evidence", path: "/elab-supporting-evidence" },
  { title: "Elaborated Conclusion", path: "/elab-conclusion" },
];

export function getPageNavigation(currentPath: string) {
  const currentIndex = pages.findIndex((page) => page.path === currentPath);
  
  if (currentIndex === -1) {
    return { previousPage: undefined, nextPage: undefined };
  }

  return {
    previousPage: currentIndex > 0 ? pages[currentIndex - 1] : undefined,
    nextPage: currentIndex < pages.length - 1 ? pages[currentIndex + 1] : undefined,
  };
}
