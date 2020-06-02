import { MonitorLoaderService } from './../../monitor.service';
import { Component, OnInit } from '@angular/core';
// import '../../../assets/monitor-es5.js';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
    constructor(private monitorService: MonitorLoaderService) {}

    ngOnInit() {
        this.loadScript();
    }

    private async loadScript() {
        const src = 'assets/monitor-es5.js';
        this.monitorService.loadScript(src).then(
            () => {
                this.monitorService.addMonitorApp();
            },
            (error) => console.log('script load failed: ', src)
        );
    }
}
