import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private dataService: DataService) { 
    this.getPosts();
  }

  ngOnInit(): void {
  }

  getPosts(): void{
    this.dataService.getPost().subscribe(post => {
      console.log(post);
    });
  }

}
