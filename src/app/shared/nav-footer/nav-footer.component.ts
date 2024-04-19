import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent {
  constructor(private router:Router){}
  activeIndex: number =1;

  setActive(index: number) {
    this.activeIndex = index;
    this.router.navigate(['./home'])
  }


}
