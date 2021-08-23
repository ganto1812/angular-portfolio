import { Component } from '@angular/core';
import { CatData, CatDataService } from './chunky/cat-data.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
})
export class AngularComponent {
  catData: CatData;
  randomColor: string;
  constructor(public catDataService: CatDataService) {}

  ngOnInit() {
    this.catDataService.getData();
    this.catData = this.catDataService.catData;
    this.getRandomColor();
  }

  getRandomColor() {
    setTimeout(() => {
      this.randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }, 300);
  }
}
