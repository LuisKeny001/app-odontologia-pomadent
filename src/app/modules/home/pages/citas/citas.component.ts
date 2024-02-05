import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/core/index.service.triggers';
import { SearchComponent } from 'src/app/shared/components/search/search.component';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit, OnDestroy {
  @ViewChild('search_and_addItem') search_and_addItem!: SearchComponent;
  modalSbc: Subscription = new Subscription();

  constructor(
    private modalSrv: ModalService
  ){}

  ngOnInit(): void {
    this.modalSbc = this.modalSrv.activatedModal$.subscribe(res => this.search_and_addItem.addItem = res);
  }

  ngOnDestroy(): void {
    this.modalSbc.unsubscribe();
  }
}
