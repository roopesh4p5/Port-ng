import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ChromeComponent } from './chrome/chrome.component';

const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path : "home", component:ChromeComponent },
  { path: "", redirectTo: "portfolio", pathMatch: 'full' },
  { path: "**", component: PagenotfoundComponent } // Remove pathMatch: 'full'
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
