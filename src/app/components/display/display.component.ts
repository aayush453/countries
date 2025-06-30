import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Country, CountryApiResponse, CountryTableHeaders } from '../../models/countries.model'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {
  countries: Country[] = [];
  headers = CountryTableHeaders;
  
constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.getCountries().subscribe((res: CountryApiResponse) => {
    this.countries = Object.entries(res.data).map(([code, details]: any) => ({
        code,
        ...details,
      }));
  })
}
}
