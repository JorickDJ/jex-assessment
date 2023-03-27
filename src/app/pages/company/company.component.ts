import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Company } from 'src/app/core/interfaces/company.interface';
import { Vacancy } from 'src/app/core/interfaces/vacancy.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute) {}

  company$: Observable<Company>;

  ngOnInit(): void {
    this.company$ = this.route.data.pipe(map(data => data['company']));
  }
}
