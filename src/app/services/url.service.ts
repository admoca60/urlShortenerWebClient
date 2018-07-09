import { Injectable } from '@angular/core';

import {UrlDTO} from '../model/url-dto';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public urlList: UrlDTO[] =  [];

  seq: number = 0;

  constructor() { }

  getUrls(){
    //TODO fixme
    this.urlList = this.getFromLocalStorage() as UrlDTO[];
    if(!this.urlList){
      this.urlList = [];
    }
    return  this.urlList;
  }
  addUrl(urlLong:string){
    //TODO fixme
    var urlDTOObj: UrlDTO = new UrlDTO('aa'+(this.seq++).toString(),urlLong);
    this.urlList = this.getFromLocalStorage() as UrlDTO[];
    if(!this.urlList){
      this.urlList = [];
    }
    this.urlList.push(urlDTOObj);
    this.setToLocalStorage(this.urlList);
    return urlDTOObj;
  }

  getUrl(hash:string){
    this.urlList = this.getFromLocalStorage() as UrlDTO[];
    if(!this.urlList){
      this.urlList = [];
    }
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
    this.urlList = this.getFromLocalStorage() as UrlDTO[];
    if(!this.urlList){
      this.urlList = [];
    }
    //TODO fixme
    this.urlList.forEach( (item, index) =>{
      if(item.hash===hash){
        this.urlList.splice(index,1);
      }
    })
    this.setToLocalStorage(this.urlList);
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
    return JSON.parse(localStorage.getItem('urlList'));
  }
  private setToLocalStorage(urlList:UrlDTO[]){
    localStorage.setItem('urlList',JSON.stringify(urlList));
  }
}
