import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  public type: string;
  public stacked: any[] = [];

  public randomStacked(): void {
    const types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    const n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      const index = Math.floor((Math.random() * 4));
      const value = Math.floor((Math.random() * 27) + 3);
      this.stacked.push({
        value,
        type: types[index]
      });
    }
  }

  constructor() {
    this.randomStacked();
  }

  ngOnInit() {
  }

}
