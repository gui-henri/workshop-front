import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeleteWorkshopResponse, GetWorkshopResponse, SendWorkshopResponse, Workshop, bindCollaboratorToWorkshopResponse } from '../interfaces/workshop.interface';
import { Observable } from 'rxjs';
import { GetCollaboratorResponse } from '../interfaces/collaborator.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkshopsService {

  private baseEndpoint = 'https://localhost:7139/api/workshops';

  constructor(private http: HttpClient) { }

  listWorkshops(): Observable<GetWorkshopResponse[]> {
    return this.http.get<GetWorkshopResponse[]>(this.baseEndpoint);
  }

  sendWorkshop(workshop: Workshop): Observable<SendWorkshopResponse> {
    return this.http.post<SendWorkshopResponse>(this.baseEndpoint, workshop);
  }

  deleteWorkshop(id: string): Observable<DeleteWorkshopResponse> {
    return this.http.delete<DeleteWorkshopResponse>(`${this.baseEndpoint}/${id}`);
  }

  getWorkshop(id: string): Observable<GetWorkshopResponse> {
    return this.http.get<GetWorkshopResponse>(`${this.baseEndpoint}/${id}`);
  }

  getWorkshopCollaborators(id: string): Observable<GetCollaboratorResponse[]> {
    return this.http.get<GetCollaboratorResponse[]>(`${this.baseEndpoint}/${id}/collaborators`);
  }

  bindCollaboratorToWorkshop(workshopId: string, collaboratorId: string): Observable<bindCollaboratorToWorkshopResponse> {
    return this.http.post<bindCollaboratorToWorkshopResponse>(`${this.baseEndpoint}/${workshopId}/collaborators/${collaboratorId}`, {});
  }
}
