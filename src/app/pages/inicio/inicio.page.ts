import { Component, OnInit } from '@angular/core';

interface ComponentRoute {
  icon: string,
  name: string,
  color: string,
  redirectTo: string
};

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: ComponentRoute[] = [

    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      color: 'primary',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'bulb-outline',
      name: 'Alert',
      color: 'secondary',
      redirectTo: '/alert'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
