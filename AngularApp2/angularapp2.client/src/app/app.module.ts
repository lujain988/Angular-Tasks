import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CategoriesComponent,
    ProductComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    ImageUploadComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "", component: HomeComponent, pathMatch: "full"
      },
      {
        path: "category", component: CategoriesComponent
      },
      {

        path: "Product", component: ProductComponent
      },
      {
        path: "about", component: AboutUsComponent
      },
      {
        path: "Contact-us", component: ContactUsComponent
      }
      ,
      {
        path: "image", component: ImageUploadComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
