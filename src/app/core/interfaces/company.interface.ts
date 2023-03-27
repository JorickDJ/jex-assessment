import { Address } from "./address.interface";
import { Vacancy } from "./vacancy.interface";

export interface Company {
    id: number;
    name: string;
    description: string;
    address: Address;
    employees: number;
    vacancies: Vacancy[];
}