import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateVacancyComponent } from './create-vacancy.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateVacancyComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateVacancyComponent],
})
export class CreateVacancyModule {}
