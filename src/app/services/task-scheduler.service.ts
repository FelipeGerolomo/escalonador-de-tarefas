import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskSchedulerService {
  tasks: any;

  task_pending: any;
  task_executed: any;

  algoritimo = 'PRIO';

  constructor() {
    this.tasks = [];
    this.task_pending = [];
    this.task_executed = [];
    this.getDefaultTasks();
  }

  getDefaultTasks() {
    this.tasks = this.priorityTasks;
  }

  priorityTasks = [
    { id: 1, task_name: "Tarefa 1", time: 1, priority: 1 },
    { id: 2, task_name: "Tarefa 2", time: 2, priority: 10 },
    { id: 3, task_name: "Tarefa 3", time: 3, priority: 13 },
    { id: 4, task_name: "Tarefa 4", time: 4, priority: 9 },
    { id: 5, task_name: "Tarefa 1", time: 2, priority: 1 },
  ]

  defaultTasks = [
    { id: 1, task_name: "Tarefa 1", time: 1, priority: 1 },
    { id: 2, task_name: "Tarefa 2", time: 2, priority: 2 },
    { id: 3, task_name: "Tarefa 3", time: 3, priority: 3 },
    { id: 4, task_name: "Tarefa 4", time: 4, priority: 4 },
    { id: 5, task_name: "Tarefa 5", time: 5, priority: 5 },
    { id: 6, task_name: "Tarefa 6", time: 6, priority: 6 },
    { id: 7, task_name: "Tarefa 7", time: 7, priority: 7 },
    { id: 8, task_name: "Tarefa 8", time: 8, priority: 8 },
    { id: 9, task_name: "Tarefa 9", time: 9, priority: 9 },
    { id: 10, task_name: "Tarefa 10", time: 10, priority: 10 }
  ]
}
