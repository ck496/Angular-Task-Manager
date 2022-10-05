import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  //Call this when we actually click the button
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask);
  }

  // header and add-task subscribe to this
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
