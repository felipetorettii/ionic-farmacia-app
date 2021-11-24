import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemediosRegisterPageRoutingModule } from './remedios-register-routing.module';

import { RemediosRegisterPage } from './remedios-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RemediosRegisterPageRoutingModule
  ],
  declarations: [RemediosRegisterPage]
})
export class RemediosRegisterPageModule {}
