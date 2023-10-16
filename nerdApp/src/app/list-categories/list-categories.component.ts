import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {

  isAllSelected: boolean = true;

  constructor(protected leafletsService: LeafletsService) {
  }

listCategories(){
    this.leafletsService.listCategories();
}

    setItAll() {
        this.leafletsService.categoriesList.forEach(x => (x.checked = this.isAllSelected));
        this.leafletsService.updateStoreResults();
    }

    getStoresList() {
        return this.leafletsService.categoriesList;
    }

    updateStoreResults() {
        this.isAllSelected = this.leafletsService.categoriesList.every(x => x.checked);
        this.leafletsService.updateStoreResults();
    }
}
