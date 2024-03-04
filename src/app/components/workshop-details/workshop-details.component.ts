import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopsService } from '../../services/workshops.service';
import { Collaborator } from '../../interfaces/collaborator.interface';
import { MatCard, MatCardContent } from '@angular/material/card';


@Component({
  selector: 'app-workshop-details',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './workshop-details.component.html',
  styleUrl: './workshop-details.component.css'
})
export class WorkshopDetailsComponent {

  workshopId: string = "";
  collaborators: Collaborator[] = [];

  constructor(private route: ActivatedRoute, private workshopService: WorkshopsService) {

  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.workshopId = id ? id : "";
    this.getCollaborators(this.workshopId);
  }

  getCollaborators(workshopId: string) {
    this.workshopService.getWorkshopCollaborators(workshopId).subscribe({
      next: (collaborators) => {
        this.collaborators = collaborators;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
