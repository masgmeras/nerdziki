import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LeafletsComponent } from './lista-gazetek/leaflets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatCheckboxModule} from "@angular/material/checkbox";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ProductSearchComponent } from './product-search/product-search.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListBrandsComponent } from './list-brands/list-brands.component';
import { MyListComponent } from './my-list/my-list.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FavouriteLeafletsComponent } from './favourite-leaflets/favourite-leaflets.component';
import { FindProductsNumberComponent } from './find-products-number/find-products-number.component';
import {LeafletsService} from "./lista-gazetek/leaflets.service";
import {MatBadgeModule} from "@angular/material/badge";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafletsComponent,
        ProductSearchComponent,
        ListCategoriesComponent,
        ListBrandsComponent,
        SignUpComponent,
        SignInComponent,
        FavouriteLeafletsComponent,
        MyListComponent,
        FindProductsNumberComponent,
        MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [LeafletsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
