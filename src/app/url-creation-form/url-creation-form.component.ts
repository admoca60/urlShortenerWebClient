import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-creation-form',
  templateUrl: './url-creation-form.component.html',
  styleUrls: ['./url-creation-form.component.css']
})
export class UrlCreationFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNewUrl(newUrl: string) {
    if (newUrl) {
    /*  this.heroes.push(newHero);*/
    console.log("Se incluye nueva URL "+ newUrl);
    }
  }
}
