import { Component, OnInit} from '@angular/core';

import { UrlDTO} from '../model/url-dto';
import {AppSettings} from '../utils/app-settings';
import {UrlService} from '../services/url.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

urlList: UrlDTO[] =  [];
localUrlDomain: string = AppSettings.LOCAL_URL_DOMAIN;

  constructor(private urlService: UrlService) {
   }

  ngOnInit() {
    this.urlService.urlListCast.subscribe(urlList=> this.urlList = urlList);
  }


}
