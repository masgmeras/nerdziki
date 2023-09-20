
import {Component} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  userProductSearchUpdate = new Subject<string>();

  constructor(protected leafletsService: LeafletsService) {
    this.userProductSearchUpdate.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value)
        this.leafletsService.selectedProduct = this.leafletsService.selectedProduct.toLowerCase();
        this.leafletsService.updateStoreResults();
      });
  }

  addProduct() {
if(!this.leafletsService.selectedProduct){
       return;
      }
      this.leafletsService.selectedProduct = this.leafletsService.selectedProduct.toLowerCase();
      this.leafletsService.myListProduct.push(this.leafletsService.selectedProduct);
     // this.leafletsService.addProduct(this.leafletsService.selectedProduct);
      this.leafletsService.selectedProduct = '';
      //this.leafletsService.updateStoreResults();


 console.log(this.leafletsService.myListProduct);


  }
}
