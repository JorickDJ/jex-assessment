import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { ListModule } from '@components/list/list.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CreateVacancyComponent } from './components/create-vacancy/create-vacancy.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompaniesComponent,
    CreateVacancyComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    ListModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule { }
