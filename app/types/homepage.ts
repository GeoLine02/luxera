export interface Translation {
  locale: string;
  title?: string;
  desc?: string;
}

export interface Image {
  image_name: string;
  id?: number;
}

export interface Banner {
  id: number;
  slug?: string;
  title?: string;
  desc?: string;
  images?: Image[];
  translations?: Translation[];
}

export interface ProductImage {
  image_name: string;
  id?: number;
}

export interface Product {
  id: number | string;
  price: number | string;
  title?: string;
  images?: ProductImage[];
  translations?: Translation[];
}

export interface Page {
  type_id?: number;
  banners?: Banner[];
}

export interface HomepageData {
  // Support both array and object formats from different API versions
  data?: unknown; // Keep flexible for now
  featuredProducts?: Product[];
  bestSellingProducts?: Product[];
  vipProducts?: Product[];
  banner?: Banner;
  banners?: Banner[];
  mainBanners?: Banner[];
  sellProductBanners?: Banner[];
  [key: string]: unknown; // Allow flexible properties for API responses
}

export interface ResolvedParams {
  locale: string;
}
