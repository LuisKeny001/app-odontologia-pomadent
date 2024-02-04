import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';


@NgModule({
  declarations: [
    CitasComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    SearchComponent,
    ModalComponent
  ]
})
export class CitasModule { }
