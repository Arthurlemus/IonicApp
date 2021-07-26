import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor(private dataService: DataService) {
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(): void{
    // this.dataService.getPost().subscribe(post => {
    //   this.mensajes = post;
    // });
    this.mensajes = this.dataService.getPost();
  }

  seleccionado(id: number): void{
    console.log('ID', id);
  }

}
