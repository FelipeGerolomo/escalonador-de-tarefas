import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-execute',
  templateUrl: './execute.component.html',
  styleUrls: ['./execute.component.css']
})
export class ExecuteComponent implements OnInit {
  gaugeType = "arch";
  gaugeValue = 28;
  gaugeLabel = "CPU";
  gaugeAppendText = "%";
  gaugeCap = "round";
  gaugeThick = "18";
  gaugeDuration = 500;
  gaugeForegroundColor = "rgb(116, 185, 255)";
  gaugeBackgroundColor = "rgba(0, 0, 0, 0.1)";
  constructor() { }


  changeValue() {
    this.gaugeValue = Math.floor((Math.random() * 100) + 1);
  }

  ngOnInit() {
  }

}
