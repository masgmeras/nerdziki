import { Component, OnInit } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categoryAllSelected: boolean = false;

  constructor(protected leafletsService: LeafletsService) {
  }

ngOnInit() {
this.leafletsService.getCategories().subscribe(data => {
 let categoryy = [...new Set(data.map(x=> x.categories))];
    this.leafletsService.categoriesList = [];
   for (const element of categoryy){
   this.leafletsService.categoriesList.push({'categories': element, 'checked': false, 'listOfCategories': ['']});
    }console.log(this.leafletsService.categoriesList)
    })
  }

listCategories(){
    this.leafletsService.listCategories();
}

    setCategoryAll() {
        this.leafletsService.categoriesList.forEach(x => (x.checked = this.categoryAllSelected));

    }

   getCategoryList() {
        return this.leafletsService.categoriesList;
    }

    updateStoreResults() {
       this.categoryAllSelected = this.leafletsService.categoriesList.every(x => x.checked);
        this.leafletsService.listCategories();
      ;
    }
}
