import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosComponent } from './servicios.component';
import { SearchComponent } from 'src/app/shared/components/search/search.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { CardServiosComponent } from './components/card-servios/card-servios.component';


@NgModule({
  declarations: [
    ServiciosComponent,
    CardServiosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    SearchComponent,
    ModalComponent
  ]
})
export class ServiciosModule { }
