import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-url-creation-form',
  templateUrl: './url-creation-form.component.html',
  styleUrls: ['./url-creation-form.component.css']
})
export class UrlCreationFormComponent implements OnInit {
  patronUrl:string="^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&amp;=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&amp;=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&amp;;%@.\\w_]*)#?(?:[\\w]*))?)$";
  newUrlLongModel:string;

  public errorMessage:string;
  public errorCode:number;
  public newUrlShort:string;
  public localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;

  constructor(private urlService: UrlService) { }

  ngOnInit() {
  }



  onFormSubmit(form: NgForm) {
     if (form.invalid) {
        return;
     }
    //alert('click boton. url '+this.newUrlLongModel);
    var urlDTO: UrlDTO;

    this.urlService.addUrlBackend(this.newUrlLongModel).subscribe(responseWrapperDTO=>
        {
            if(responseWrapperDTO.status){
              urlDTO = responseWrapperDTO.data as UrlDTO;
              this.newUrlShort = this.localUrlDomain+urlDTO.hashCode;
              console.log("Se incluye nueva URL "+ this.newUrlLongModel + " con código hash "+urlDTO.hashCode);
              form.resetForm();
            }else{
              this.errorCode = responseWrapperDTO.errorDesc.errorCode;
              this.errorMessage = responseWrapperDTO.errorDesc.errorDesc;
            }
        }
      );




  }

  private resetTemporalValues(){
    this.errorCode=null;
    this.errorMessage=null;
    this.newUrlShort=null;
  }
}
