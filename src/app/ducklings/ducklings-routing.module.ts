import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DucklingsPage } from './ducklings.page';

const routes: Routes = [
  {
    path: '',
    component: DucklingsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DucklingsPageRoutingModule {}
