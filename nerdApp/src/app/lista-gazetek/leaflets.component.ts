import {Component, OnInit, HostListener} from '@angular/core';
import {LeafletsService} from "./leaflets.service";
import {LeafletModel} from "./leafletModel";
import * as moment from 'moment';

@Component({
  selector: 'app-leaflets',
  templateUrl: './leaflets.component.html',
  styleUrls: ['./leaflets.component.css']
})
export class LeafletsComponent implements OnInit {

  numberOfColumns = 3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustNumberOfColumns();
  }

  private adjustNumberOfColumns(): void {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1280) {
      this.numberOfColumns = 4;
    } else if (windowWidth >= 865) {
      this.numberOfColumns = 3;
    } else {
      this.numberOfColumns = 1;
    }
  }

  rowSpacing = '1px';
// number: number=0;
// col=true;
dataLeaflet: LeafletModel[] = [];


  constructor(protected leafletsService: LeafletsService) {
  }

  ngOnInit() {
    this.leafletsService.getLeaflets().subscribe(data => {
      this.leafletsService.initStoreResults(data);
    })
  }
  getFilteredGroupedLeafletsListByPageUrl() {
    return this.leafletsService?.filteredGroupedLeafletsListByPageUrl;
  }
licz(){
let aa = this.leafletsService.filteredGroupedLeafletsListByPageUrl.map(x => {(x?.[0]?.offerStartDate)});
console.log(aa);
}
  getTryNo(leafletPerPageUrl: LeafletModel[]){
    return moment(new Date(leafletPerPageUrl?.[0]?.offerEndDate)).diff(moment(), 'days');
  }

  getTry(iloscDni: number) {
    if (iloscDni > 0) {
      return 'Zostało: ' + iloscDni + ' dni';
    } else if (iloscDni == 0) {
      return 'Ostatni dzien';
    } else {
      return 'Gazetka po terminie' + iloscDni;
    }
    //
    // if (start > time) {
    //   let g = Math.floor((start - time) / math);
    //   return g;
    // }
    // if (end < time) {
    //   let m = Math.floor((end - time) / math) + 1;
    //   return m;
    //   // this.col = false;
    // }
    // if (start < time && end > time) {
    //   let t = Math.floor((end - time) / math) + 1;
    //   return  t;
    //   // this.col = true;
    // }
    // return 0;
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
