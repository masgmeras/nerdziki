import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "./leaflets.service";
import {LeafletModel} from "./leafletModel";
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-leaflets',
  templateUrl: './leaflets.component.html',
  styleUrls: ['./leaflets.component.css']
})
export class LeafletsComponent implements OnInit {
date: LeafletModel[]=[];
  constructor(protected leafletsService: LeafletsService) {
  }



  ngOnInit() {
    this.leafletsService.getLeaflets(true).subscribe(data => {
      this.leafletsService.initStoreResults(data);
    })
  }
  getFilteredGroupedLeafletsListByPageUrl() {
    return this.leafletsService?.filteredGroupedLeafletsListByPageUrl;
  }

/*getStart(leafletPerPageUrl: LeafletModel[]){
const t = new Date();
const d = new Date(leafletPerPageUrl?.[0]?.offerStartDate);
const c= new Date(leafletPerPageUrl?.[0]?.offerEndDate);
let z:number= c.getTime()
let a: number = d.getTime()

if (leafletPerPageUrl?.[0]?.offerStartDate){
let l= (z-a)+86400000;
let g= Math.floor(l/(1000 * 3600 * 24));
return g;
}
return leafletPerPageUrl;
}*/

getTry(leafletPerPageUrl: LeafletModel[]){
const time = new Date();
const start = new Date(leafletPerPageUrl?.[0]?.offerStartDate);
const end= new Date(leafletPerPageUrl?.[0]?.offerEndDate);
let startN :number= start.getTime()
let endN: number = end.getTime()
let timeN: number = time.getTime()
let math = (1000 * 3600 * 24);

if (startN >timeN){
let x = (startN - timeN )+172800000;
let g= Math.floor(x/math);
return g;
}
if (startN<timeN || endN > timeN){
let z = (endN- timeN)+86400000;
let t = Math.floor(z/math);
return t;
}
if(endN < timeN){
let y = (endN - timeN);
let m = Math.floor(y/math);
return m ;

}
return leafletPerPageUrl;
}

/*
getDay(leaflet: LeafletModel[]){
let dayStart: Date =new Date(leaflet?.[0]?.offerStartDate);
let dayEnd: Date = new Date(leaflet?.[0]?.offerEndDate);
let subtract: number= dayEnd.getTime() - dayStart.getTime();
let diffInDays: number = subtract / (1000 * 3600 * 24);

}*/


  slideConfig = {
    infinite: true,
    arrows: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  getListOfThumbnails(leafletPerPageUrl: LeafletModel[]) {
    if (leafletPerPageUrl?.[0]?.specificFilteredLeaflets) {
      return leafletPerPageUrl?.[0]?.specificFilteredLeaflets;
    }
    return leafletPerPageUrl;
  }

 //getStartDate(leafletPerPageUrl: LeafletModel[]) {
   // if (leafletPerPageUrl?.[0]?.specificFilteredLeaflets) {
     // return leafletPerPageUrl?.[0]?.specificFilteredLeaflets;
    //}
    //console.log(leafletPerPageUrl)

  //}

  updateImages() {

  }
}
