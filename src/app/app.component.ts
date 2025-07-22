import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from './component/display/display.component';
import { ButtonComponent } from './component/button/button.component';

@Component({
  selector: 'app-root',
  imports: [DisplayComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'counter-with-subject';
}
