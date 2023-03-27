import { Component, Inject, OnInit } from '@angular/core';
import { Company } from 'src/app/core/interfaces/company.interface';
import { DialogConfig } from 'src/app/core/classes/dialog-config.class';
import {
  DATA_INJECTION_TOKEN,
  DialogService,
} from '../../../../shared/services/dialog.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CompaniesService } from '../../../../shared/services/companies.service';
import { Vacancy } from 'src/app/core/interfaces/vacancy.interface';

@Component({
  selector: 'app-create-vacancy',
  templateUrl: './create-vacancy.component.html',
  styleUrls: ['./create-vacancy.component.scss'],
})
export class CreateVacancyComponent implements OnInit {
  constructor(
    @Inject(DATA_INJECTION_TOKEN) public config: DialogConfig<Company>,
    private readonly fb: FormBuilder,
    private readonly companiesService: CompaniesService,
    private readonly dialogService: DialogService
  ) {}

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      hours: new FormControl(''),
      location: new FormControl(''),
    });
  }

  save(): void {
    const vacancy = this.form.value as Vacancy;
    this.companiesService.addVacancy(this.config?.data, vacancy).subscribe(() => this.dialogService.dialogRef?.close());
  }
}
