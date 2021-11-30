import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;


  data: any[] = Array(30);

  constructor() { }

  ngOnInit() {
  }

  loadData( event ){

    setTimeout( () => {


      const newArray = Array(30);

      this.data.push( ...newArray );
      this.infiniteScroll.complete();

    }, 2000);

    console.log( event);

  }

}
