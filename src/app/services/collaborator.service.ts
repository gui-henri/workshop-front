import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collaborator, SendCollaboratorResponse, GetCollaboratorResponse } from '../interfaces/collaborator.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollaboratorService {

  private endpoint = 'https://localhost:7139/api/colaboradores';

  constructor(private http: HttpClient) {

  }

  listCollaborators(): Observable<GetCollaboratorResponse[]> {
    return this.http.get<GetCollaboratorResponse[]>(this.endpoint);
  }

  sendCollaborator(collaborator: Collaborator): Observable<SendCollaboratorResponse> {
    return this.http.post<SendCollaboratorResponse>(this.endpoint, collaborator);
  }
}
