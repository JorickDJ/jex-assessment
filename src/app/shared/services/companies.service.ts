import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Company } from "src/app/core/interfaces/company.interface";
import { Vacancy } from "src/app/core/interfaces/vacancy.interface";

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    BASE_URL = 'http://localhost:3000';

    constructor(private readonly http: HttpClient) {}

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(`${this.BASE_URL}/companies`);
    }

    getCompany(id: number): Observable<Company> {
        return this.http.get<Company>(`${this.BASE_URL}/companies/${id}`);
    }

    addVacancy(company: Company, vacancy: Vacancy): Observable<Vacancy> {
        company.vacancies.push(vacancy);
        return this.http.put<Vacancy>(`${this.BASE_URL}/companies/${company.id}`, company);
    }
}