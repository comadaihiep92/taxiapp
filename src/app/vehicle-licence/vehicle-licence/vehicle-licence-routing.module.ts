import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleLicencePage } from './vehicle-licence.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleLicencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleLicencePageRoutingModule {}
