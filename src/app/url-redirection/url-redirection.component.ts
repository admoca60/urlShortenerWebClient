import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';
import {ResponseWrapperUrlDTO} from '../model/response-wrapper-url-dto';

@Component({
  selector: 'app-url-redirection',
  templateUrl: './url-redirection.component.html',
  styleUrls: ['./url-redirection.component.css']
})
export class UrlRedirectionComponent implements OnInit {
public errorCode:number;
public errorMessage:string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private urlService: UrlService) {
    }

  ngOnInit() {
    var hashParam :string = this.route.snapshot.paramMap.get('hashCode');

    var urlDTO:UrlDTO;


    this.urlService.getUrlBackend(hashParam).subscribe(responseWrapperDTO=>
        {
            if(responseWrapperDTO.status){
            urlDTO = responseWrapperDTO.data;
            this.errorCode=null;
            this.errorMessage=null;

            if(urlDTO){
              console.log("La url a la que se va a navegar es "+urlDTO.urlLong);
              window.location.href=urlDTO.urlLong;
            }

          }else{
            this.errorCode = responseWrapperDTO.errorDesc.errorCode;
            this.errorMessage = responseWrapperDTO.errorDesc.errorDesc;
          }
        }
      );




  }

}
