import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css'],
})
export class ReactComponent {
  projects = [
    { name: 'Weather App', src: 'weather.png' },
    { name: 'Retail Phone Store', src: 'retail.png' },
    { name: 'To Do List', src: 'todo.png' },
  ];
}
