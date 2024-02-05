import { Component, Input } from '@angular/core';
import { Servicios } from 'src/app/core/index.interface';

@Component({
  selector: 'app-card-servios',
  templateUrl: './card-servios.component.html',
  styleUrls: ['./card-servios.component.css']
})
export class CardServiosComponent {
  @Input() servicio!: Servicios;
}
