import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { RestService } from './shared/rest.service';
import { AppComponent } from './components/app.component';
import { ProductsComponent } from './components/products/products.component';
// import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProductsComponent ],
  providers: [ RestService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }