import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-favourite-leaflets',
  templateUrl: './favourite-leaflets.component.html',
  styleUrls: ['./favourite-leaflets.component.css']
})
export class FavouriteLeafletsComponent {


  constructor(private leafletsService: LeafletsService) {
  }
   myList = this.leafletsService.selectedProductsList;

remove(list: string){
    this.myList = this.myList.filter(e=> e!==list)
    this.leafletsService.myListProduct = this.leafletsService.myListProduct.filter(e => e !== list)
    this.leafletsService.removeProduct(list);
    this.leafletsService.updateStoreResults();
}
}
