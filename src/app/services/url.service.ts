import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import {UrlDTO} from '../model/url-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  //public urlList: UrlDTO[] =  [];
private urlList;
urlListCast:Observable<UrlDTO[]>;

  constructor() {
    this.urlList = new BehaviorSubject<UrlDTO[]>(this.getUrls());
    this.urlListCast = this.urlList.asObservable();
  }

  private getUrls(){
    //TODO fixme
    let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
    if(!urlListLocal){
      urlListLocal = [];
    }
    return  urlListLocal;
  }
  addUrl(urlLong:string){
    let nextIdObj:string = localStorage.getItem('contador');
    let nextId:number = 0;
    if(nextIdObj){
      nextId=Number.parseInt(nextIdObj,10);

    }
    nextId++;
    //TODO fixme
    var urlDTOObj: UrlDTO = new UrlDTO('aa'+nextId.toString(),urlLong);
    localStorage.setItem('contador',nextId.toString());

    let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
    if(!urlListLocal){
      urlListLocal = [];
    }
    urlListLocal.push(urlDTOObj);
    this.setToLocalStorage(urlListLocal);
    this.urlList.next(urlListLocal);
    return urlDTOObj;
  }

  getUrl(hash:string){
    let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
    if(!urlListLocal){
      urlListLocal = [];
    }
    //TODO fixme
    var indexUrl = -1;
    urlListLocal.forEach( (item, index) =>{
      if(item.hash===hash){
        indexUrl = index;
      }
    })
    if(indexUrl!=-1){
      return urlListLocal[indexUrl];
    }else{
      return null;
    }

  }
  deleteUrl(hash:string){
    let urlListLocal = this.getFromLocalStorage() as UrlDTO[];
    if(!urlListLocal){
      urlListLocal = [];
    }
    //TODO fixme
    urlListLocal.forEach( (item, index) =>{
      if(item.hash===hash){
        urlListLocal.splice(index,1);
      }
    })
    this.setToLocalStorage(urlListLocal);
    this.urlList.next(urlListLocal);
  }


  private getFromLocalStorage(){
    return JSON.parse(localStorage.getItem('urlListLS'));
  }
  private setToLocalStorage(urlList:UrlDTO[]){
    localStorage.setItem('urlListLS',JSON.stringify(urlList));
  }
}
