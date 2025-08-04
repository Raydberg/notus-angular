import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownCustom } from "../dropdown-custom/dropdown-custom";

@Component({
  imports: [RouterLink, NgClass, DropdownCustom],
  selector: 'navbar-custom',
  templateUrl: 'navbar-custom.html'
})

export class NavbarCustom implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
