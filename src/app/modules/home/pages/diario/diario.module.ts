import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiarioRoutingModule } from './diario-routing.module';
import { DiarioComponent } from './diario.component';
import { CardLineAppointmentInformationComponent } from './component/card-line-appointment-information/card-line-appointment-information.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@NgModule({
  declarations: [
    DiarioComponent,
    CardLineAppointmentInformationComponent,
  ],
  imports: [
    CommonModule,
    DiarioRoutingModule,
    ModalComponent
  ]
})
export class DiarioModule { }
