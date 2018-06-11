import { Component, OnInit } from '@angular/core';
import { TaskSchedulerService } from '../../services/task-scheduler.service';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
export class ExecuteComponent implements OnInit {

  task_pending: any;
  task_executed: any;

  gaugeType = "arch";
  gaugeValue = 28;
  gaugeLabel = "CPU";
  gaugeAppendText = "%";
  gaugeCap = "round";
  gaugeThick = "18";
  gaugeDuration = 500;
  gaugeForegroundColor = "rgb(116, 185, 255)";
  gaugeBackgroundColor = "rgba(0, 0, 0, 0.1)";

  constructor(private taskService: TaskSchedulerService) {
    this.task_pending = [];
    this.task_executed = [];
    this.getTasks();
  }

  fifo() {
    for (let index = this.task_pending.length; index >= 0; index--) {
      this.task_pending
      console.log(this.task_pending[index])
    }
  }

  getTasks() {
    this.task_pending = this.taskService.tasks;
  }

  changeValue() {
    this.gaugeValue = Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit() {
  }

}
