import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyResolver } from './resolvers/company.resolver';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CompanyComponent,
                resolve: { company: CompanyResolver }
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
