import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemediosRegisterPage } from './remedios-register.page';

const routes: Routes = [
  {
    path: '',
    component: RemediosRegisterPage
  },
  {
    path: ':id',
    component: RemediosRegisterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemediosRegisterPageRoutingModule {}
