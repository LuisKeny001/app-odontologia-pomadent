import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SiderbarService } from 'src/app/core/index.service.triggers';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [ CommonModule, HomeRoutingModule ],
})
export class SidebarComponent {
  
  activate: boolean = true;

  constructor(
    private siderbarSrv: SiderbarService
  ){}

  reactiveSidebar(){
    this.activate = !this.activate;
    this.siderbarSrv.activatedSidebar$.emit(this.activate);
  }
}
