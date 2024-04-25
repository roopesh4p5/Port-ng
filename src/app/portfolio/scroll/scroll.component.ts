import { Component, OnInit } from '@angular/core';
const TAGS = [
  "HTML", "CSS",'bootstrap',"SASS","SCSS", "JavaScript", "Typescript", "Tailwind", "Angular", "Node.js",
  "Rxjs", "UI/UX", "SVG", "Responsive ","python","git","JSON", "Ubuntu", "Linux", "ChartJS", "MaterialUI", "Angular", "Node.js",
  "Rxjs", "UI/UX", "SVG", "Responsive ", "webdev","python","git"
];
const DURATION = 80000;
const ROWS = 5;
const TAGS_PER_ROW = 56;

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent  implements OnInit {
  rows: any = [];

  constructor() { }

  ngOnInit(): void {
    this.generateRows();
  }

  generateRows(): void {
    for (let i = 0; i < ROWS; i++) {
      const tags = this.shuffle(TAGS).slice(0, TAGS_PER_ROW);
      const duration = this.random(DURATION - 5000, DURATION + 5000);
      const reverse = i % 2 === 0;
      this.rows.push(tags);
    }
  }

  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => 0.5 - Math.random());
  }

  getRowStyle(index: number): string {
    const duration = this.random(DURATION - 5000, DURATION + 5000);
    const reverse = index % 2 === 0;
    return `--duration: ${duration}ms; --direction: ${reverse ? 'reverse' : 'normal'};`;
  }
}
