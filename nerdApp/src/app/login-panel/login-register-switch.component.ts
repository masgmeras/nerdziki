import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-switch',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class MojKomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let register: HTMLElement | null = document.getElementById('register');
    let login: HTMLElement | null = document.getElementById('login');
    let nameField: HTMLElement | null = document.getElementById('nameField');
    let title: HTMLElement | null = document.getElementById('title');

    if (login) {
        login.onclick = function() {
            if (nameField) {
                nameField.style.maxHeight = "0";
            }
            if (title) {
                title.innerHTML = "Zaloguj się";
            }
            if (register) {
                register.classList.add("disable");
            }
            if (login) {
                login.classList.remove("disable");
            }
        }
    }

    if (register) {
        register.onclick = function() {
            if (nameField) {
                nameField.style.maxHeight = "60px";
            }
            if (title) {
                title.innerHTML = "Zarejestruj się";
            }
            if (register) {
                register.classList.remove("disable");
            }
            if (login) {
                login.classList.add("disable");
            }
            }
        }
    }
}