import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './admin-panel/sign-in/sign-in.component';
import {SignUpComponent} from './admin-panel/sign-up/sign-up.component';
import {MainComponent} from './main/main.component';
import {FavouriteLeafletsComponent} from './favourite-leaflets/favourite-leaflets.component';
import {NewPasswordComponent} from './admin-panel/new-password/new-password.component';
import {RodoComponent} from "./admin-panel/rodo/rodo.component";
import {TeamComponent} from "./team/team.component";
import {AdminListComponent} from './admin-list/admin-list.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'favourite', component: FavouriteLeafletsComponent},
  {path: 'newpassword', component: NewPasswordComponent},
  {path: 'rodo', component: RodoComponent},
  {path: 'team', component: TeamComponent},
  {path: 'adminList', component: AdminListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
