import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListaGazetekService} from "./lista-gazetek.service";
import {HeroModel} from "./hero.model";

@Component({
  selector: 'app-lista-gazetek',
  templateUrl: './lista-gazetek.component.html',
  styleUrls: ['./lista-gazetek.component.css']
})
export class ListaGazetekComponent implements OnInit {
  daneZRestApi: any;
  nrUzytkownika: any;
  heros: HeroModel = {
    id: 1,
    name: 'Windstorm'
  };
  title = 'dupa jasiu karuzela nie działa :/...kupa, nie umiem :/';

  wyszukiwarkaLidl = []
  wyszukiwarkaBiedronka = []
  wyszukiwarkaKaufland = []

//class wyszukiwarka {constructor(public name: string, public id: number ){}

 marka:string ='';
  markiSklep= ['Lidl', 'Biedronka', 'Kaufland'];

 wybierzSklep(shop:string){
 this.marka = shop;
 }
  constructor(private listaGazetekService: ListaGazetekService) {
  }


  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges()
    console.log("pobierz dane z neta")
    //this.getData();

    this.daneZRestApi = this.listaGazetekService.getData();
  }

  getSpecificUser(nrUzytkownika: string) {
    this.daneZRestApi = this.listaGazetekService.getSpecificUser(nrUzytkownika);
  }

}
