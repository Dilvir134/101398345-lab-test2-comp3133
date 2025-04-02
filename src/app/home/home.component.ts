import { Component } from '@angular/core';
import {MissionlistComponent} from '../missionlist/missionlist.component';
import {MissionfilterComponent} from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-home',
  imports: [MissionlistComponent, MissionfilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  year: string = '';

  passYear(event: string) {
    this.year = event;
  }
}
