import { Component, Input } from '@angular/core';
import { Cliente } from 'src/app/core/index.interface';

@Component({
  selector: 'app-card-clientes',
  templateUrl: './card-clientes.component.html',
  styleUrls: ['./card-clientes.component.css']
})
export class CardClientesComponent {
  @Input() cliente: Cliente = Cliente.init();
}
