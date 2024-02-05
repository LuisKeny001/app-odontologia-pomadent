import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/core/index.interface';
import { ModalService } from 'src/app/core/index.service.triggers';
import { ClientesService } from 'src/app/core/index.service.https';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, OnDestroy {
  @ViewChild('search_and_addItem') search_and_addItem!: SearchComponent;
  listaCliente: Cliente[] = [];
  copiaListaCliente: Cliente[] = [];

  modalSbc: Subscription = new Subscription();
  clienteSbc: Subscription = new Subscription();

  constructor(
    private clienteSrv: ClientesService,
    private modalSrv: ModalService,
  ){}

  ngOnInit(): void {
    this.modalSbc = this.modalSrv.activatedModal$.subscribe(res => this.search_and_addItem.addItem = res);
    this.clienteSbc = this.clienteSrv.getClientes().subscribe(res => {
      this.listaCliente = res
      this.copiaListaCliente = res
    })
  }

  ngOnDestroy(): void {
    this.modalSbc.unsubscribe();
    this.clienteSbc.unsubscribe();
  }

  filterClients(event: string): void {
    if(event === '') {
      this.listaCliente = this.copiaListaCliente
    } else {
      this.listaCliente = this.copiaListaCliente.filter(cliente => 
          cliente.fullName.toLowerCase().includes(event.toLowerCase())
        )
    }
  }
}
