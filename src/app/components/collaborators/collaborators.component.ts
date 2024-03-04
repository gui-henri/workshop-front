import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CollaboratorService } from '../../services/collaborator.service';
import { Collaborator } from '../../interfaces/collaborator.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-collaborators',
  standalone: true,
  providers: [CollaboratorService],
  imports: [FormsModule, RouterOutlet, MatToolbar, MatButtonModule, MatIcon, MatCard, MatCardContent, MatFormFieldModule, MatLabel, MatInputModule],
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.css'
})

export class CollaboratorsComponent {
  constructor(private collaboratorService: CollaboratorService) { }

  newCollaborator: Collaborator = { name: '' };
  collaborators: Collaborator[] = [];

  ngOnInit() {
    this.collaboratorService.listCollaborators().subscribe({
      next: (collaborators) => {
        this.collaborators = collaborators;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  sendCollaborator() {
    if (this.newCollaborator.name === '') {
      return;
    }
    this.collaboratorService.sendCollaborator(this.newCollaborator).subscribe({
      complete: () => {
        this.newCollaborator.name = '';
        this.collaboratorService.listCollaborators().subscribe({
          next: (collaborators) => {
            this.collaborators = collaborators;
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
