import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { MenuInterface } from './interface/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes: Observable<MenuInterface[]>

  constructor(private dataService: DataService) {
      this.componentes = dataService.getMenu();
  }

}
