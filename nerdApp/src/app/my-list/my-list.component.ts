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

  constructor(protected leafletsService: LeafletsService) {
  }

  ngOnInit(): void {
    this.leafletsService.myListProduct = this.leafletsService.selectedProductsList;
  }

  remove(myProduct: string) {
    this.leafletsService.myListProduct = this.leafletsService.myListProduct.filter(e => e !== myProduct)
    this.leafletsService.removeProduct(myProduct);
    this.leafletsService.updateStoreResults();
  }

}

