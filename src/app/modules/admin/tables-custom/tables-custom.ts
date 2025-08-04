import { Component, OnInit } from '@angular/core';
import { CardTable } from "../components/card-table/card-table";

@Component({
  selector: 'tables-custom',
  template: `
  <div class="flex flex-wrap mt-4">
  <div class="w-full mb-12 px-4">
    <card-table></card-table>
  </div>
  <div class="w-full mb-12 px-4">
    <card-table color="dark"></card-table>
  </div>
</div>

  `,
  imports: [CardTable]
})

export default class TablesCustom implements OnInit {
  constructor() { }

  ngOnInit() { }
}
