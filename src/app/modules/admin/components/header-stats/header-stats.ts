import { Component, OnInit } from '@angular/core';
import { CardStats } from "../../../../shared/components/card-stats/card-stats";

@Component({
  standalone: true,
  imports: [CardStats],
  selector: 'header-stats',
  templateUrl: 'header-stats.html'
})

export class HeaderStats implements OnInit {
  constructor() { }

  ngOnInit() { }
}
