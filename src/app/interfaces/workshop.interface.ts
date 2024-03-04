export interface Workshop {
    name: string;
    description: string;
    date: string;
}

export interface SendWorkshopResponse {
    id: string;
}

export interface GetWorkshopResponse {
    id: string;
    name: string;
    description: string;
    date: string;
}

export interface DeleteWorkshopResponse { }

export interface bindCollaboratorToWorkshopResponse {
    workshopId: string;
    collaboratorId: string;
}