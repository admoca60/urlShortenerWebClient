import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {UrlDTO} from '../model/url-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  //public urlList: UrlDTO[] =  [];
private urlList = new BehaviorSubject<UrlDTO[]>([]);
urlListCast = this.urlList.asObservable();

  constructor() { }

  /*getUrls(){
    //TODO fixme
    this.urlList = this.getFromLocalStorage() as UrlDTO[];
    if(!this.urlList){
      this.urlList = [];
    }
    return  this.urlList.next();
  }*/
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
  /*
  public urlList: UrlDTO[] =  [
  {hash:'1234',urlLong:'http://www.google.es'},
  {hash:'1267',urlLong:'http://www.google.com'},
  {hash:'12df',urlLong:'http://www.google.uk'},
];

  seq: number = 0;
  getUrls(){
    //TODO fixme
    return this.urlList;
  }
  addUrl(urlLong:string){
    //TODO fixme
    var urlDTOObj: UrlDTO = new UrlDTO('aa'+(this.seq++).toString(),urlLong);
    this.urlList.push(urlDTOObj);
    return urlDTOObj;
  }

  getUrl(hash:string){
    //TODO fixme
    var indexUrl = -1;
    this.urlList.forEach( (item, index) =>{
      if(item.hash===hash){
        indexUrl = index;
      }
    })
    if(indexUrl!=-1){
      return this.urlList[indexUrl];
    }else{
      return null;
    }

  }
  deleteUrl(hash:string){
    //TODO fixme
    this.urlList.forEach( (item, index) =>{
      if(item.hash===hash){
        this.urlList.splice(index,1);
      }
    })
  }*/

  private getFromLocalStorage(){
    return JSON.parse(localStorage.getItem('urlListLS'));
  }
  private setToLocalStorage(urlList:UrlDTO[]){
    localStorage.setItem('urlListLS',JSON.stringify(urlList));
  }
}
