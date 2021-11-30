import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    {title: 'Remédios', url: '/remedios-list', icon: 'flask'},
    // {title: 'Adicionar de remédio', url: '/remedios-register', icon: 'menu-outline'},
    {title: 'Funcionários', url: '/funcionarios-list', icon: 'people'}
    // {title: 'Adicionar funcionários', url: '/funcionarios-register', icon: 'menu-outline'}
  ]

  constructor() {}
}
