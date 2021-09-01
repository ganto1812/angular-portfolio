import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styles: [
  ]
})
export class AuthorizationComponent implements OnInit {
  client_Id = '0346a39ad40a405395f08edf3b1c5def';
  // redirect_url = 'http://localhost:4200/angular/spotify/authorised';
  redirect_url = 'https://ana-portfolio.web.app/angular/spotify/authorised';
  
  constructor() { }

  ngOnInit(): void {
  }

}
