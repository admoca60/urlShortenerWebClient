import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';
import {environment} from '../../environments/environment';
//import {EventService} from '../utils/event.service';

@Component({
  selector: 'app-url-creation-form',
  templateUrl: './url-creation-form.component.html',
  styleUrls: ['./url-creation-form.component.css']
})
export class UrlCreationFormComponent implements OnInit {
  patronUrl:string="^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&amp;=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&amp;=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&amp;;%@.\\w_]*)#?(?:[\\w]*))?)$";
  newUrlLongModel:string;

  public errorMessage:string;

  public newUrlShort:string;
  public localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;


  constructor(private urlService: UrlService/*, private eventService: EventService*/) {

   }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
     if (form.invalid) {
        return;
     }
    var urlDTO: UrlDTO;
    this.resetTemporalValues();
    this.urlService.addUrlBackend(this.newUrlLongModel).subscribe(responseWrapperDTO=>
        {
            if(responseWrapperDTO.status){
              urlDTO = responseWrapperDTO.data as UrlDTO;
              this.newUrlShort = this.localUrlDomain+urlDTO.hashCode;
              //this.eventService.broadcastEvent("createUrl",urlDTO);
              form.resetForm();
            }else{
              this.errorMessage = "Error code:"+responseWrapperDTO.errorDesc.errorCode+", "+
                          "Error message:"+responseWrapperDTO.errorDesc.errorDesc;
            }
        },error=>{
          this.errorMessage = "Error processing the request against the server";
        }
      );




  }

  private resetTemporalValues(){
    this.errorMessage=null;
    this.newUrlShort=null;
  }
}
