import { Component, OnInit } from '@angular/core';
import { MASKS } from 'ng-brazil';
import { WPService } from '../../services/w-p.service';
import { ISearchModel } from './models/ISearchModel';
import { ICategorie } from '../../types/ICategorie';
import { IComodos } from './models/IComodos';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent implements OnInit {

  public MASKS = MASKS;
  public categories:ICategorie[] = [];
  public comodos:IComodos;
  public searchForm:ISearchModel = {
    search:"",
    categories:[],
    price:{
      min_price: "",
      max_price: ""
    },
    area:{
      min_area: "",
      max_area: ""
    },
    quartos: "",
    banheiros:"",
    garagens: ""
  }

  constructor(
    private WpService:WPService
  ) { }

  ngOnInit(): void {
    this.getTagComodos();
    this.getTypes();
  }

  getTypes(): void {
    this.WpService.getCategories().subscribe((value:ICategorie[]) => {
      this.categories = value;
      console.log(value);
    })
  }

  getTagComodos(): void {
    this.WpService.getTags().subscribe((value:IComodos) => {
      this.comodos = value;
    })
  }

  searchItem(e){
    e.preventDefault();
    console.log(this.searchForm);
  }

  changeType(event:MatSelectChange): void {
    if(this.searchForm.categories.length > 10){
      return;
    }
  }

}
