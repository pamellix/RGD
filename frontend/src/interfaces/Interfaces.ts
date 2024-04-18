import { ChangeEvent } from "react";

export interface DetailsTable {
    id: number,
    code: string,
    decNumber: string,
    name: string,
    makeDate: string,
    creator: string,
    firstUse: string,
    note: string
}

export interface CreateDetail {
    code: string,
    decNumber: string,
    name: string,
    makeDate: string,
    creator: string,
    firstUse: string,
    note: string
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

export interface IPropsSelect {
    data: string,
    handleData: (event: React.SyntheticEvent | null, newValue: string | null) => void;
}

export interface IPropsInput {
    data: string,
    handleData: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => void;
}