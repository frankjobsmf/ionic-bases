import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {


  progressBar: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  progressRange( event ){

    console.log( event.detail.value );

    this.progressBar = event.detail.value / 100;


  }

}
