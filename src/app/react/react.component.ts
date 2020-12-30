import { Component } from '@angular/core';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls:['./react.component.css']
})
export class ReactComponent {
  projects = [
    {name: "Weather App", src: "weather.png", link:"https://old-react-projects.netlify.app/project1"},
    {name: "Retail Phone Store", src: "retail.png", link:"https://old-react-projects.netlify.app/project2"},
    {name: "To Do List", src: "todo.png", link:"https://old-react-projects.netlify.app/project3"},
  ]
}
