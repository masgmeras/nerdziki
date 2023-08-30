import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
