import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from "./event-details/event-details.component";
import { EventsComponent } from './events/events.component';

const routes: Routes = [

  // {
  //   path: 'events',
  //   component: EventsComponent,
  // },
  // {
  //   path: "event-details/:id",
  //   component: EventDetailsComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
