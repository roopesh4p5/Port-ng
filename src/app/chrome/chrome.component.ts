import { Component } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss']
})
export class ChromeComponent {
  isMobileScreen: any;
  constructor(public navbarService: AppService) {}

  ngOnInit(): void {
    this.isMobileScreen=this.navbarService.MobileScreen()
  }
}
