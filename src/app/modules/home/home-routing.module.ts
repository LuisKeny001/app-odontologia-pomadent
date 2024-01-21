import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'Diario',
        pathMatch: 'full'
      },
      {
        path:'Diario',
        loadChildren: () => import('./pages/diario/diario.module').then(m => m.DiarioModule)
      },
      {
        path:'Citas',
        loadChildren: () => import('./pages/citas/citas.module').then(m => m.CitasModule)
      },
      {
        path:'Servicios',
        loadChildren: () => import('./pages/servicios/servicios.module').then(m => m.ServiciosModule)
      },
      {
        path: 'Clientes',
        loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: '**',
        redirectTo: 'Diario',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
