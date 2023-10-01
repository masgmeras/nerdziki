import {Component} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";


@Component({
    selector: 'app-list-brands',
    templateUrl: './list-brands.component.html',
    styleUrls: ['./list-brands.component.css']
})
export class ListBrandsComponent {

    isAllSelected: boolean = true;

    constructor(private leafletsService: LeafletsService) {
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
