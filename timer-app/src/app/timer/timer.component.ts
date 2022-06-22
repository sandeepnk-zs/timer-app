import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.sass']
})
export class TimerComponent implements OnInit {

  constructor() { }

  counter: number = 0;
  start: boolean = false;
  ngOnInit(): void {
  }

  startTimer() {
    // alert("start clicked");
    this.start = true;
    if (this.start) {
      setInterval(() => {
        if (this.start==false) return;
        this.counter = this.counter + 1;
      }, 1000);
    }
  }

  stopTimer() {
    this.start = false;
  }

  clearTimer() {
    this.counter = 0;
  }


}
