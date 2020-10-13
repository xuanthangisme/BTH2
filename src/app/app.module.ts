import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BM1Component } from './bm1/bm1.component';
// import { BM2Component } from './bm2/bm2.component';
// import { B1Component } from './b1/b1.component';
// import { B2Component } from './b2/b2.component';
import { ProductComponent } from './bm2/product/product.component';
import { ManufacturerComponent } from './bm2/manufacturer/manufacturer.component';
import { HeaderComponent } from './b1/header/header.component';
import { MainComponent } from './b1/main/main.component';
import { FooterComponent } from './b1/footer/footer.component';
import { Header2Component } from './b2/header2/header2.component';
import { Main2Component } from './b2/main2/main2.component';
import { Footer2Component } from './b2/footer2/footer2.component';
// import { Bm2Component } from './product/bm2/bm2.component';
// import { ProductComponent } from './bm2/product/product.component';
// import { ManufacturerComponent } from './bm2/manufacturer/manufacturer.component';

@NgModule({
  declarations: [
    AppComponent,
    BM1Component,
    // BM2Component,
    // B1Component,
    // B2Component,
    ProductComponent,
    ManufacturerComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    Header2Component,
    Main2Component,
    Footer2Component,
    // Bm2Component,
    // ProductComponent,
    // ManufacturerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
