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


  constructor(private leafletsService: LeafletsService) {
  }

  ngOnInit() {
    this.leafletsService.getLeaflets(true).subscribe(data => {
      this.leafletsService.initStoreResults(data);
    })
  }

  getFilteredGroupedLeafletsListByPageUrl() {
    return this.leafletsService.filteredGroupedLeafletsListByPageUrl;
  }

  trackByMethod(index: number, el: any): number {
    return index;
  }


  slideConfig = {
    infinite: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  slickInit() {
    // console.log('slick initialized');
  }

  breakpoint() {
    // console.log('breakpoint');
  }

  afterChange() {
    // console.log('afterChange');
  }

  beforeChange() {
    // console.log('beforeChange');
  }


  getListOfThumbnails(leafletPerPageUrl: LeafletModel[]) {
    if (leafletPerPageUrl[0].specificFilteredLeaflets) {
      return leafletPerPageUrl[0].specificFilteredLeaflets;
    }
    return leafletPerPageUrl;
  }

  updateImages() {

  }
}
