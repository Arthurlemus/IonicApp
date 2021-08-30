import { Component, OnInit } from '@angular/core';
import { MenuInterface } from '../../interface/menu.interface';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  componentes: Observable<MenuInterface[]>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }

}
