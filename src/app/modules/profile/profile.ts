import { Component, OnInit } from '@angular/core';
import { AuthNavbar } from "../auth/components/auth-navbar/auth-navbar";
import { FooterProfile } from '../../shared/components/footer-profile';


@Component({
  standalone: true,
  imports: [AuthNavbar,FooterProfile],
  selector: 'profile',
  templateUrl: 'profile.html'
})

export class Profile implements OnInit {
  constructor() { }

  ngOnInit() { }
}
