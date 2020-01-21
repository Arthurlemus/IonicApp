import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {icon: 'american-football', name: 'Action Sheet', redirectTo: '/action-sheet'},
    {icon: 'appstore', name: 'Alert', redirectTo: '/alert'},
    {icon: 'beaker', name: 'Avatar', redirectTo: '/avatar'},
    {icon: 'radio-button-on', name: 'Botones y Router', redirectTo: '/botones'},
    {icon: 'card', name: 'Cards', redirectTo: '/card'},
    {icon: 'checkmark-circle-outline', name: 'Checks', redirectTo: '/check'},
    {icon: 'calendar', name: 'DateTimes', redirectTo: '/date-time'},
    {icon: 'car', name: 'Fabs', redirectTo: '/fab'},
    {icon: 'grid', name: 'Grid - Rows', redirectTo: '/grid'},
    {icon: 'infinite', name: 'Inifinite Scroll', redirectTo: '/infinite-scroll'},
    {icon: 'hammer', name: 'Input - Forms', redirectTo: '/input'},
    {icon: 'list', name: 'Listas - Sliding', redirectTo: '/list'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon?: string;
  name: string;
  redirectTo: string;
}

