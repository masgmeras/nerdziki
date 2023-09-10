import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {FormBuilder} from '@angular/forms';
import {from} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {


  // README https://angular.io/start/start-forms
  // https://www.youtube.com/watch?v=F1NoohuveRQ
  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  });

  errors: any;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private auth: AngularFireAuth) {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.signInForm.value);
    from(this.auth.signInWithEmailAndPassword(<string>this.signInForm.value.email, <string>this.signInForm.value.password))
      .subscribe({
        next: (v) => {
          this.router.navigate(['main'])
        },
        error: (e) => {
          console.error(e);
          this.errors = e;
        },
        complete: () => console.info('complete')
      })
    this.signInForm.reset();
  }
}
