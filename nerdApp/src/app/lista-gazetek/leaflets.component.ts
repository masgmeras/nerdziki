import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "./leaflets.service";

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


  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  slickInit() {
    console.log('slick initialized');
  }

  breakpoint() {
    console.log('breakpoint');
  }

  afterChange() {
    console.log('afterChange');
  }

  beforeChange() {
    console.log('beforeChange');
  }


}
