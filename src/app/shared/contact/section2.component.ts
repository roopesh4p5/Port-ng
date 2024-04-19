import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {
  isHovered: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isHovered = true;
    }, 1000);

    setTimeout(() => {
      this.isHovered = false;
    }, 3000);
  }
}