import { Component, Input } from '@angular/core';

@Component({
  selector: 'micro-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() title = 'monitor';
}
