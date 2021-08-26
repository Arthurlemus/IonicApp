import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  
  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  toggle: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  doReorder(event){
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from,1)[0]; // Quita el elemento del Arreglo
    this.personajes.splice(event.detail.to, 0, itemMover); // Inserta el elemento en el arreglo
    console.log(this.personajes);
    event.detail.complete(); // Aplica los cambios al mover la lista
  }

}
