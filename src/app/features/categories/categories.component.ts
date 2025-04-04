import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../core/service/category.service';
import { Category } from '../../shared/models/category.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  loading = true;
  error = '';
  success = '';
  categoryForm: FormGroup;
  isCreating = false;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories(): void {
    this.loading = true;
    this.categoryService.getAllCategories().subscribe({
      next: (response) => {
        if (response.categories) {
          this.categories = response.categories;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al cargar categorías';
        this.loading = false;
      },
    });
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) {
      return;
    }

    this.isCreating = true;
    this.error = '';
    this.success = '';

    const categoryData = {
      name: this.categoryForm.get('name')?.value,
      description: this.categoryForm.get('description')?.value,
    };

    this.categoryService.createCategory(categoryData).subscribe({
      next: (response) => {
        this.success = response.message || 'Categoría creada exitosamente';
        this.loadCategories();
        this.categoryForm.reset();
        this.isCreating = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al crear la categoría';
        this.isCreating = false;
      },
    });
  }
}
