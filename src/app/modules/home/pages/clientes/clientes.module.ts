import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CardClientesComponent } from './components/card-clientes/card-clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    CardClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SearchComponent,
    ModalComponent
  ]
})
export class ClientesModule { }
