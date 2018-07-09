import { Component, OnInit} from '@angular/core';

import { UrlDTO} from '../model/url-dto';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {
  public urlList: UrlDTO[] =  [
    {hash:'aaaa',urlLong:'http://www.google.es'},
    {hash:'aabb',urlLong:'http://www.google.uk'},
    {hash:'aacc',urlLong:'http://www.google.mx'}
  ];

public localUrlDomain: string = 'http://localhost:4200/';

  constructor() { }

  ngOnInit() {
  }

}
