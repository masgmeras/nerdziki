import {Component, Input} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-find-products-number',
  templateUrl: './find-products-number.component.html',
  styleUrls: ['./find-products-number.component.css']
})
export class FindProductsNumberComponent {
  @Input()
  ocrResult: string[] = [];

  constructor(private leafletsService: LeafletsService) {
  }

  calculate() {
    // let resultsCount = 0;
    // for (let i = 0; i < this.leafletsService.selectedProductsList.length; i++) {
    //   if (this.ocrResult.includes(this.leafletsService.selectedProductsList[i])) {
    //     resultsCount += 1;
    //   }
    // }
    return this.leafletsService.selectedProductsList.filter(x => this.ocrResult.includes(x)).length;
  }
}

