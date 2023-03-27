import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Company } from 'src/app/core/interfaces/company.interface';
import { CompaniesService } from 'src/app/shared/services/companies.service';

@Injectable()
export class CompanyResolver implements Resolve<Company> {
  constructor(private readonly companiesService: CompaniesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Company> {
    return this.companiesService
      .getCompany(+route.params['id'])
      .pipe(
        catchError(err => {
          throw 'Not found';
        })
      );
  }
}
