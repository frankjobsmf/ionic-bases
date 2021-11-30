import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentRoute } from '../interfaces/menu.interface';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers(){

    return this.http.get(`https://jsonplaceholder.typicode.com/users`);

  }

  getMenuOpts (){

    return this.http.get<ComponentRoute[]>('/assets/data/menu-opts.json');
  }


  getHeroes () {

    return this.http.get('/assets/data/superheroes.json').
      pipe(
        delay( 1500 )
      );

  }


  getAlbums (){

    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }


}
