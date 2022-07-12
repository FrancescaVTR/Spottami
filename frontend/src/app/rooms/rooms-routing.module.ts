import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';
import { SingleRoomComponent } from './single-room/single-room.component';

const roomsRoutes: Routes = [
  { path: '', component: RoomsComponent },
  { path: ':id', component: SingleRoomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(roomsRoutes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
