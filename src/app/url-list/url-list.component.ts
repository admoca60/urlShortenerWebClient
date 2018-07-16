import { Component, OnInit} from '@angular/core';

import { UrlDTO} from '../model/url-dto';
import {environment} from '../../environments/environment';
import {UrlService} from '../services/url.service';
import {EventService} from '../utils/event.service';
import {ResponseWrapperUrlDTO} from '../model/response-wrapper-url-dto';

@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {



public urlList: UrlDTO[];
public errorMessage:string;
public errorCode:number;
public successMessage:string;
public localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;

  constructor(private urlService: UrlService, private eventService: EventService) {
   }

  ngOnInit() {

    this.urlService.getUrlsBackend().subscribe(responseWrapperDTO=>
        {
            if(responseWrapperDTO.status){
            this.urlList = responseWrapperDTO.data;
          }else{
            this.errorCode = responseWrapperDTO.errorDesc.errorCode;
            this.errorMessage = responseWrapperDTO.errorDesc.errorDesc;
          }
        }
      );

      this.eventService.getEvent("createUrl").subscribe(event=>{
        this.urlList.push(event.value);
      });
  }

deleteUrl(hashCode:string){
  this.urlService.deleteUrlBackend(hashCode).subscribe(responseWrapperDTO=>
      {
          if(responseWrapperDTO.status){
            var urlDTOLocal = responseWrapperDTO.data;

            this.urlList.forEach( (item, index) =>{
                if(item.hashCode===urlDTOLocal.hashCode){
                  this.urlList.splice(index,1);
                }
              })
            this.successMessage="Successful deletion of URL short  "+this.localUrlDomain+hashCode;
          }else{
            this.errorCode = responseWrapperDTO.errorDesc.errorCode;
            this.errorMessage = responseWrapperDTO.errorDesc.errorDesc;
          }
      }
    );
}

}
