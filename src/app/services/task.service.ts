import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Task} from "../Task";
import {TASKS} from "../mock-tasks";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    //need to append task id at the end of ApiUrl to delete
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task>{
    //need to append task id at the end of ApiUrl to delete
    const url = `${this.apiUrl}/${task.id}`;

    //Sending data so want to send headers with the content type
    return this.http.put<Task>(url, task, httpOptions)

  }

  addTask(task: Task): Observable<Task>{
    // Jason-server configures task id for you
    //Sending data so want to send headers with the content type
    return this.http.post<Task>(this.apiUrl, task, httpOptions)

  }


}
