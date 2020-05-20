import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NzLayoutModule, NzSelectModule, NzNotificationModule, NzButtonModule],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const monitorApp = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('monitor-app', monitorApp);
    // Usage: <monitor-app title="Monitor Application"></monitor-app>
  }
}
