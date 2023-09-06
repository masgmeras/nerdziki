import {Component} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";


@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css'],
  providers: []
})
export class ListBrandsComponent {

  constructor(private leafletsService: LeafletsService) {
  }
  checked:LeafletModel['checked'] = true;
  //allComplete: LeafletModel['checked'] = true;

/*  setAll(checked: boolean) {
    this.allComplete = checked;
    if (this.leafletsService.storesList == null) {
      return;
    }
    this.leafletsService.storesList.forEach(x => (x.checked = checked));
    this.leafletsService.updateStoreResults();

  }*/

  setItAll(checked: boolean){
 this.checked = !checked;
 if(this.leafletsService.storesList == null){
return;
 }
  this.leafletsService.storesList.forEach(x => (x.checked = checked));
  this.leafletsService.updateStoreResults();
  }

  getStoresList() {
    return this.leafletsService.storesList;
  }

  updateStoreResults(checked: boolean) {
    this.leafletsService.updateStoreResults();
    this.setItAll(checked);
  }
}
