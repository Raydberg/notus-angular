import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableDropdown } from "../table-dropdown/table-dropdown";

@Component({
  standalone: true,
  imports: [NgClass, TableDropdown],
  selector: 'card-table',
  templateUrl: 'card-table.html'
})

export class CardTable implements OnInit {
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor() {}

  ngOnInit(): void {}
}
