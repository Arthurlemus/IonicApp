import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<any[]>
  txtselect: string = 'todos'; // Texto seleccionado desde el segment

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.heroes = this.dataService.getHeroes();
  }

  segmentChanged(ev){
    this.txtselect = ev.detail.value; // Adquiere el valor del segment al cambiar de opcion
  }

}
