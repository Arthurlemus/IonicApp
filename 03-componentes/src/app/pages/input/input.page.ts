import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  
  nombre: string = 'Arthur Lemus';
  apellido: string = '';
  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  submit(formulario: NgForm){
    console.log('Enviado');
    console.log('Usuario: ', this.usuario);
    console.log('Formulario', formulario);
  }

}
