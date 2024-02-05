import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Servicios } from 'src/app/core/index.interface';
import { ServiciosService } from 'src/app/core/index.service.https';
import { ModalService } from 'src/app/core/index.service.triggers';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {
  @ViewChild('search_and_addItem') search_and_addItem!: SearchComponent;
  listaServicio: Servicios[] = [];
  copiaListaServicios: Servicios[] = [];
  servicio: Servicios = Servicios.init();

  modalSbc: Subscription = new Subscription();
  servicioSbc: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService,
    private servicioSrv: ServiciosService,
  ){}

  ngOnInit(): void {
    this.modalSbc = this.modalSrv.activatedModal$.subscribe(res => this.search_and_addItem.addItem = res);
    this.servicioSbc = this.servicioSrv.getServicios().subscribe(res => {
      this.listaServicio = res
      this.copiaListaServicios = res
    });
  }

  ngOnDestroy(): void {
    this.modalSbc.unsubscribe();
    this.servicioSbc.unsubscribe();
  }

  public openModal(srv: Servicios): void {
    this.search_and_addItem.addItem = true;
    this.servicio = srv;
  }

  public filterServicios(event: string): void {
    if(event === '') {
      this.listaServicio = this.copiaListaServicios
    } else {
      this.listaServicio = this.copiaListaServicios.filter(servicio => 
          servicio.name.toLowerCase().includes(event.toLowerCase())
        )
    }
  }
}
