import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazypageComponent } from './lazypage/lazypage.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: LazypageComponent }])],
    declarations: [LazypageComponent],
})
export class LazyviewModule {}
