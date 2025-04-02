import {Component, Input} from '@angular/core';
import {ApiClientService} from '../service/api-client.service';
import {Launch} from '../models/launch.model';
import {MatCardModule} from '@angular/material/card';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-missionlist',
  imports: [MatCardModule, RouterLink],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent {
  public data: Launch[] = []
  @Input() filter: string = '';

  constructor(private apiClient: ApiClientService, private router: Router) {  }

  ngOnInit() {
    this.getAllLaunches()
  }

  ngOnChanges() {
    this.getFilteredLaunches()
  }

  getAllLaunches() {
    this.apiClient.getAllLaunches().subscribe(
      {
        next: (response: Launch[]) => {
          this.data = response;
        },
        error: (error: any) => {}
      }
    )
  }

  missionDetails(id: number) {
    this.router.navigate(['/details/' + id.toString()])
  }

  getFilteredLaunches() {
    this.apiClient.getLaunchesByYear(this.filter).subscribe(
      {
        next: (response: Launch[]) => {
          this.data = response;
        },
        error: (error: any) => {}
      }
    )
  }
}
