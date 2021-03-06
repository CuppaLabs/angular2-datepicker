import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerModule } from './angular2-datepicker/datepicker.module';
import { AdsenseComponent } from './adsense.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent
      ],
  imports: [
    DatePickerModule,
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }