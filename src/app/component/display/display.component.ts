import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../serives/counter.service';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent implements OnInit {
  count = 0;
  constructor(private counterService: CounterService) {}
  ngOnInit(): void {
    this.getCount();
  }

  getCount() {
    this.counterService.count$.subscribe((value) => {
      this.count = value;
    });
  }
}
