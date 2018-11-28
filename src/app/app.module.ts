import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PakagesComponent } from './pakages/pakages.component';
import { RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    PakagesComponent,
    SingupComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",component: HomeComponent},
      {path:"signup",component: SingupComponent},
      {path:"login",component: LoginComponent},
      {path:"about",component: AboutComponent},
      {path:"pakages",component: PakagesComponent},
      {path:"contact",component: ContactComponent}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
