import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionariosRegisterPageRoutingModule } from './funcionarios-register-routing.module';

import { FuncionariosRegisterPage } from './funcionarios-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FuncionariosRegisterPageRoutingModule
  ],
  declarations: [FuncionariosRegisterPage]
})
export class FuncionariosRegisterPageModule {}
