import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  searchText: string | undefined;
  sortOption: any = "title|asc";
  constructor() { }

  ngOnInit(): void {

  }

  filterByPrice(){

  }

}
