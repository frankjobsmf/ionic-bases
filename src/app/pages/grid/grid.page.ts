import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {

  data = [1,1,1,1,1,1,1,1,1,1,1,1];

  constructor() { }

  ngOnInit() {
  }

}
