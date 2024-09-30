import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar29Component } from './Lujain/nav-bar29/nav-bar29.component';
import { Services29Component } from './Lujain/services29/services29.component';
import { HomeComponent } from './Lujain/home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Lujain/footer/footer.component';
import { SubServicesComponent } from './Lujain/services29/sub-services/sub-services.component';
import { DetailsComponent } from './Lujain/services29/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar29Component,
    Services29Component,
    HomeComponent,
    FooterComponent,
    SubServicesComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, pathMatch: 'full'
      },
      {
        path: 'Services', component: Services29Component
      },
      {
        path: 'Details/:id', component: SubServicesComponent
      },
      {
        path: 'Details/SubDetails/:id', component: DetailsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
