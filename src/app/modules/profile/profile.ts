import { Component, OnInit } from '@angular/core';
import { AuthNavbar } from "../auth/components/auth-navbar/auth-navbar";
import { FooterProfile } from '../../shared/components/footer-profile';


@Component({
  imports: [AuthNavbar,FooterProfile],
  selector: 'profile',
  templateUrl: 'profile.html'
})

export default class Profile implements OnInit {
  constructor() { }

  ngOnInit() { }
}
