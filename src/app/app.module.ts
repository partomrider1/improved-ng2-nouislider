import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SplitPipe } from './split-pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SplitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
