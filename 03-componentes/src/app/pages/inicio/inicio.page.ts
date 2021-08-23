import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'action sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirecTo: '/alert'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Buttons',
      redirecTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Datetime',
      redirecTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirecTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirecTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Form',
      redirecTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirecTo: '/list'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
