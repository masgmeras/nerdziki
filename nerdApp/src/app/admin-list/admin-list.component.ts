import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit{

  isAllSelected: boolean = true;

  constructor(private leafletsService: LeafletsService) {
  }
  myList = this.leafletsService.selectedProductsList;

  remove(list: string){
    this.myList = this.myList.filter(e=> e!==list)
    this.leafletsService.myListProduct = this.leafletsService.myListProduct.filter(e => e !== list)
    this.leafletsService.removeProduct(list);

    let itemLimit = localStorage.setItem('lista', JSON.stringify(this.myList));
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

  ngOnInit(): void {
    if (this.leafletsService.storesList.length === 0) {
      this.leafletsService.getLeaflets().subscribe(data => {
        this.leafletsService.initStoreResults(data);
      });
    }

    if(this.leafletsService.myListProduct.length === 0){
      // @ts-ignore
      let item: string = localStorage.getItem("lista");
      console.log(item);
      this.myList = JSON.parse(item);
      this.leafletsService.myListProduct = JSON.parse(item);
      // this.my = ;
    }
  }
}

