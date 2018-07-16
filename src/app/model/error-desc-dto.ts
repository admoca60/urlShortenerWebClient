export class ErrorDescDTO {
    public errorCode:number;
    public errorDesc:string;

    constructor(errorCode,errorDesc){
      this.errorCode=errorCode;
      this.errorDesc= errorDesc;
    }
}
