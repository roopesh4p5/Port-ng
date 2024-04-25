import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    isSidebarOpen: boolean = false;
    constructor(private router:Router){}
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  
    activeIndex: number =1;
  
    setActive(index: number) {
      this.activeIndex = index;
      this.router.navigate(['./home'])
    }
}

