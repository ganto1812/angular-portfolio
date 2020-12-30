import { Component } from '@angular/core';
import { CatData, CatDataService } from './cat-data.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
})
export class AngularComponent {
  catData: CatData;
  constructor(public catDataService: CatDataService) {}
  
  ngOnInit() {
    this.catDataService.getData();
    this.catData = this.catDataService.catData;
  }
}
