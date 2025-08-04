import { Component, OnInit } from '@angular/core';
import { CardSettings } from "../components/card-settings/card-settings";
import { CardProfile } from "../components/card-profile/card-profile";

@Component({
  standalone: true,
  imports: [CardSettings, CardProfile],
  selector: 'settings',
  template: `

<div class="flex flex-wrap">
  <div class="w-full lg:w-8/12 px-4">
    <card-settings></card-settings>
  </div>
  <div class="w-full lg:w-4/12 px-4">
    <card-profile></card-profile>
  </div>
</div>

  `
})

export default class Settings implements OnInit {
  constructor() { }

  ngOnInit() { }
}
