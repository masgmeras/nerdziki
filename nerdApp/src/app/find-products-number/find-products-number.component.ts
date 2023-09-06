import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";

@Component({
  selector: 'app-find-products-number',
  templateUrl: './find-products-number.component.html',
  styleUrls: ['./find-products-number.component.css']
})
export class FindProductsNumberComponent {
  @Input()
  singleLeafletWithPages: LeafletModel[] = [];
  // @Output() updateImagesEvent = new EventEmitter<string>();
  leafletPagesWithProducts: LeafletModel[] = [];


  // refreshImages(value: LeafletModel[]) {
  //   this.updateImagesEvent.emit(value);
  // }

  constructor(private leafletsService: LeafletsService) {
  }

  calculate() {
    // console.log('calculate')
    // console.log(this.leafletPagesWithProducts)
    this.leafletPagesWithProducts = [];
    this.singleLeafletWithPages.map(leafletPage => {
        if (this.leafletsService.selectedProduct) {
          if (leafletPage.ocrResult.includes(this.leafletsService.selectedProduct)) {
            this.leafletPagesWithProducts.push(leafletPage);
            return;
          }
        }
        this.leafletsService.selectedProductsList.forEach(selectedProduct => {
          if (leafletPage.ocrResult.includes(selectedProduct)) {
            this.leafletPagesWithProducts.push(leafletPage);
          }
        });
      }
    )

    // this.refreshImages(this.leafletPagesWithProducts);

    if(this.leafletPagesWithProducts.length){
      this.singleLeafletWithPages[0].specificFilteredLeaflets = this.leafletPagesWithProducts;
    }
    return this.leafletPagesWithProducts.length;
  }
}

