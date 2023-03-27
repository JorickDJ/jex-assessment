import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyResolver } from './resolvers/company.resolver';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ListModule } from 'src/app/shared/components/list/list.module';


  
@NgModule({
  declarations: [
    CompanyComponent
  ],
  providers: [CompanyResolver],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    PipesModule,
    ListModule
  ]
})
export class CompanyModule { }
