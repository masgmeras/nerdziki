import {Component, Input} from '@angular/core';
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
  leafletPagesWithProducts: LeafletModel[] = [];

  constructor(private leafletsService: LeafletsService) {
  }

  calculate() {
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
    return this.leafletPagesWithProducts.length;
  }
}

