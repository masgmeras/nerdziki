import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AdminService} from "../admin.service";
import {from} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  errors: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AngularFireAuth,
              private adminService: AdminService) {
  }


  onSubmit(): void {
    console.warn('Your order has been submitted', this.signUpForm.value);
    from(this.auth.createUserWithEmailAndPassword(<string>this.signUpForm.value.email, <string>this.signUpForm.value.password))
        .subscribe({
          next: (v) => {
            console.log(v);
            this.router.navigate(['main'])
          },
          error: (e) => {
            console.error(e);
            this.errors = e;
          },
          complete: () => console.info('complete')
        })

  }
}
