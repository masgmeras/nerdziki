import { Component, ViewChild } from '@angular/core';
import {AdminService} from "../admin-panel/admin.service";
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private adminService: AdminService, private observer: BreakpointObserver) {}

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  getLoggedInUsername() {
    return this.adminService.loggedInUsername;
  }

  isCategoryListVisible: boolean = false;
  isShopListVisible: boolean = false;

  toggleCategoryList() {
    this.isCategoryListVisible = !this.isCategoryListVisible;
  }

  toggleShopList() {
    this.isShopListVisible = !this.isShopListVisible;
  }
}
