import { Component } from '@angular/core';
import {LeafletsService} from "../lista-gazetek/leaflets.service";

@Component({
  selector: 'app-favourite-leaflets',
  templateUrl: './favourite-leaflets.component.html',
  styleUrls: ['./favourite-leaflets.component.css']
})
export class FavouriteLeafletsComponent {


  constructor(private leafletsService: LeafletsService) {
  }

  lista(){
    return this.leafletsService.selectedProductsList;
  }
}
