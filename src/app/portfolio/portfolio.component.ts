import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
isMobileScreen: any;
  constructor(public navbarService: AppService) {}

  ngOnInit(): void {
    this.isMobileScreen=this.navbarService.MobileScreen()
  }
}
