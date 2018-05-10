import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { TelescopeFormComponent } from './telescope-form/telescope-form.component';
import { ImagesListComponent } from './images-list/images-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TelescopeFormComponent,
    ImagesListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
