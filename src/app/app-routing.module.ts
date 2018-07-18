import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UrlRedirectionComponent} from './url-redirection/url-redirection.component';
import {UrlListComponent} from './url-list/url-list.component';
import {UrlCreationFormComponent}  from './url-creation-form/url-creation-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'list-url', component: UrlListComponent},
  {path: 'create-url',component: UrlCreationFormComponent  },
  {path: ':hashCode',component: UrlRedirectionComponent},
  {path: '',redirectTo: '/create-url', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
