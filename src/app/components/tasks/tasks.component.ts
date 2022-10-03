import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task";
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // Subscribe to an observable so you can constantly watch it, like a promise
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter( t=> t.id !== task.id)))
  }

  toggleReminder(task: Task){
    // Set it to the opposite of whatever it is currently
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }



}
