import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {MissionDetailsComponent} from './mission-details/mission-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:id', component: MissionDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
];
