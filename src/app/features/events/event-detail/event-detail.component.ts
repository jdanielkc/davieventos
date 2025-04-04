import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EventService } from '../../../core/service/event.service';
import { ReservationService } from '../../../core/service/reservation.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class EventDetailComponent implements OnInit {
  eventId!: number;
  event: any = null;
  reservationForm!: FormGroup;
  loading = false;
  error = '';
  success = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private reservationService: ReservationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEvent();
    this.initForm();
  }

  initForm(): void {
    this.reservationForm = this.fb.group({
      status: ['PENDIENTE', Validators.required],
    });
  }

  loadEvent(): void {
    this.loading = true;
    this.eventService.getEventById(this.eventId).subscribe({
      next: (response) => {
        if (response.event) {
          this.event = response.event;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al cargar el evento';
        this.loading = false;
      },
    });
  }

  makeReservation(): void {
    if (this.reservationForm.invalid) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const reservation = {
      eventId: this.eventId,
      status: this.reservationForm.get('status')?.value,
    };

    this.reservationService.createReservation(reservation).subscribe({
      next: (response) => {
        this.success = response.message || 'Reserva creada con éxito';
        this.loading = false;
        setTimeout(() => {
          this.router.navigate(['/reservations']);
        }, 2000);
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al crear la reserva';
        this.loading = false;
      },
    });
  }
}
