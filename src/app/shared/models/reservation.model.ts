export interface ReservationCreateRequest {
  eventId: number;
  status?: string;
}

export interface Reservation {
  id?: number;
  reservationDate: string;
  status: string;
  userId?: number;
  eventId: number;
  eventTitle?: string;
}

export interface ReservationResponse {
  reservation?: Reservation;
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}

export interface AllReservationsResponse {
  reservations?: Reservation[];
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}
