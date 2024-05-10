import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { Section1Component } from './portfolio/section1/section1.component';
import { Section2Component } from './shared/contact/section2.component';
import { LandingComponent } from './portfolio/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './shared/popup/popup.component';
import { NavFooterComponent } from './shared/nav-footer/nav-footer.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './portfolio/education/education.component';
import { AboutComponent } from './portfolio/about/about.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './portfolio/scroll/scroll.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Section1Component,
    Section2Component,
    LandingComponent,
    PopupComponent,
    NavFooterComponent,
    PagenotfoundComponent,
    PortfolioComponent,
    EducationComponent,
    AboutComponent,
    ScrollComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
