import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MonitorLoaderService {
  loaded = false;

  constructor() { }

  loadMonitorScript(): void {
    if (this.loaded) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'assets/monitor-es5.js';
    document.body.appendChild(script);
    this.loaded = true;
  }

  addMonitorApp(): void {
    const tile = document.createElement('monitor-app');
    tile.setAttribute('title', 'Dynamic Load Monitor');

    const content = document.getElementById('content');
    content.appendChild(tile);
  }
}
