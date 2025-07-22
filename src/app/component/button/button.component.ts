import { Component } from '@angular/core';
import { CounterService } from '../../serives/counter.service';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  constructor(private counterService: CounterService) {}

  inc() {
    this.counterService.increment();
  }

  dec() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
