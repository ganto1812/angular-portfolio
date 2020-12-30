import { Component, Input } from '@angular/core';
import { CatDataService } from '../../cat-data.service';

@Component({
  selector: 'app-action-options',
  templateUrl: './action-options.component.html',
  styleUrls: ['./action-options.component.css'],
})
export class ActionOptionsComponent {
  @Input() option;
  @Input() catData;

  actionId: number;

  constructor(private catDataService: CatDataService) {}
  action(action, item) {
    switch (action) {
      case 'Food':
        this.catDataService.catData.lastAction === 'Food'
          ? this.showMessage("You can't pick the same action twice")
          : '';
        switch (item) {
          case 0:
            this.changeCatData(10, 2, -1, -2, -4);
            break;
          case 1:
            this.changeCatData(15, 4, -2, -3, -6);
            break;
          case 2:
            this.changeCatData(12, 3, -2, -2, -6);
            break;
        }
        break;
      case 'Health':
        switch (item) {
          case 0:
            this.changeCatData(-4, 7, -2, -2, -2);
            break;
          case 1:
            this.changeCatData(-1, 12, -1, -1, null);
            break;
        }
        break;
      case 'Play':
        switch (item) {
          case 0:
            this.changeCatData(-4, -2, 8, -6, -4);
            break;
          case 1:
            this.changeCatData(-5, -3, 9, -7, -5);
            break;
          case 2:
            this.changeCatData(-6, -1, 11, -4, -3);
            break;
          case 3:
            this.changeCatData(-2, -3, 7, -1, -1);
            break;
        }
        break;
      case 'Clean':
        switch (item) {
          case 0:
            this.changeCatData(1, 1, -6, 14, -5);
            break;
          case 1:
            this.changeCatData(-1, 1, -3, 7, -2);
            break;
        }
        break;
      case 'Sleep':
        switch (item) {
          case 0:
            this.changeCatData(null, null, -3, -1, 6);
            break;
          case 1:
            this.changeCatData(null, null, -5, -2, 12);
            break;
        }
        break;
    }
    this.catDataService.catData.lastAction = action;
  }

  showMessage(message) {
    console.log(message);
  }

  changeCatData(food?, health?, play?, clean?, sleep?) {
    let data = this.catDataService.catData;
    food ? (data.food += food) : '';
    health ? (data.health += health) : '';
    play ? (data.play += play) : '';
    clean ? (data.clean += clean) : '';
    sleep ? (data.sleep += sleep) : '';
    data.food > 100 ? (data.food = 100) : data.food <= 0 ? this.endGame() : '';
    data.health > 100
      ? (data.health = 100)
      : data.health < 0
      ? this.endGame()
      : '';
    data.play > 100 ? (data.play = 100) : data.play <= 0 ? this.endGame() : '';
    data.clean > 100
      ? (data.clean = 100)
      : data.clean <= 0
      ? this.endGame()
      : '';
    data.sleep > 100
      ? (data.sleep = 100)
      : data.sleep <= 0
      ? this.endGame()
      : '';
      this.catDataService.statChange(food, health, play, clean, sleep);
      let savedData = JSON.stringify(data);
      localStorage.setItem('catData', savedData);
  }

  endGame() {
    this.catDataService.endedGame = true;
  }
}
