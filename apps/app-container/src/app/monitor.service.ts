import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MonitorLoaderService {
    loaded = false;
    private loadedFiles = new Set<string>();

    constructor() {}

    loadMonitorScript(): void {
        if (this.loaded) {
            return;
        }

        const script = document.createElement('script');
        script.src = 'assets/monitor-es5.js';
        document.body.appendChild(script);
        this.loaded = true;
    }

    loadScript(src: string): Promise<void> {
        if (this.loadedFiles.has(src)) {
            return Promise.resolve();
        }

        return new Promise<void>((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                this.loadedFiles.add(src);
                resolve();
            };

            script.onerror = () => {
                reject();
            };

            document.body.appendChild(script);
        });
    }

    addMonitorApp(): void {
        const tile = document.createElement('monitor-app');
        tile.setAttribute('title', 'Dynamic Load Monitor');

        const content = document.getElementById('content');
        content.appendChild(tile);
    }
}
