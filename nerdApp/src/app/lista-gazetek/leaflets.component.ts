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


}
