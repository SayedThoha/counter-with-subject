import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  subject = new BehaviorSubject(0);
  count$ = this.subject.asObservable();
  
  constructor() {}

  increment() {
    let currValue = this.subject.value;
    this.subject.next(currValue + 1);
  }

  decrement() {
    let currValue = this.subject.value;
    if (currValue > 0) {
      this.subject.next(currValue - 1);
    }
  }

  reset() {
    this.subject.next(0);
  }
}
