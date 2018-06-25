import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskSchedulerService } from '../../services/task-scheduler.service';


@Component({
  selector: 'app-choose-algorithm',
  templateUrl: './choose-algorithm.component.html',
  styleUrls: ['./choose-algorithm.component.css']
})
export class ChooseAlgorithmComponent implements OnInit {

  constructor(private taskService: TaskSchedulerService, private router: Router) { }

  goCreateTask() {
    this.router.navigateByUrl('task')
  }

  ngOnInit() {
  }

}
