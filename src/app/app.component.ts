import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CollaboratorsComponent, MatToolbar, MatButtonModule, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workshop';
}
