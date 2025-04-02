import { Component } from '@angular/core';
import {Launch} from '../models/launch.model';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ApiClientService} from '../service/api-client.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-mission-details',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {
  data!: Launch;
  id!: number;

  constructor(private route: ActivatedRoute, private apiClient: ApiClientService) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getLaunch(this.id);
  }

  getLaunch(id: number) {
    this.apiClient.getLaunchById(id).subscribe(
      {
        next: (response: Launch) => {
          this.data = response;
        },
        error: (error: any) => {}
      }
    )
  }

}
