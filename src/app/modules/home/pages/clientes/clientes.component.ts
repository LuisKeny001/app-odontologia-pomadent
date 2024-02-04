import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalService } from 'src/app/core/index.service.triggers';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild('search_and_addItem') search_and_addItem!: SearchComponent;

  constructor(
    private modalSrv: ModalService
  ){}

  ngOnInit(): void {
    this.modalSrv.activatedModal$.subscribe(res => this.search_and_addItem.addItem = res);
  }

  public openModal(): void {
    const activateModal: boolean = this.search_and_addItem.addItem;
    this.modalSrv.activatedModal$.emit(activateModal);
  }
}
