import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'footer-profile',
  templateUrl: 'footer-profile.html'
})

export class FooterProfile implements OnInit {
  date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void { }
}
