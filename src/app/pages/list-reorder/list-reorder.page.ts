import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heroes: string[] = [
    'Captain America',
    'Iron Man',
    'Spiderman',
    'Hulk',
    'Thor',
    'Black Widow'
  ];

  activateToggle: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){

    console.log( event );

    const heroMove = this.heroes.splice(event.detail.from, 1)[0];
    this.heroes.splice(event.detail.to, 0, heroMove);

    console.log(this.heroes);
    event.detail.complete();

  }

  doActivateToggle(): boolean {

    console.log( this.activateToggle );

    return this.activateToggle = !this.activateToggle;
  }

}
