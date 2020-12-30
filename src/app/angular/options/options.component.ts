import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent {
  @Input() catData;

  options = [
    {
      name: 'Food',
      actions: ['Milk', 'Fish', 'Sardines'],
    },
    {
      name: 'Health',
      actions: ['Doctor', 'Massage'],
    },
    {
      name: 'Play',
      actions: ['Fetch', 'Laser', 'Chase', 'Wand'],
    },
    {
      name: 'Clean',
      actions: ['Shower', 'Brush'],
    },
    {
      name: 'Sleep',
      actions: ['Nap', 'Full'],
    },
  ];
}
