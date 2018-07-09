import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlRedirectionComponent } from './url-redirection/url-redirection.component';
import { UrlCreationFormComponent } from './url-creation-form/url-creation-form.component';
import { UrlListComponent } from './url-list/url-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlRedirectionComponent,
    UrlCreationFormComponent,
    UrlListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
