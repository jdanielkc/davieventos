import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module'; // Asegúrate de crear este archivo
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    EventsComponent,
    EventDetailComponent
  ],
  declarations: []
})
export class EventsModule { }