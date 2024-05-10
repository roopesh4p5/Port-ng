import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss']
})
export class ChromeComponent implements OnInit, OnDestroy {
  currentTime: any;
  intervalId: any;

  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes}:${seconds}`;
  }
  searchGoogle(query: string) {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
  
}
