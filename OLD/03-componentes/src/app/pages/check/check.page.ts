import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {name: 'Primero', color: 'primary', selected: false},
    {name: 'Segundo', color: 'secondary', selected: true},
    {name: 'Tercero', color: 'tertiary', selected: false},
    {name: 'Completo', color: 'success', selected: true}
  ];
  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log(check.selected);
  }

}
