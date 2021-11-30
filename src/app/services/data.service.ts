import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentRoute } from '../interfaces/menu.interface';

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


}
