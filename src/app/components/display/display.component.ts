import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent implements OnInit {
constructor(private dataService: DataService) {}

ngOnInit() {
  this.dataService.getCountries().subscribe((res) => {
    
  })
}
}
