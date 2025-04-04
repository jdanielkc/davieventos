export interface Category {
  id?: number;
  name: string;
  description?: string;
}

export interface CategoryResponse {
  category?: Category;
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}

export interface AllCategoriesResponse {
  categories?: Category[];
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}

export interface CategoryCreateRequest {
  name: string;
  description?: string;
}
