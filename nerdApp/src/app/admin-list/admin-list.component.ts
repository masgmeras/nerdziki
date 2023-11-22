import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";
import {LeafletModel} from "../lista-gazetek/leafletModel";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit{

  isAllSelected: boolean = true;

 selectedProductsList: string[] = [];
 //mySelectProduct: string='';
 //myList:string[]=[];
   // leafletPerPageUrl=[];

  constructor(protected leafletsService: LeafletsService) {
  }

addProduct() {
  // this.mySelectProduct= this.mySelectProduct.toLowerCase();
  //  this.myList.push(this.mySelectProduct);
  // this.myListProduct = this.leafletsService.myListProduct;
     // this.leafletsService.mySelectedProduct = this.leafletsService.mySelectedProduct.toLowerCase();
      //this.leafletsService.myListProduct.push(this.leafletsService.mySelectedProduct);
       this.leafletsService.addProduct(this.leafletsService.mySelectedProduct);
      this.leafletsService.mySelectedProduct = '';
}

  remove(list: string){
    //this.myList = this.myList.filter(e=> e!==list)
    this.leafletsService.myListProduct = this.leafletsService.myListProduct.filter(e => e !== list)
    this.leafletsService.removeProduct(list);
   // let itemLimit = localStorage.setItem('lista', JSON.stringify(this.myList));
  }

  myLeaflet() {
    this.selectedProductsList = this.leafletsService.myListProduct;
  }
 displayGazetka(){
    return this.leafletsService.wybranaGazeta;
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
 /* this.leafletsService.myListProduct = this.leafletsService.selectedProductsList;
    if (this.leafletsService.storesList.length === 0) {
      this.leafletsService.getLeaflets().subscribe(data => {
        this.leafletsService.initStoreResults(data);
      });
    }*/

   /* if(this.leafletsService.myListProduct.length === 0){
      // @ts-ignore
      let item: string = localStorage.getItem("lista");
      console.log(item);
      this.myList = JSON.parse(item);
      this.leafletsService.myListProduct = JSON.parse(item);
      // this.my = ;
    }*/
     this.leafletsService.getLeaflets(true).subscribe(data => {
           console.log(data)
           this.leafletsService.initStoreResults(data);
         })
  }

}

