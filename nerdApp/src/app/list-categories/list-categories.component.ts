import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  constructor(protected leafletsService: LeafletsService) {
  }

listCategories(){
    this.leafletsService.updateStoreResults();
}
}
