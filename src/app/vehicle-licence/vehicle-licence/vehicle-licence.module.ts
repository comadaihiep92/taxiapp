import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleLicencePageRoutingModule } from './vehicle-licence-routing.module';

import { VehicleLicencePage } from './vehicle-licence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleLicencePageRoutingModule
  ],
  declarations: [VehicleLicencePage]
})
export class VehicleLicencePageModule {}
