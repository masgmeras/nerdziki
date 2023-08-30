import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "./leaflets.service";
import {LeafletModel} from "./leafletModel";

@Component({
    selector: 'app-leaflets',
    templateUrl: './leaflets.component.html',
    styleUrls: ['./leaflets.component.css']
})
export class LeafletsComponent implements OnInit {

    constructor(private leafletsService: LeafletsService) {
    }

    ngOnInit() {
        this.leafletsService.getLeaflets().subscribe(data => {
          this.leafletsService.fullList = data;

          for (let i: number = 0; i< data.length; i ++){
          let ocrResult: string[] = data[i].ocrResult;
          for (let j: number = 0; j< ocrResult.length; j++){
          ocrResult[j]= ocrResult[j].toLowerCase();
          }}

          this.createGroupedLeaflets(data);
            let brands = [...new Set(data.map(leaflet => leaflet.brand))];
            this.leafletsService.storesList=[];
            for (let i = 0; i < brands.length; i++) {
                this.leafletsService.storesList.push({'brand': brands[i], 'checked': true, 'ocrResult': ['']});

            }console.log( this.leafletsService.fullList)
        })
    }

    getFilteredGroupedLeafletsListByPageUrl() {
        return this.leafletsService.filteredGroupedLeafletsListByPageUrl;
    }


    getSelectedProductsList(){
      return this.leafletsService.selectedProductsList;
    }

    private createGroupedLeaflets(leafletsList: LeafletModel[]) {
        const groupByPageUrl = this.groupBy(leafletsList, "pageUrl");
        for (const [key] of Object.entries(groupByPageUrl)) {
            this.leafletsService.groupedLeafletsListByPageUrl.push(groupByPageUrl[key][0]);
        }
        this.leafletsService.filteredGroupedLeafletsListByPageUrl = this.leafletsService.groupedLeafletsListByPageUrl;
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
