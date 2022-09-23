import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { LocationComponent } from './location/location.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeSectionOneComponent } from './home-section-one/home-section-one.component';
import { HomeSectionTwoComponent } from './home-section-two/home-section-two.component';
import { HomeSectionThreeComponent } from './home-section-three/home-section-three.component';
import { HomeSectionFourComponent } from './home-section-four/home-section-four.component';
import { HomeSectionFiveComponent } from './home-section-five/home-section-five.component';
import { HomeSectionSixComponent } from './home-section-six/home-section-six.component';
import { HomeSectionSevenComponent } from './home-section-seven/home-section-seven.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    LocationComponent,
    NavigationComponent,
    NavbarComponent,
    HomeSectionOneComponent,
    HomeSectionTwoComponent,
    HomeSectionThreeComponent,
    HomeSectionFourComponent,
    HomeSectionFiveComponent,
    HomeSectionSixComponent,
    HomeSectionSevenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
