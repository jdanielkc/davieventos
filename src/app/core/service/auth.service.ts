import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
} from '../../shared/models/user.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap((response) => {
          if (response.success !== false && response.token) {
            const user: User = {
              userId: response.userId!,
              firstName: response.firstName!,
              lastName: response.lastName!,
              email: response.email!,
              token: response.token,
            };
            this.setCurrentUser(user);
          }
        })
      );
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    console.log('URL registro:', `${this.apiUrl}/register`); // Añade este log
    console.log('Datos enviados:', userData); // Añade este log
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, userData);
  }

  logout(): void {
    // Eliminar el elemento del localStorage
    localStorage.removeItem('currentUser');
    
    localStorage.clear();
    
    // Actualizar el BehaviorSubject
    this.currentUserSubject.next(null);
    // this.router.navigate(['/auth/login']);
  }

  private setCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        localStorage.removeItem('currentUser');
      }
    }
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  get isLoggedIn(): boolean {
    return !!this.currentUserValue?.token;
  }
}
