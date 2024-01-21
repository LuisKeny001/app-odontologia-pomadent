import { Component, OnInit } from '@angular/core';
import { calculateDateString } from 'src/app/core/index.function';

interface client {
  id: number,
  name: string,
  date: string,
  done: boolean,
  hour_init: string,
  hour_end: string
}

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit {
  clients: client[] = [
    {
      id: 1,
      name: 'Luis Keny Lucero Balvin',
      date: '2024-01-02',
      done: false,
      hour_init: '10:00',
      hour_end: '10:40'
    },
    {
      id: 2,
      name: 'Maria lopez Perez',
      date: '2024-01-21',
      done: true,
      hour_init: '10:00',
      hour_end: '11:00'
    },
    {
      id: 3,
      name: 'Pedro Perez Roble',
      date: '2024-01-21',
      done: false,
      hour_init: '11:00',
      hour_end: '12:00'
    },
    {
      id: 4,
      name: 'Mario Luigui Rojas Gutierrez',
      date: '2024-01-21',
      done: false,
      hour_init: '14:00',
      hour_end: '15:00'
    },
    {
      id: 5,
      name: 'Luis Keny Lucero Balvin',
      date: '2024-01-22',
      done: false,
      hour_init: '14:00',
      hour_end: '15:00'
    }
  ]
  clientsCurrently: client[] = [];
  clientsDefeated: client[] = [];

  ngOnInit() {
    const dateCurrently: string = calculateDateString(new Date);
    this.clientsCurrently = this.clients.filter(client => 
        client.date == dateCurrently
      );

    this.clientsDefeated = this.clients.filter(client => 
        client.date < dateCurrently
      );
  }
}
