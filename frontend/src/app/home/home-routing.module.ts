import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: HeroComponent },
      { path: 'login', component: LoginComponent },
      { 
        path: 'stanze', 
        loadChildren: () => import('../rooms/rooms.module').then(m => m.RoomsModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
