import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioRoutingModule } from './diario-routing.module';
import { DiarioComponent } from './diario.component';
import { CardLineAppointmentInformationComponent } from './component/card-line-appointment-information/card-line-appointment-information.component';

@NgModule({
  declarations: [
    DiarioComponent,
    CardLineAppointmentInformationComponent
  ],
  imports: [
    CommonModule,
    DiarioRoutingModule,
  ]
})
export class DiarioModule { }
