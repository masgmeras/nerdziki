import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LeafletModel} from "./leafletModel";
import {Observable} from "rxjs";
import {StoresListModel} from "./storesList.model";
import {CategoriesListModel} from "./categoriesList.model";   //////////////////////////////////////////////

@Injectable({
  providedIn: 'root'
})
export class LeafletsService {
  storesList: StoresListModel[] = [];
  filteredGroupedLeafletsListByPageUrl: LeafletModel[][] = [];
  private readonly groupedLeafletsListByPageUrl: LeafletModel[][] = [];
  selectedProduct: string = '';
  selectedProductsList: string[] = [];
  myListProduct: Array<string> = [];

  categoriesList: CategoriesListModel[] =[];              /////////////////////////////////////////
  fruits= 'owoce';

  constructor(private http: HttpClient) {
  }

  public getLeaflets(isMock: boolean = false): Observable<LeafletModel[]> {
    const url = 'http://firelocker.pl:3000/getLeaflets';
    const localUrl = '../assets/generate_urls.json';
    const category = '../assets/categories-list.json';                    //////////////////////////////////
    return this.http.get<LeafletModel[]>(isMock ? localUrl : url);
  }

  public getCategories(): Observable<LeafletModel[]> {
    const category = '../assets/categories-list.json';
    return this.http.get<LeafletModel[]>(category);
  }

  addProduct(itemToAdd: string) {
    this.selectedProductsList.push(itemToAdd);
  }

  removeProduct(itemToRemove: string) {
    this.selectedProductsList = this.selectedProductsList.filter(i => i !== itemToRemove);
    this.updateStoreResults();
  }

  initStoreResults(data: LeafletModel[]) {
   // console.log(data)
    for (let leaflet of data) {
      leaflet.ocrResult = leaflet.ocrResult.toLowerCase();
    }
    this.createGroupedLeaflets(data);
    let brands = [...new Set(data.map(leaflet => leaflet.brand))];
    this.storesList = [];
    for (const element of brands) {
      this.storesList.push({'brand': element, 'checked': true, 'ocrResult': ['']});
    }
  }
//////////////////////////////////////////////////////////////
  initCategories(data: LeafletModel[]){
   // this.createGroupedLeaflets(data);
   // let categories = [...new Set(data.map(x=> x.categories))];
   // this.categoriesList = [];
   // for (const element of categories){
   // this.categoriesList.push({'categories': element, 'checked': true, 'listOfCategories': ['']});
   // }console.log('aa')
  }
/////////////////////////////////////////////////////////////
  listCategories(){
  // const selectedCategory: string[]= this.categoriesList.filter(x => x.checked).map(x=> x.categories);   /////////////////////
   //let selectedFilter = (x: LeafletModel[]) => x.some(x => selectedCategory.includes(x.categories));    //////////////////////

  this.selectedProduct = this.fruits;
this.updateStoreResults();
  }

  updateStoreResults() {
    const selectedBrands: string[] = this.storesList.filter(x => x.checked).map(x => x.brand);
    let selectedBrandFilter = (x: LeafletModel[]) => x.some(x => selectedBrands.includes(x.brand));
    const deepCopyOfGroupedLeaflets = JSON.parse(JSON.stringify(this.groupedLeafletsListByPageUrl));
    this.filteredGroupedLeafletsListByPageUrl = deepCopyOfGroupedLeaflets.filter(selectedBrandFilter);
    if (this.selectedProduct !== '') {
      this.countOccurances([this.selectedProduct]);
    }
    if (this.selectedProductsList.length) {
      this.countOccurances(this.selectedProductsList);
    }
  }

  private countOccurances(selectedProducts: string[]) {
    for (let leaflet of this.filteredGroupedLeafletsListByPageUrl) {
      leaflet[0].specificFilteredLeaflets = [];
      leaflet[0].occursOnPage = 0;

      leaflet.forEach(leafletPage => {
        selectedProducts.forEach(x => {
          if (leafletPage.ocrResult.includes(this.selectedProduct)) {
            leaflet[0].specificFilteredLeaflets.push(leafletPage);
            leaflet[0].occursOnPage = leaflet[0].specificFilteredLeaflets.length;
          }
        });
      });
    }
    this.filteredGroupedLeafletsListByPageUrl = this.filteredGroupedLeafletsListByPageUrl.filter(x => x[0].occursOnPage > 0);
  }

  private createGroupedLeaflets(leafletsList: LeafletModel[]) {
    const groupByPageUrl = this.groupBy(leafletsList, "pageUrl");
    for (const [key] of Object.entries(groupByPageUrl)) {
      this.groupedLeafletsListByPageUrl.push(groupByPageUrl[key]);
    }
    this.filteredGroupedLeafletsListByPageUrl = this.groupedLeafletsListByPageUrl;
  }

  private groupBy(arr: any, key: any) {
    const initialValue = {};
    return arr.reduce((acc: any, cval: any) => {
      const myAttribute = cval[key];
      acc[myAttribute] = [...(acc[myAttribute] || []), cval]
      return acc;
    }, initialValue);
  }

}
