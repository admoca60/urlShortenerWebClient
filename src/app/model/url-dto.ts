export class UrlDTO {
  public hash: string;
  public urlLong: string;

  constructor(hash, urlLong){
    this.hash = hash;
    this.urlLong = urlLong;
  }
}
