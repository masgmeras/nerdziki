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
 cos: LeafletModel[] = [];
 //mySelectProduct: string='';
 //myList:string[]=[];
   // leafletPerPageUrl=[];

  constructor(protected leafletsService: LeafletsService) {
  }

  addProduct() {
    this.leafletsService.addProduct();
  }

  remove(list: string) {
    this.leafletsService.removeProduct(list);
  }
  ///////////////////////////////////////
 /* Leaflet() {
  for(let cos of this.leafletsService.filteredGroupedLeafletsListByPageUrl){
  cos[0].occursOnPage = 0;
  }

  //this.leafletsService.listLeaflet();
        }*/

 lista(){
 //let cos =  (x: LeafletModel[]) => x.map(x=> x.thumbnailUrl);
// const deepCopyOfGroupedLeaflets = JSON.parse(JSON.stringify(this.leafletsService.filteredGroupedLeafletsListByPageUrl));
 //this.leafletsService.filteredGroupedLeafletsListByPageUrl = this.deepCopyOfGroupedLeaflets.filter(cos);

 return this.leafletsService.selectedLeaflet;
 }

//clickThumb(x:LeafletModel[]){
 //this.leafletsService.setLeaflet(x);
//}



  myLeaflet(selectedProductsList: string[]) {
   this.selectedProductsList = this.leafletsService.myListProduct;
    //this.selectedProductsList = this.leafletsService.selectedProductsList;
 /*for (let leaflet of this.leafletsService.filteredGroupedLeafletsListByPageUrl) {
        leaflet[0].specificFilteredLeaflets = [];
        leaflet[0].occursOnPage = 0;

        leaflet.forEach(leafletPage => {
          this.selectedProductsList.forEach(product => {  /// TODO ???
            if (leafletPage.ocrResult.includes(product)) {
              leaflet[0].specificFilteredLeaflets.push(leafletPage);
              leaflet[0].occursOnPage = leaflet[0].specificFilteredLeaflets.length;
            }
          });
        });
      }
      this.leafletsService.filteredGroupedLeafletsListByPageUrl = this.leafletsService.filteredGroupedLeafletsListByPageUrl.filter(x => x[0].occursOnPage > 0);*/
     this.leafletsService.updateStoreResults();



        console.log(this.selectedProductsList)
        console.log(this.leafletsService.filteredGroupedLeafletsListByPageUrl)
        // console.log(this.leafletsService.updateStoreResults());
        //TUTAJ filtrowanie
    }

//////////////////////////////////////////////

  displayGazetka() {
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
    this.leafletsService.getLeaflets().subscribe(data => {
      console.log(data)
      this.leafletsService.initStoreResults(data);
    })
  }

}

