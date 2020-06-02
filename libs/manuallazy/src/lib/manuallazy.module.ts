import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManualComponent } from './manual/manual.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ManualComponent],
})
export class ManuallazyModule {
    bootstrapComponent(): any {
        return ManualComponent;
    }
}
