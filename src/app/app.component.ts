import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'sumpipe';

  title : string = `Angular (also referred to as "Angular 2+")[4] is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. Angular ecosystem consists of a diverse group of over 1.7 million developers, library authors, and content creators`

  courseObj = {
    title : `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore veritatis harum asperiores, fuga quae suscipit optio odit 
    error explicabo excepturi rem, non nihil id possimus blanditiis,
     corrupti officiis similique aut.`,
    students : 12345678,
    rating : 4.7589654,
    price : 199.99,
    releaseDate : new Date(2024, 2, 25)
  }
}
