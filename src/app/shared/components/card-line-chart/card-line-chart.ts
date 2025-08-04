import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  imports: [],
  selector: 'card-line-chart',
  templateUrl: 'card-line-chart.html'
})

export class CardLineChart implements OnInit, AfterViewInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    const config: ChartConfiguration<'line'> = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "Sales Charts",
            color: "white",
          },
          legend: {
            labels: {
              color: "white",
            },
            align: "end",
            position: "bottom",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        interaction: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Month",
              color: "white",
            },
            grid: {
              display: false,
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
              color: "white",
            },
            grid: {
              // drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };

    const ctx = document.getElementById("line-chart") as HTMLCanvasElement;
    new Chart(ctx, config);
  }
}
