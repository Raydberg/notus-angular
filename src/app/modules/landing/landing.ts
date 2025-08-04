import { Component, OnInit } from '@angular/core';
import { FooterProfile } from "../../shared/components/footer-profile";
import { AuthNavbar } from "../auth/components/auth-navbar/auth-navbar";
import { RouterLink } from '@angular/router';

@Component({
  imports: [FooterProfile, AuthNavbar,RouterLink],
  selector: 'landing',
  templateUrl: 'landing.html'
})

export class Landing implements OnInit {
  constructor() { }

  ngOnInit() { }
}
