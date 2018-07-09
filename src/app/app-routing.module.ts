import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UrlRedirectionComponent} from './url-redirection/url-redirection.component';
import {UrlCreationFormComponent}  from './url-creation-form/url-creation-form.component';
import {UrlDeletionComponent} from './url-deletion/url-deletion.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {   path: '',component: UrlCreationFormComponent  },
  {   path: ':hash',component: UrlRedirectionComponent  },
  { path: 'delete/:hash', component: UrlDeletionComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }