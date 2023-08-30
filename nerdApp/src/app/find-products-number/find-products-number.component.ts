import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";
import {StoresListModel} from "../lista-gazetek/storesList.model";

@Component({
  selector: 'app-find-products-number',
  templateUrl: './find-products-number.component.html',
  styleUrls: ['./find-products-number.component.css']
})
export class FindProductsNumberComponent {
//numberFind;
  constructor(private leafletsService: LeafletsService) {
  }
//productsFind: Array<LeafletModel> = [];
productsFind = this.leafletsService.productsFind;
product = '';

calculate(){
this.leafletsService.addProduct(this.product);
this.leafletsService.updateStoreResults();
}
}

