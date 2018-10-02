import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroTrabalhadorPage } from './cadastro-trabalhador';

@NgModule({
  declarations: [
    CadastroTrabalhadorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroTrabalhadorPage),
  ],
})
export class CadastroTrabalhadorPageModule {}
