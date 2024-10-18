import { Component, OnInit } from '@angular/core';
import {MASKS, NgBrDirectives} from 'ng-brazil';

@Component({
  selector: 'app-custom-search-imoveis',
  templateUrl: './custom-search-imoveis.component.html',
  styleUrls: ['./custom-search-imoveis.component.css']
})
export class CustomSearchImoveisComponent implements OnInit {

  constructor() { }
  public MASKS = MASKS;
  
  ngOnInit(): void {
    
  }

}
