import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  Category,
  CategoryResponse,
  AllCategoriesResponse,
  CategoryCreateRequest,
} from '../../shared/models/category.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Obtener todas las categorías
  getAllCategories(): Observable<AllCategoriesResponse> {
    return this.http.get<AllCategoriesResponse>(this.apiUrl);
  }

  // Crear una nueva categoría
  createCategory(
    categoryData: CategoryCreateRequest
  ): Observable<CategoryResponse> {
    return this.http.post<CategoryResponse>(this.apiUrl, categoryData);
  }
}
