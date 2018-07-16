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








  //public urlList: UrlDTO[] =  [];
// private urlList;
// urlListCast:Observable<UrlDTO[]>;

  constructor(public httpClient:Http) {
    // this.urlList = new BehaviorSubject<UrlDTO[]>(this.getUrls());
    // this.urlListCast = this.urlList.asObservable();
  }

  // private getUrls(){
  //   //TODO fixme
  //   let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
  //   if(!urlListLocal){
  //     urlListLocal = [];
  //   }
  //   return  urlListLocal;
  // }
  // addUrl(urlLong:string){
  //   let nextIdObj:string = localStorage.getItem('contador');
  //   let nextId:number = 0;
  //   if(nextIdObj){
  //     nextId=Number.parseInt(nextIdObj,10);
  //
  //   }
  //   nextId++;
  //   //TODO fixme
  //   var urlDTOObj: UrlDTO = new UrlDTO('aa'+nextId.toString(),urlLong);
  //   localStorage.setItem('contador',nextId.toString());
  //
  //   let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
  //   if(!urlListLocal){
  //     urlListLocal = [];
  //   }
  //   urlListLocal.push(urlDTOObj);
  //   this.setToLocalStorage(urlListLocal);
  //   this.urlList.next(urlListLocal);
  //   return urlDTOObj;
  // }

  // getUrl(hash:string){
  //   let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
  //   if(!urlListLocal){
  //     urlListLocal = [];
  //   }
  //   //TODO fixme
  //   var indexUrl = -1;
  //   urlListLocal.forEach( (item, index) =>{
  //     if(item.hashCode===hashCode){
  //       indexUrl = index;
  //     }
  //   })
  //   if(indexUrl!=-1){
  //     return urlListLocal[indexUrl];
  //   }else{
  //     return null;
  //   }
  //
  // }
  // deleteUrl(hash:string){
  //   let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
  //   if(!urlListLocal){
  //     urlListLocal = [];
  //   }
  //   //TODO fixme
  //   urlListLocal.forEach( (item, index) =>{
  //     if(item.hashCode===hashCode){
  //       urlListLocal.splice(index,1);
  //     }
  //   })
  //   this.setToLocalStorage(urlListLocal);
  //   this.urlList.next(urlListLocal);
  // }


  // private getFromLocalStorage(){
  //   return JSON.parse(localStorage.getItem('urlListLS'));
  // }
  // private setToLocalStorage(urlList:UrlDTO[]){
  //   localStorage.setItem('urlListLS',JSON.stringify(urlList));
  // }
}
