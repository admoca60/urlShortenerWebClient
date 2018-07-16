import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlDTO} from '../model/url-dto';
import { Http, Response } from "@angular/http";
import {environment} from '../../environments/environment';

import {ResponseWrapperUrlDTO} from '../model/response-wrapper-url-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  localUrlDomain: string = environment.localDomainProtocol + "://"+environment.localDomainHost+":"+environment.localDomainPort+environment.localDomainContext;
  backendUrlDomain: string = environment.backendProtocol + "://"+environment.backendHost+":"+environment.backendPort+environment.backendContext+"url/";


  constructor(public httpClient:Http) {
  }

  public getUrlsBackend():Observable<ResponseWrapperUrlDTO> {
    return this.httpClient.get(this.backendUrlDomain).pipe(map((res:Response)=>res.json()));
  }

public getUrlBackend(hashCode:string):Observable<ResponseWrapperUrlDTO>{
  return this.httpClient.get(this.backendUrlDomain+hashCode).pipe(map((res:Response)=>res.json()));
}

public addUrlBackend(urlLong:string):Observable<ResponseWrapperUrlDTO>{
  var data2Send:UrlDTO = new UrlDTO(null,urlLong);
  return this.httpClient.post(this.backendUrlDomain+"add/",data2Send).pipe(map((res:Response)=>res.json()));
}


public deleteUrlBackend(hashCode:string):Observable<ResponseWrapperUrlDTO>{
  return this.httpClient.delete(this.backendUrlDomain+"delete/"+hashCode).pipe(map((res:Response)=>res.json()));
}











}
