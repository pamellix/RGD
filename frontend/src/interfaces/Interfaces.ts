export interface DetailsTable {
    id: number,
    detail: string,
    classificator: string,
    description: string
}

export interface CreateDetail {
    detail: string,
    classificator: string,
    description: string,
}

export interface CreateUser {
    login: string,
    password: string,
    role: string
}

export interface Login {
    login: string,
    password: string,
}