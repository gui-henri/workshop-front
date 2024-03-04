import { Routes } from '@angular/router';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { WorkshopDetailsComponent } from './components/workshop-details/workshop-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/collaborators', pathMatch: 'full' },
    { path: 'collaborators', component: CollaboratorsComponent },
    { path: 'workshops', component: WorkshopsComponent },
    { path: 'workshop/:id', component: WorkshopDetailsComponent }
];
