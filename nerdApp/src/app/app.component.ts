import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nerdApp';
  szukanyProdukt: string = '';
  listaKategorii = ['Owoce', 'Warzywa', 'Mięso', 'Nabiał', 'Chemia']
  listaOwocow = ["truskawki", "banbany"];
  listaWarzyw = ["Ogorek", "Salata"];
  listaMiesa = ["drób", "wołowina"];
  listaNabialu = ["jajca", "mleko"];
  listaChemia = ["płyn do prania", "sól do zmywarki"];

  ustawKategorie(kategoria: string) {
    this.szukanyProdukt = kategoria;
  }

  clear() {
    this.szukanyProdukt = "";
  }

  getProdukty() {
    if (this.szukanyProdukt == "") {
      return [...this.listaOwocow, ...this.listaWarzyw, ...this.listaMiesa, ...this.listaNabialu, ...this.listaChemia]
    }

    if (this.szukanyProdukt == "Owoce") {
      return this.listaOwocow;
    } else if (this.szukanyProdukt == "Warzywa"){
      return this.listaWarzyw;
    } else if (this.szukanyProdukt == "Mięso"){
      return this.listaMiesa;
  }  else if (this.szukanyProdukt == "Nabiał") {
     return this.listaNabialu;
  } else {
  return this.listaChemia;
  }
}
}
