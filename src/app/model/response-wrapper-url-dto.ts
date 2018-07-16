import {ErrorDescDTO}  from './error-desc-dto';
import {UrlDTO} from './url-dto';


export class ResponseWrapperUrlDTO {
    status:boolean;
    errorDesc: ErrorDescDTO;
    data: any;

    constructor(status,errorDesc,data){
      this.status = status;
      this.errorDesc = errorDesc;
      this.data = data;
    }
}
