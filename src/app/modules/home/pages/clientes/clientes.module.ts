import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';


@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SearchComponent,
    ModalComponent
  ]
})
export class ClientesModule { }
