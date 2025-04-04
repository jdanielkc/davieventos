import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    // Redirigir a home si ya está autenticado
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  // Validador personalizado para confirmar contraseña
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ notMatch: true });
      return { notMatch: true }; // Devolver un objeto de error cuando no coinciden
    } else {
      // Opcionalmente, limpia el error si existía previamente
      formGroup.get('confirmPassword')?.setErrors(null);
      return null; // No hay error de validación
    }
  }

  // Getter para acceder fácilmente a los campos del formulario
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Si el formulario no es válido, detener
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService
      .register({
        firstName: this.f['firstName'].value,
        lastName: this.f['lastName'].value,
        email: this.f['email'].value,
        password: this.f['password'].value,
        confirmPassword: this.f['confirmPassword'].value,
      })
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['/auth/login'], {
            queryParams: { registered: true },
          });
        },
        error: (error) => {
          this.error = error.error.message || 'Error en el registro';
          this.loading = false;
        },
      });
  }
}
