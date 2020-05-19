import { MonitorLoaderService } from './../../monitor.service';
import { Component, OnInit } from '@angular/core';
// import '../../../assets/monitor-es5.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private monitorService: MonitorLoaderService) { }

  ngOnInit() {
    this.monitorService.loadMonitorScript();
    this.monitorService.addMonitorApp();
  }

}
