import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {from} from "rxjs";
import {Router} from "@angular/router";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  // README https://angular.io/start/start-forms
  // https://www.youtube.com/watch?v=F1NoohuveRQ
  signInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: '',
    username: '',
  });

  errors: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AngularFireAuth,
              private adminService: AdminService) {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.signInForm.value);
    from(this.auth.signInWithEmailAndPassword(<string>this.signInForm.value.email, <string>this.signInForm.value.password))
      .subscribe({
        next: (v) => {
          console.log(<string>this.signInForm.value.email)
          console.log(v)
          // this.adminService.loggedInUsername = <string>this.signInForm.value.email;
          this.adminService.loggedInUsername = <string>this.signInForm.value.username;
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
