import { Component, Input, OnInit } from '@angular/core';
import { hoursCurrently } from 'src/app/core/index.function';

interface client {
  id: number,
  name: string,
  date: string,
  done: boolean,
  hour_init: string,
  hour_end: string
}

@Component({
  selector: 'app-card-line-appointment-information',
  templateUrl: './card-line-appointment-information.component.html',
  styleUrls: ['./card-line-appointment-information.component.css']
})
export class CardLineAppointmentInformationComponent implements OnInit {
  @Input()client!: client;
  @Input()onlyDate: boolean = false;
  statusIcon: number = 1; /* 0: pending, 1: done, 2: defeated */

  ngOnInit() {
    const { hour_end, done } = this.client;

    if(done) {
      this.statusIcon = 1;
    } else {
      const defeated: boolean = hoursCurrently() > hour_end;
      this.statusIcon = defeated ? 2 : 0;
    }
  }
}
