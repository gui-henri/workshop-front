import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardHeader } from '@angular/material/card';
import { GetWorkshopResponse, Workshop } from '../../interfaces/workshop.interface';
import { WorkshopsService } from '../../services/workshops.service';
import { Collaborator } from '../../interfaces/collaborator.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, MatFormFieldModule, MatLabel, MatIcon, MatCard, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardHeader, MatButtonModule],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {

  newWorkshop: Workshop = { name: '', description: '', date: '' }
  workshopCollaborators: Collaborator[] = []
  workshops: GetWorkshopResponse[] = []

  constructor(private workshopService: WorkshopsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.workshopService.listWorkshops().subscribe({
      next: (workshops) => {
        this.workshops = workshops;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  generateRoute(workshopId: string) {
    return `/workshop/${workshopId}`;
  }

  sendWorkshop() {
    if (this.newWorkshop.name === '' || this.newWorkshop.description === '' || this.newWorkshop.date === '') {
      return;
    }
    this.workshopService.sendWorkshop(this.newWorkshop).subscribe({
      complete: () => {
        this.newWorkshop.name = '';
        this.newWorkshop.description = '';
        this.newWorkshop.date = '';
        this.openSnackBar('Workshop cadastrado com sucesso!', 'Fechar');
        this.workshopService.listWorkshops().subscribe({
          next: (workshops) => {
            this.workshops = workshops;
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
