import { Injectable } from "@angular/core";

export interface CatData {
  name: string;
  food: number;
  health: number;
  play: number;
  clean: number;
  sleep: number;
  lastAction: string;
}

@Injectable({
  providedIn: "root"
})
export class CatDataService {

  catData: CatData;
  endedGame = false;
  foodChange: number;
  healthChange: number;
  playChange: number;
  cleanChange: number;
  sleepChange: number;
  starterNumber = 70;

  getData():CatData  {
   let result = localStorage.getItem('catData')
      ? JSON.parse(localStorage.getItem('catData'))
      : {
          name: 'Chunky',
          food: this.starterNumber,
          health: this.starterNumber,
          play: this.starterNumber,
          clean: this.starterNumber,
          sleep: this.starterNumber,
          lastAction: '',
        };
        return this.catData = result;
  }

  resetGame() {
    this.endedGame = false;
    this.catData = {
      name: 'Chunky',
      food: this.starterNumber,
      health: this.starterNumber,
      play: this.starterNumber,
      clean: this.starterNumber,
      sleep: this.starterNumber,
      lastAction: '',
    };
    this.foodChange = 0;
    this.healthChange = 0;
    this.playChange = 0;
    this.cleanChange = 0;
    this.sleepChange = 0;
  }

  statChange(food?, health?, play?, clean?, sleep?) {
    this.foodChange = food;
    this.healthChange = health;
    this.playChange = play;
    this.cleanChange = clean;
    this.sleepChange = sleep;
  }
}
