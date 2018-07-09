import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlRedirectionComponent } from './url-redirection/url-redirection.component';
import { UrlCreationFormComponent } from './url-creation-form/url-creation-form.component';
import { UrlListComponent } from './url-list/url-list.component';
import {UrlService} from './services/url.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UrlDeletionComponent } from './url-deletion/url-deletion.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlRedirectionComponent,
    UrlCreationFormComponent,
    UrlListComponent,
    PageNotFoundComponent,
    UrlDeletionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
