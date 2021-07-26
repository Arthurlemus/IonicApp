import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje: any;
  @Output() mensajeSelect = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickPost(): void{
    this.mensajeSelect.emit(this.mensaje.id);
  }

}
