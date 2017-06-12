import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-toggles',
  templateUrl: './toggles.component.html',
  styles: [`
    .change {
      color: white;
    }
  `]
})
export class TogglesComponent implements OnInit {
  showDetail = false;
  timestamps = [];
  count = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onToggle() {
    this.count++;
    this.showDetail = !this.showDetail;
    this.timestamps.push(Date.now());
  }

  getColor() {
    return this.count < 6 ? 'Green' : 'Black';
  }

}
