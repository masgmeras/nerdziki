import {Component, OnInit} from '@angular/core';
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
      console.log(data)
      this.leafletsService.setCategories(data);
    });
  }

  setCategoryAll() {
    this.leafletsService.categoriesList.forEach(x => (x.checked = this.categoryAllSelected));

  }
  age(category: any){
  if( category.categories == 'alkohol' ){confirm("Czy masz skończone 18+ lat?")}
  }

  getCategoryList() {
    return this.leafletsService.categoriesList;

  }

  updateCategoryResults() {
  this.leafletsService.listCategories();
    //this.leafletsService.updateStoreResults();
  }
}
