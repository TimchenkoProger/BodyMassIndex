import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BMIComponent } from './bmi/bmi.component';
import { BmiComponent } from './components/bmi/bmi.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BMIComponent,
    BmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
