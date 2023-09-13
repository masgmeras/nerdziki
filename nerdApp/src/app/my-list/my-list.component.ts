import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";
import {StoresListModel} from "../lista-gazetek/storesList.model";


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  myListProduct: Array<string> = [];
  mySelectProduct: string = '';

  constructor(protected leafletsService: LeafletsService) {
  }

  ngOnInit(): void {
    this.myListProduct = this.leafletsService.selectedProductsList;
  }


  addProduct() {
    if(!this.mySelectProduct){
      return;
    }
    this.mySelectProduct = this.mySelectProduct.toLowerCase();
    this.myListProduct.push(this.mySelectProduct);
    this.leafletsService.addProduct(this.mySelectProduct);
    this.mySelectProduct = '';
    this.leafletsService.updateStoreResults();

    //calculate
  }


  remove(myProduct: string) {
    this.myListProduct = this.myListProduct.filter(e => e !== myProduct)
    this.leafletsService.removeProduct(myProduct);
    this.leafletsService.updateStoreResults();
  }



}
