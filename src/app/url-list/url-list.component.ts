import { Component, OnInit} from '@angular/core';

import { UrlDTO} from '../model/url-dto';
import {environment} from '../../environments/environment';
import {UrlService} from '../services/url.service';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

urlList: UrlDTO[] =  [];
localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;

  constructor(private urlService: UrlService) {
   }

  ngOnInit() {
    this.urlService.urlListCast.subscribe(urlList=> this.urlList = urlList);
  }

deleteUrl(hash:string){
  console.log('invocado servicio para eliminar la url '+hash);
  this.urlService.deleteUrl(hash);
}

}
