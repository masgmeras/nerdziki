import { Component } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  isLoginFormVisible = false;

  toggleLoginForm() {
    this.isLoginFormVisible = !this.isLoginFormVisible;
  }
}