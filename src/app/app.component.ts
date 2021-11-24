import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    {title: 'Lista de remédios', url: '/remedios-list', icon: 'menu-outline'},
    {title: 'Adicionar de remédio', url: '/remedios-register', icon: 'menu-outline'}
  ];

  constructor() {}
}
