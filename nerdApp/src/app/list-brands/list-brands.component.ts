import {Component} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek//leafletModel";


@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css']
})
export class ListBrandsComponent  {

constructor(private leafletsService: LeafletsService) {}


allComplete: LeafletModel['checked'] = true;


setAll(checked: boolean){
  this.allComplete = checked;
  if (this.leafletsService.storesList == null){
    return;
  }
  this.leafletsService.storesList.forEach(x=> (x.checked = checked));
  this.leafletsService.updateStoreResults();

}

  getStoresList() {
    return this.leafletsService.storesList;
  }

  updateStoreResults() {
    this.leafletsService.updateStoreResults();
  }
}
