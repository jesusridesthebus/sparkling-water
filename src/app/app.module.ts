import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WaterComponent } from './water/water.component';
import { NewWaterComponent } from './add-water/add-water.component';

@NgModule({
  declarations: [
    AppComponent,
    WaterComponent,
    NewWaterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
