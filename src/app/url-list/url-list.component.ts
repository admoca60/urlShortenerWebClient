import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import { UrlDTO} from '../model/url-dto';
import {AppSettings} from '../utils/app-settings';
import {UrlService} from '../services/url.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit, OnChanges {

urlList: UrlDTO[] =  [];
localUrlDomain: string = AppSettings.LOCAL_URL_DOMAIN;

  constructor(private urlService: UrlService) { }

  ngOnInit() {
    this.urlList = this.urlService.getUrls();
  }

  ngOnChanges(changes: SimpleChanges){
    this.urlList = this.urlService.getUrls();
  }

}
