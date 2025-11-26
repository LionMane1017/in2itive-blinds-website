export interface Product {
  name: string;
  path: string;
  icon: string;
  category: 'indoor' | 'outdoor' | 'motorization';
}

export const products: Product[] = [
  { name: "Roller Shades", path: "/products/roller-shades", icon: "🪟", category: 'indoor' },
  { name: "Vertical Blinds", path: "/products/vertical-blinds", icon: "📏", category: 'indoor' },
  { name: "Venetian Blinds", path: "/products/venetian-blinds", icon: "🎚️", category: 'indoor' },
  { name: "Honeycomb Shades", path: "/products/honeycomb-shades", icon: "🐝", category: 'indoor' },
  { name: "Custom Drapery", path: "/products/drapery", icon: "🎭", category: 'indoor' },
  { name: "Motorization", path: "/products/motorization", icon: "⚡", category: 'motorization' },
  { name: "Retractable Awnings", path: "/products/awnings", icon: "☂️", category: 'outdoor' },
  { name: "Outdoor Screens", path: "/products/outdoor-screens", icon: "🌿", category: 'outdoor' },
];

export const getProductIndex = (path: string) => {
    return products.findIndex(p => p.path === path);
}

export const getProductByPath = (path: string) => {
    return products.find(p => p.path === path);
}

export const getProductBreadcrumbs = (path: string) => {
    const product = getProductByPath(path);
    if (!product) return [];

    return [
        { label: 'Products', href: '/products' },
        { label: product.name, href: product.path }
    ];
}
