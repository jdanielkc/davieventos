import { Component, OnInit } from '@angular/core';
import { EventService } from '../../core/service/event.service';
import { Event } from '../../shared/models/event.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  loading = true;
  error = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.loading = true;
    this.eventService.getAllEvents().subscribe({
      next: (response) => {
        if (response.events) {
          this.events = response.events;
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Error al cargar eventos';
        this.loading = false;
      }
    });
  }
}