import { Component, OnInit, TemplateRef } from '@angular/core';
import { ReservationService } from '../../core/service/reservation.service';
import { Reservation } from '../../shared/models/reservation.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = [];
  loading = true;
  error = '';
  success = '';
  cancelingReservationId?: number;
  selectedReservation?: Reservation;

  constructor(
    private reservationService: ReservationService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.loading = true;
    this.reservationService.getUserReservations().subscribe({
      next: (response) => {
        if (response.reservations) {
          this.reservations = response.reservations;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al cargar reservas';
        this.loading = false;
      },
    });
  }

  openCancelModal(content: TemplateRef<any>, reservation: Reservation): void {
    this.selectedReservation = reservation;
    this.modalService.open(content, { centered: true, backdrop: 'static' });
  }

  cancelReservation(id: number): void {
    this.cancelingReservationId = id;
    this.error = '';
    this.success = '';

    this.reservationService.cancelReservation(id).subscribe({
      next: (response) => {
        this.success = response.message || 'Reserva cancelada exitosamente';
        this.loadReservations();
        this.cancelingReservationId = undefined;
        this.modalService.dismissAll();
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al cancelar la reserva';
        this.cancelingReservationId = undefined;
        this.modalService.dismissAll();
      },
    });
  }
}
