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

public errorMessage:string;
public nextUrl:string;

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
            this.errorMessage=null;

            if(urlDTO){
              this.nextUrl = urlDTO.urlLong;

              window.location.href=  urlDTO.urlLong.startsWith("http://") || urlDTO.urlLong.startsWith("https://") ? urlDTO.urlLong : "http://" + urlDTO.urlLong;
            }

          }else{
            this.errorMessage = "Error code:"+responseWrapperDTO.errorDesc.errorCode+", "+
                        "Error message:"+responseWrapperDTO.errorDesc.errorDesc;
          }
        },error=>{
          this.errorMessage = "Error processing the request against the server";
        }
      );




  }

}
