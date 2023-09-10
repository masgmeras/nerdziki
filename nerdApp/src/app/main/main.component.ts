import { Component } from '@angular/core';
import {AdminService} from "../admin-panel/admin.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private adminService: AdminService) {
  }

  getLoggedInUsername(){
    return this.adminService.loggedInUsername;
  }
}
