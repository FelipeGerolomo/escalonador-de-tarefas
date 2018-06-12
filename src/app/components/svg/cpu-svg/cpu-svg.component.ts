import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpu-svg',
  templateUrl: './cpu-svg.component.html',
  styleUrls: ['./cpu-svg.component.css']
})
export class CpuSvgComponent implements OnInit {

  @Input('status') animation: any;

  constructor() {

  }

  ngOnInit() {
  }



}
