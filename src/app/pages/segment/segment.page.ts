import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  superHeroes: Observable<any>;

  segmentSelected: string = '';

  skeletomItem = Array(20);

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.superHeroes = this.dataService.getHeroes();

  }

  segmentChange( event ){

    this.segmentSelected = event.detail.value;

    if ( event.detail.value === '' ){
      
      this.segmentSelected = '';

    } else if ( event.detail.value === 'dc' ){

      this.segmentSelected = 'DC Comics';

    } else if ( event.detail.value === 'marvel'){

      this.segmentSelected = 'Marvel Comics';

    } 


    console.log( 'SEGMENT SELECTED', this.segmentSelected );

  }

}
