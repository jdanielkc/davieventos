export interface Event {
  id?: number;
  name: string; // Cambiado de 'title' a 'name' para coincidir con el backend
  description?: string;
  eventDate: string;
  location?: string;
  capacity?: number;
  categoryId?: number;
  categoryName?: string; // Añadido para manejar el campo plano del backend
}

export interface EventResponse {
  event?: Event;
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}

export interface AllEventsResponse {
  events?: Event[];
  success?: boolean;
  message?: string;
  showMessage?: boolean;
}
