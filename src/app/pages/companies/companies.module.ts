import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { ListModule } from '@components/list/list.module';
import { CreateVacancyModule } from 'src/app/shared/components/create-vacancy/create-vacancy.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';


@NgModule({
  declarations: [
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ListModule,
    CreateVacancyModule,
    PipesModule
  ]
})
export class CompaniesModule { }
