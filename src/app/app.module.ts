import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
