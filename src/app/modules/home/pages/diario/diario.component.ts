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

      this.clientsDefeated = clients.filter(client => client.date < dateCurrently && !client.done)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    })
  }

  ngOnDestroy(): void {
    this.diarioSubcription.unsubscribe();
  }

}
