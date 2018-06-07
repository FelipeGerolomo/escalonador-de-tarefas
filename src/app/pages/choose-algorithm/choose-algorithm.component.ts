import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choose-algorithm',
  templateUrl: './choose-algorithm.component.html',
  styleUrls: ['./choose-algorithm.component.css']
})
export class ChooseAlgorithmComponent implements OnInit {

  constructor(private router: Router) { }

  goCreateTask() {
    this.router.navigateByUrl('task')
  }

  ngOnInit() {
  }

}
