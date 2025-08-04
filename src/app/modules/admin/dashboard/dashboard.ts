import { Component, OnInit } from '@angular/core';
import { CardLineChart } from "../../../shared/components/card-line-chart/card-line-chart";
import { CardBarChart } from "../../../shared/components/card-bar-chart/card-bar-chart";
import { CardPageVisits } from "../../../shared/components/card-page-visits/card-page-visits";
import { CardSocialTraffic } from "../../../shared/components/card-social-traffic/card-social-traffic";

@Component({
  imports: [CardLineChart, CardBarChart, CardPageVisits, CardSocialTraffic],
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})

export default class Dashboard implements OnInit {
  constructor() { }

  ngOnInit() { }
}
