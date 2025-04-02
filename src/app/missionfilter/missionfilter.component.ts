import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  imports: [FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  @Output() launchYear = new EventEmitter<string>();
  inputData: string = '';

  sendData() {
    this.launchYear.emit(this.inputData);
  }
}
