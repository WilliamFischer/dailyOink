import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DucklingsPage } from './ducklings.page';

import { DucklingsPageRoutingModule } from './ducklings-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DucklingsPageRoutingModule
  ],
  declarations: [DucklingsPage]
})
export class DucklingsPageModule {}
