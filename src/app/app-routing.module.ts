import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UrlRedirectionComponent} from './url-redirection/url-redirection.component';
import {UrlCreationFormComponent}  from './url-creation-form/url-creation-form.component';

const routes: Routes = [
  {   path: '',component: UrlCreationFormComponent  },
  {   path: ':url',component: UrlRedirectionComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
