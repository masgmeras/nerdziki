import {Component} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
    selector: 'app-product-search',
    templateUrl: './product-search.component.html',
    styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

    constructor(protected leafletsService: LeafletsService) {
    }

    updateStoreResults() {
        this.leafletsService.updateStoreResults();
    }
}
