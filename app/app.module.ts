import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { ApiService } from './shared/api.service';
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemCommentsComponent } from './components/product-item-comments/product-item-comments.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      }
    ])
  ],
  declarations: [ 
    AppComponent, 
    AuthComponent, 
    RegisterComponent, 
    LoginComponent, 
    ProductsComponent, 
    ProductItemCommentsComponent, 
    ProductItemComponent 
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }