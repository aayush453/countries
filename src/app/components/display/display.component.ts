import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {
  countries: any = {};
constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.getCountries().subscribe((res) => {
    this.countries = Object.entries(res.data).map(([code, details]: any) => ({
        code,
        ...details,
      }));
  })
}
}
