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
  task_running: any;

  console_status: any;
  console_text: any;
  animation: any;


  animationSVG: any;
  

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
    this.console_status = 'PARADO';
    this.console_text = ''
    this.animation = '';
    this.animationSVG = 'stopAnimation';
    this.getTasks();
  }

  fifo() {
    for (let index = 0; index < this.task_pending.length; index++) {
      this.removeFirst(index)
    }
  }

  removeFirst(i) {
    setTimeout(() => {
      this.task_running = this.task_pending.splice(0, 1);
      this.consoleRunning(this.task_running[0].task_name)
      this.executed(this.task_running[0])
    }, 500 * i);
  }

  executed(obj) {
    this.task_executed.push(obj)
  }

  consoleRunning(text) {
    if (this.task_pending.length > 0) {
      this.console_status = 'EXECUTANDO...';
      this.animation = 'blink-infinite';
      this.console_text = text;
      this.animationSVG = "infinite-animation";
    } else {
      this.console_status = 'PARADO';
      this.animation = '';
      this.console_text = "";
      this.animationSVG = "stopAnimation";
      console.log("executo")
    }

  }

  consoleStop() {

  }

  getTasks() {
    this.task_pending = this.taskService.tasks;
  }


  ngOnInit() {
  }

}
