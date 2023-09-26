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
number: number=0;
col=true;
dataLeaflet: LeafletModel[] = [];

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



getTry(leafletPerPageUrl: LeafletModel[]){
const time = new Date().getTime();
const start = new Date(leafletPerPageUrl?.[0]?.offerStartDate).getTime();
const end= new Date(leafletPerPageUrl?.[0]?.offerEndDate).getTime();
let math = (1000*60*60*24);

if (start > time) {
let g= Math.floor((start - time )/math);
this.number=g;
}
if (end < time){
 let m = Math.floor((end - time)/math)+1;
this.number= m ;
this.col=false;
 }
if (start < time && end > time){
let t = Math.floor((end - time)/math)+1;
this.number= t ;
this.col=true;
}
return this.number
}



//color(){
//return this.number >= 2? 'green':'red';
//}

/*color(){
  if (this.number >= 2){
  return  true;
  }else {return false;}
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

  updateImages() {

  }
}
