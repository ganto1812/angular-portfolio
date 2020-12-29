import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  home = {
    langs:["html.svg", "css.svg", "js.svg", "cSharp.svg"],
    libs:["jquery.png", "reactjs.png", "angular.png", "bootstrap.png", "sass.png"],
    designs:["photoshop.svg", "illustrator.jpg", "adobe-xd.svg", "gimp.png", "inkscape.png"],
    others: ["github.png","bitbucket.svg", "slack.png","axosoft.svg", "icescrum.png", "figma.png"]
  }
  constructor() {}

  ngOnInit() {
  }

}
