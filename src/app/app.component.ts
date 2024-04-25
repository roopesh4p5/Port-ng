import { Component, HostListener } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isMobileScreen: any;
  constructor(public navbarService: AppService) {}

  ngOnInit(): void {
    this.isMobileScreen=this.navbarService.MobileScreen()
  }


}
