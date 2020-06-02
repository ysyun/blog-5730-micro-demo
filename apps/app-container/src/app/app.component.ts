import { LazyLoaderService } from './lazy-loader.service';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isCollapsed = false;
    @ViewChild('InnerContent', { read: ViewContainerRef }) innerContent: ViewContainerRef;

    constructor(private readonly lazyLoaderServie: LazyLoaderService) {}

    manualLazyLoading(event: MouseEvent): void {
        const manualLoad = () => import('@micro-demo/manuallazy').then((m) => m.ManuallazyModule);
        this.lazyLoaderServie.loadModule(manualLoad, this.innerContent);
    }
}
