import {Component, Input} from '@angular/core';
import {Service} from "../services/service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  get searchText(): string | undefined {
    return this._searchText;
  }

  @Input() set searchText(value: string | undefined) {
    this._searchText = value;
  }



  get sortOption(): any {
    return this._sortOption;
  }

  @Input() set sortOption(value: any) {
    this._sortOption = value;
  }

  public list: any;
  private _searchText: string | undefined;
  private _sortOption: any = "title|asc";
  constructor(private service: Service) {}



  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.service.getData().subscribe(data=>{
      this.list = data;
    })
  }

  ref(){

  }
}
