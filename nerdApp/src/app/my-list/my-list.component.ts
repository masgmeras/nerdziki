import { Component, OnInit } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";
import {StoresListModel} from "../lista-gazetek/storesList.model";


@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent  implements OnInit {
myListProduct: Array<string> = [];
mySelectProduct: string = '';

constructor(protected leafletsService: LeafletsService) {
    }
    ngOnInit(){
    }

addProduct() {
this.mySelectProduct= this.mySelectProduct.toLowerCase();
this.myListProduct.push(this.mySelectProduct);
let produkt = this.leafletsService.storesList.filter(x =>x.checked).map(x=> x.brand);
this.leafletsService.groupedLeafletsListByPageUrl = this.leafletsService.fullList;
        this.leafletsService.filteredGroupedLeafletsListByPageUrl = this.leafletsService.groupedLeafletsListByPageUrl.filter(x => produkt.includes(x.brand))
        if (this.mySelectProduct) { this.leafletsService.filteredGroupedLeafletsListByPageUrl = this.leafletsService.groupedLeafletsListByPageUrl.filter(x => x.ocrResult.includes(this.mySelectProduct));
        }
        }


remove(myProduct: string){
this.myListProduct = this.myListProduct.filter(e => e !== myProduct)
this.remove(myProduct)
}

}
