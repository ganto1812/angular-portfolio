import { Component, OnInit } from '@angular/core';
import { CatData, CatDataService } from './cat-data.service';

@Component({
  selector: 'app-chunky',
  templateUrl: './chunky.component.html',
  styleUrls: ['./chunky.component.css']
})
export class ChunkyComponent implements OnInit {
  catData: CatData;

  constructor(public catDataService: CatDataService) { }

  ngOnInit(): void {
    this.catDataService.getData();
    this.catData = this.catDataService.catData;
  }

}
