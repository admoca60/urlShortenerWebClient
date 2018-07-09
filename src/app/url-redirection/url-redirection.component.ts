import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';

@Component({
  selector: 'app-url-redirection',
  templateUrl: './url-redirection.component.html',
  styleUrls: ['./url-redirection.component.css']
})
export class UrlRedirectionComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService) { }

  ngOnInit() {
    var hashParam :string = this.route.snapshot.paramMap.get('hash');

    var urlDTO = this.urlService.getUrl(hashParam);

    if(urlDTO){
      console.log("La url a la que se va a navegar es "+urlDTO.urlLong);
      window.location.href=urlDTO.urlLong;
    }
  }

}
