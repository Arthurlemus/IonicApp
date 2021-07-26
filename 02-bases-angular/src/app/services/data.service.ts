import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .pipe(tap(msj => console.log(msj)));
  }
}
