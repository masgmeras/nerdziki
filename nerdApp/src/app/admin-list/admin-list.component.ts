import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {

    isAllSelected: boolean = true;

  constructor(private leafletsService: LeafletsService) {
  }
   myList = this.leafletsService.selectedProductsList;

remove(list: string){
    this.myList = this.myList.filter(e=> e!==list)
    this.leafletsService.myListProduct = this.leafletsService.myListProduct.filter(e => e !== list)
    this.leafletsService.removeProduct(list);
}
myLeaflet(){
console.log(this.myList);
}

    setItAll() {
        this.leafletsService.storesList.forEach(x => (x.checked = this.isAllSelected));
        this.leafletsService.updateStoreResults();
    }

    getStoresList() {
        return this.leafletsService.storesList;
    }

    updateStoreResults() {
        this.isAllSelected = this.leafletsService.storesList.every(x => x.checked);
        this.leafletsService.updateStoreResults();
    }
}

