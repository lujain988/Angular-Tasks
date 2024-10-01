import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./Lujain/footer/footer.component";
import { HomeComponent } from "./Lujain/home/home.component";
import { NavBar29Component } from "./Lujain/nav-bar29/nav-bar29.component";
import { DetailsComponent } from "./Lujain/services29/details/details.component";
import { LectureComponent } from "./Lujain/services29/lecture/lecture.component";
import { Services29Component } from "./Lujain/services29/services29.component";
import { SubServicesComponent } from "./Lujain/services29/sub-services/sub-services.component";
import { FormsModule, NgForm } from '@angular/forms';
import { SubscribtionComponent } from "./Lujain/services29/subscribtion/subscribtion.component";
import { RegestrationUserComponent } from "./Lujain/regestration-user/regestration-user.component";
import { LoginUserComponent } from "./Lujain/login-user/login-user.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBar29Component,
    Services29Component,
    HomeComponent,
    FooterComponent,
    SubServicesComponent,
    DetailsComponent,
    LectureComponent,
    SubscribtionComponent,
    RegestrationUserComponent,
    LoginUserComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
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
        path: 'SubDetails/:id', component: DetailsComponent
      },
      {
        path: 'lecture', component: LectureComponent
      }
      ,  
      {
        path: 'Subscribtion', component: SubscribtionComponent
      },
      {
        path: 'registration', component: RegestrationUserComponent
      },
      {
        path: 'login', component: LoginUserComponent
      }
    ])
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
