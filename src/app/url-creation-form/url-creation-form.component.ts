import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UrlService} from '../services/url.service';
import {UrlDTO} from '../model/url-dto';

@Component({
  selector: 'app-url-creation-form',
  templateUrl: './url-creation-form.component.html',
  styleUrls: ['./url-creation-form.component.css']
})
export class UrlCreationFormComponent implements OnInit {
  patronUrl:string="^((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&amp;=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&amp;=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&amp;;%@.\\w_]*)#?(?:[\\w]*))?)$";
  newUrlLongModel:string;
  constructor(private urlService: UrlService) { }

  ngOnInit() {
  }



  onFormSubmit(form: NgForm) {
     if (form.invalid) {
        return;
     }
    //alert('click boton. url '+this.newUrlLongModel);
    var urlDTO: UrlDTO = this.urlService.addUrl(this.newUrlLongModel);
    console.log("Se incluye nueva URL "+ this.newUrlLongModel + " con código hash "+urlDTO.hash);
     form.resetForm();
  }
}
