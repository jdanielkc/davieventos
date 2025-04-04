import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import {
  ReservationCreateRequest,
  ReservationResponse,
  AllReservationsResponse,
} from '../../shared/models/reservation.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = environment.apiUrl + '/reservations';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Obtener todas las reservas del usuario actual
  getUserReservations(): Observable<AllReservationsResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.get<AllReservationsResponse>(`${this.apiUrl}/${userId}`);
  }

  // Obtener una reserva específica
  getReservationById(reservationId: number): Observable<ReservationResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.get<ReservationResponse>(
      `${this.apiUrl}/${userId}/${reservationId}`
    );
  }

  // Crear una nueva reserva
  createReservation(
    reservation: ReservationCreateRequest
  ): Observable<ReservationResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.post<ReservationResponse>(
      `${this.apiUrl}/${userId}`,
      reservation
    );
  }

  // Cancelar una reserva
  cancelReservation(reservationId: number): Observable<ReservationResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.delete<ReservationResponse>(
      `${this.apiUrl}/${userId}/${reservationId}`
    );
  }
}
