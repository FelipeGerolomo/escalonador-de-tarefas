import { Component, OnInit } from '@angular/core';
import { TaskSchedulerService } from '../../services/task-scheduler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  id: any;
  task_name: any;
  time: any;
  priority: any;
  tasks: any;

  disabled: any;

  constructor(private router: Router, private taskService: TaskSchedulerService) {
    this.tasks = []
    this.id = 1;
    this.disabled = true;
    console.log(this.tasks);
  }

  execute() {
    this.router.navigateByUrl('execute')
  }


  insert() {
    this.taskService.tasks.push({
      id: this.id,
      task_name: this.task_name,
      time: this.time,
      priority: this.priority,
    })
    this.disabled = false;
    this.id++;
    this.task_name = null;
    this.time = null;
    this.priority = null;
    console.log(this.taskService.tasks)
  }

  ngOnInit() {
  }

}
