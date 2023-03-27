import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CompaniesComponent
            },
            {
                path: 'companies/:id',
                loadChildren: () => import('../company/company.module').then(m => m.CompanyModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
