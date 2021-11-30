import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ComponentRoute } from 'src/app/interfaces/menu.interface';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Observable<ComponentRoute[]>;

  constructor(
    private menu: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() { 

    this.components = this.dataService.getMenuOpts();
  
  }

  showMenu(){

    // this.menu.open();
    this.menu.open('first');

  }

}
