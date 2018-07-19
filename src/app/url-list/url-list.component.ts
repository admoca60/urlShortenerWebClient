import { Component, OnInit,ViewChild} from '@angular/core';

import { UrlDTO} from '../model/url-dto';
import {environment} from '../../environments/environment';
import {UrlService} from '../services/url.service';
//import {EventService} from '../utils/event.service';
import {ResponseWrapperUrlDTO} from '../model/response-wrapper-url-dto';

import {MatTable} from '@angular/material';




@Component({
  selector: 'app-url-list',
  templateUrl: './url-list.component.html',
  styleUrls: ['./url-list.component.css']
})
export class UrlListComponent implements OnInit {

@ViewChild(MatTable) urlListTable: MatTable<UrlDTO>;

public urlList: UrlDTO[];
public displayedColumns: string[] = ['shortUrl', 'longUrl', 'actions'];

public errorMessage:string;
public successMessage:string;
public urlListEmpty:boolean;
public localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;

  constructor(private urlService: UrlService/*, private eventService: EventService*/) {
    this.urlListEmpty=true;
   }

  ngOnInit() {

    this.urlService.getUrlsBackend().subscribe(responseWrapperDTO=>
        {
            if(responseWrapperDTO.status){
              this.urlList = responseWrapperDTO.data;
              this.refreshUrlListEmpty();
            }else{
              this.errorMessage = "Error code:"+responseWrapperDTO.errorDesc.errorCode+", "+
                          "Error message:"+responseWrapperDTO.errorDesc.errorDesc;
            }
        },error=>{
          this.errorMessage = "Error processing the request against the server";
        }
      );

      // this.eventService.getEvent("createUrl").subscribe(event=>{
      //   this.urlList.push(event.value);
      // });
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
            this.refreshUrlListEmpty();
            this.urlListTable.renderRows();
          }else{
            this.errorMessage = "Error code:"+responseWrapperDTO.errorDesc.errorCode+", "+
                        "Error message:"+responseWrapperDTO.errorDesc.errorDesc;
          }
      },error=>{
        this.errorMessage = "Error processing the request against the server";
      }
    );
}

  private refreshUrlListEmpty(){
    this.urlListEmpty = this.urlList.length==0;
  }
}
