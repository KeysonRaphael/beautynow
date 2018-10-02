import { Component } from '@angular/core';


import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PerfilPage;

  constructor() {

  }
}
