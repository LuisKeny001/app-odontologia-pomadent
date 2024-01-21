import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { calculateDateString, orderHoursString } from 'src/app/core/index.function';
import { DiarioService } from 'src/app/core/index.service.https';
import { Client } from 'src/app/core/index.interface';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent implements OnInit, OnDestroy {
  // clients: client[] = [
  //   {
  //     id: 1,
  //     name: 'Luis Keny Lucero Balvin',
  //     date: '2024-01-02',
  //     done: false,
  //     hour_init: '10:00',
  //     hour_end: '10:40'
  //   },
  //   {
  //     id: 2,
  //     name: 'Pedro Perez Roble',
  //     date: '2024-01-21',
  //     done: false,
  //     hour_init: '11:00',
  //     hour_end: '12:00'
  //   },
  //   {
  //     id: 3,
  //     name: 'Maria lopez Perez',
  //     date: '2024-01-21',
  //     done: true,
  //     hour_init: '10:00',
  //     hour_end: '11:00'
  //   },
  //   {
  //     id: 4,
  //     name: 'Mario Luigui Rojas Gutierrez',
  //     date: '2024-01-21',
  //     done: false,
  //     hour_init: '14:00',
  //     hour_end: '15:00'
  //   },
  //   {
  //     id: 5,
  //     name: 'Luis Keny Lucero Balvin',
  //     date: '2024-01-22',
  //     done: false,
  //     hour_init: '14:00',
  //     hour_end: '15:00'
  //   },
  //   {
  //     id: 6,
  //     name: 'Luis Keny Lucero Balvin',
  //     date: '2024-01-21',
  //     done: false,
  //     hour_init: '15:00',
  //     hour_end: '16:00'
  //   },
  //   {
  //     id: 7,
  //     name: 'Luis Keny Lucero Balvin',
  //     date: '2023-12-20',
  //     done: false,
  //     hour_init: '15:00',
  //     hour_end: '16:00'
  //   },
  //   {
  //     id: 8,
  //     name: 'Luis Keny Lucero Balvin',
  //     date: '2023-12-19',
  //     done: false,
  //     hour_init: '15:00',
  //     hour_end: '16:00'
  //   }
  // ]
  clientsCurrently: Client[] = [];
  clientsDefeated: Client[] = [];
  diarioSubcription: Subscription = new Subscription();

  constructor(
    private diarioSrv: DiarioService
  ){}

  ngOnInit() {
    const dateCurrently: string = calculateDateString(new Date);
    this.diarioSubcription = this.diarioSrv.getDiario().subscribe(clients => {
      this.clientsCurrently = clients.filter(client => client.date == dateCurrently)
      .sort((a, b) => orderHoursString(a.hour_init,b.hour_init));

    this.clientsDefeated = clients.filter(client => client.date < dateCurrently)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    })
  }

  ngOnDestroy(): void {
    this.diarioSubcription.unsubscribe();
  }

}
