import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'footer-admin',
  templateUrl: 'footer-admin.html'
})

export class FooterAdmin implements OnInit {
  date = new Date().getFullYear()
  constructor() { }

  ngOnInit() { }
}
