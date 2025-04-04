import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Event, EventResponse, AllEventsResponse } from '../../shared/models/event.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = environment.apiUrl + '/events';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Obtener todos los eventos para el usuario actual
  getAllEvents(): Observable<AllEventsResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.get<AllEventsResponse>(`${this.apiUrl}/all/${userId}`);
  }

  // Obtener un evento específico
  getEventById(eventId: number): Observable<EventResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.get<EventResponse>(`${this.apiUrl}/${userId}/${eventId}`);
  }

  // Crear un nuevo evento
  createEvent(eventData: Partial<Event>): Observable<EventResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.post<EventResponse>(`${this.apiUrl}/${userId}`, eventData);
  }

  // Actualizar un evento
  updateEvent(eventId: number, eventData: Partial<Event>): Observable<EventResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.put<EventResponse>(`${this.apiUrl}/${userId}/${eventId}`, eventData);
  }

  // Eliminar un evento
  deleteEvent(eventId: number): Observable<EventResponse> {
    const userId = this.authService.currentUserValue?.userId;
    return this.http.delete<EventResponse>(`${this.apiUrl}/${userId}/${eventId}`);
  }
}