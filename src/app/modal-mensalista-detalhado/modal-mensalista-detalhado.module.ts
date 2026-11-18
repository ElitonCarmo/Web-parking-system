import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMensalistaDetalhadoPage } from './modal-mensalista-detalhado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMensalistaDetalhadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMensalistaDetalhadoPage]
})
export class ModalMensalistaDetalhadoPageModule {}
