import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  home = {
    langs: ['html.svg', 'css.svg', 'js.svg', 'typescript.png', 'sql.png'],
    libs: [
      'reactjs.png',
      'redux.png',
      'angular.png',
      'rxjs.png',
      'bootstrap.png',
      'tailwind.png',
      'sass.png',
      'jquery.png',
    ],

    others: [
      'docker.png',
      'kubernetes.png',
      'github.png',
      'bitbucket.webp',
      'slack.png',
      'axosoft.png',
      'icescrum.png',
    ],
    testing: ['jest.png', 'react-testing-library.png', 'cypress.png'],
    designs: [
      'photoshop.svg',
      'illustrator.jpg',
      'adobe-xd.svg',
      'gimp.png',
      'inkscape.png',
      'figma.svg',
    ],
  };
  constructor() {}

  ngOnInit() {}
}
