import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { SignUpComponent } from './admin-panel/sign-up/sign-up.component';
import { SignInComponent } from './admin-panel/sign-in/sign-in.component';
import { FavouriteLeafletsComponent } from './favourite-leaflets/favourite-leaflets.component';
import { FindProductsNumberComponent } from './find-products-number/find-products-number.component';
import {LeafletsService} from "./lista-gazetek/leaflets.service";
import {MatBadgeModule} from "@angular/material/badge";
import { MainComponent } from './main/main.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgOptimizedImage} from "@angular/common";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AdminService} from "./admin-panel/admin.service";
import { NewPasswordComponent } from './admin-panel/new-password/new-password.component';
import { RodoComponent } from './admin-panel/rodo/rodo.component';
import { TeamComponent } from './team/team.component';

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
        MainComponent,
        NewPasswordComponent,
        RodoComponent,
        TeamComponent
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
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebase), //https://www.youtube.com/watch?v=mp_kv6oB7xI
    AngularFireAuthModule,
    SlickCarouselModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  providers: [LeafletsService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
