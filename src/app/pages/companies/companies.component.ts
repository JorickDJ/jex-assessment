import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, map, mergeMap, Observable, repeatWhen, startWith, Subject, take } from 'rxjs';
import { DialogConfig } from 'src/app/core/classes/dialog-config.class';
import { Company } from 'src/app/core/interfaces/company.interface';
import { CreateVacancyComponent } from 'src/app/shared/components/create-vacancy/create-vacancy.component';
import { CompaniesService } from 'src/app/shared/services/companies.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companies$: Observable<Company[]>;
  vacancyAdded$ = new Subject<void>();

  constructor(private readonly companiesService: CompaniesService, private readonly dialogService: DialogService, private readonly router: Router) { }

  ngOnInit(): void {
    this.companies$ = this.vacancyAdded$.pipe(startWith(null), mergeMap(() => this.companiesService.getCompanies()));
  }

  openDialog(company: Company): void {
    const dialog = this.dialogService.open<CreateVacancyComponent>(CreateVacancyComponent, new DialogConfig<Company>(company));
    dialog.afterClosed$.pipe(take(1)).subscribe(x => this.vacancyAdded$.next());
  }

  navigate(company: Company): void {
    this.router.navigate(['companies', company.id]);
  }
}
