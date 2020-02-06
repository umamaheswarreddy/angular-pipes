import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloComponent } from './hello/hello.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { VerbalPipe } from './pipes/verbal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    PipedemoComponent,
    VerbalPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
