import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './admin-panel/sign-in/sign-in.component';
import { SignUpComponent } from './admin-panel/sign-up/sign-up.component';
import { MainComponent } from './main/main.component';
import { FavouriteLeafletsComponent } from './favourite-leaflets/favourite-leaflets.component';
import {RodoComponent} from "./admin-panel/rodo/rodo.component";

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'main', component:MainComponent},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  {path:'favourite', component:FavouriteLeafletsComponent},


  {path:'rodo', component:RodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
