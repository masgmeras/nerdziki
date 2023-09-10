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


  slideConfig = {
    infinite: true,
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
