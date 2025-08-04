import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from "../../modules/auth/components/auth-navbar/auth-navbar";
@Component({
  selector: 'auth-layout',
  imports: [RouterOutlet, AuthNavbarComponent],
  template: `
  <div class="">
  <auth-navbar/>
  <main>
    <section class="relative w-full h-full py-40 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-slate-800 bg-no-repeat bg-full"
        style="background-image: url('assets/img/register_bg_2.png')"
      ></div>
      <router-outlet/>
      <!-- <app-footer-small [absolute]="true"></app-footer-small> -->
    </section>
  </main>
</div>
  `
})

export class AuthLayout implements OnInit {
  ngOnInit(): void { }

}
