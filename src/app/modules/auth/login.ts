import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  selector: 'login',
  templateUrl: 'login.html'
})

export class Login implements OnInit {
  constructor() { }

  ngOnInit() { }
}
