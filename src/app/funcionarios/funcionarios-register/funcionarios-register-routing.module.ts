import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosRegisterPage } from './funcionarios-register.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosRegisterPage
  },
  {
    path: ':id',
    component: FuncionariosRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosRegisterPageRoutingModule {}
