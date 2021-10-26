import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechDetailsComponent } from './components/tech-details/tech-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { FeaturesComponent } from './components/features/features.component';
import { FinishedComponent } from './components/finished/finished.component';

@NgModule({
  declarations: [
    AppComponent,
    TechDetailsComponent,
    ProductGridComponent,
    WarrantyComponent,
    FeaturesComponent,
    FinishedComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
