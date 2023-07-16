import {Component, OnInit} from '@angular/core';
import {LeafletsService} from "./leaflets.service";
import {LeafletModel} from "./leafletModel";

@Component({
  selector: 'app-leaflets',
  templateUrl: './leaflets.component.html',
  styleUrls: ['./leaflets.component.css']
})
export class LeafletsComponent implements OnInit {
  leafletsList: LeafletModel[] = [];
  storesList: string[] = [];
  selectedStore: string = '';

  constructor(private leafletsService: LeafletsService) {
  }

  ngOnInit() {
    this.leafletsService.getLeaflets().subscribe(data => {
      this.leafletsList = data;
      this.storesList = [...new Set(data.map(leaflet => leaflet.brand))];
    })
  }

  pickStore(selectedStore: string) {
    this.selectedStore = selectedStore;
  }
}
