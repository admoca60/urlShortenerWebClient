import { Component, OnInit } from '@angular/core';
import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';

@Component({
  selector: 'app-url-creation-form',
  templateUrl: './url-creation-form.component.html',
  styleUrls: ['./url-creation-form.component.css']
})
export class UrlCreationFormComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  ngOnInit() {
  }

  addNewUrl(newUrl: string) {
    if (newUrl) {
    /*  this.heroes.push(newHero);*/
    var urlDTO: UrlDTO = this.urlService.addUrl(newUrl);
    console.log("Se incluye nueva URL "+ newUrl + " con código hash "+urlDTO.hash);
    }
  }
}
