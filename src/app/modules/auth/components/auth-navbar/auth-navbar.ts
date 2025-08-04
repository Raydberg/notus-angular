import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink,NgClass],
  selector: 'auth-navbar',
  templateUrl: 'auth-navbar.html'
})

export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit(): void { }

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
