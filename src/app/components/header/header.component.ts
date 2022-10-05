import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker ';
  showAddTask: boolean;
  subscription: Subscription;

  // In order to use a service you have to add it to the constructor, now you can do `this.uiService` and use it
  constructor(private uiService: UiService) {
    // Value is the the showAddTask boolean thats passed into the subject in uiService
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
