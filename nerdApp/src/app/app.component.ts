import { ObserversModule } from '@angular/cdk/observers';
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
  allProducts = [...this.listaOwocow, ...this.listaWarzyw, ...this.listaMiesa, ...this.listaNabialu, ...this.listaChemia];
  filteredProducts: string[] = [];

  ustawKategorie(kategoria: string) {
    this.szukanyProdukt = kategoria;
  }

  clear() {
    this.szukanyProdukt = "";
  }

  searchCategory(szukanyProdukt: string) {
    this.filteredProducts = this.allProducts.filter(x => x.toLowerCase().includes(szukanyProdukt.toLowerCase()));
  }

  getProdukty() {

    if (this.szukanyProdukt == "") {
      this.filteredProducts = this.allProducts;
    }

    if (this.szukanyProdukt == "Owoce") {
      this.filteredProducts = this.listaOwocow;
    } else if (this.szukanyProdukt == "Warzywa") {
      this.filteredProducts = this.listaWarzyw;
    } else if (this.szukanyProdukt == "Mięso") {
      this.filteredProducts = this.listaMiesa;
    } else if (this.szukanyProdukt == "Nabiał") {
      this.filteredProducts = this.listaNabialu;
    } else if (this.szukanyProdukt == "Chemia") {
      this.filteredProducts = this.listaChemia;
    }

    return this.filteredProducts;
  }

  

}
