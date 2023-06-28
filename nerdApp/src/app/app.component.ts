import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nerdApp';
  szukanyProdukt: string = '';
  listaKategorii = ['Owoce', 'Warzywa']
  listaOwocow = ["truskawki", "banbany"];
  listaWarzyw = ["Ogorek", "Salata"];

  ustawKategorie(kategoria: string) {
    this.szukanyProdukt = kategoria;
  }

  clear() {
    this.szukanyProdukt = "";
  }

  getProdukty() {
    if (this.szukanyProdukt == "") {
      return [...this.listaOwocow, ...this.listaWarzyw]
    }

    if (this.szukanyProdukt == "Owoce") {
      return this.listaOwocow;
    } else {
      return this.listaWarzyw;
    }
  }
}
