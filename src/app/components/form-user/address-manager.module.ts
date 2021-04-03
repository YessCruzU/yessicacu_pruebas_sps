import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressManagerPageRoutingModule } from './address-manager-routing.module';

import { AddressManagerPage } from './address-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressManagerPageRoutingModule
  ],
  declarations: [AddressManagerPage]
})
export class AddressManagerPageModule {}
