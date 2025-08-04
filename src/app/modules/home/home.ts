import { Component, OnInit } from '@angular/core';
import { FooterSmall } from "../auth/components/footer-small/footer-smal";
import { RouterLink } from '@angular/router';
import { NavbarCustom } from "../../shared/components/navbar-custom/navbar-custom";

@Component({
  imports: [FooterSmall, RouterLink, NavbarCustom],
  selector: 'home',
  templateUrl: 'home.html'
})

export default class Home implements OnInit {
  constructor() { }

  ngOnInit() { }
}
