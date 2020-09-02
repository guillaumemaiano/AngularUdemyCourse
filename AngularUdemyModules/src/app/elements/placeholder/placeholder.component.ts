import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {

  @Input() header: boolean;
  @Input() set lines(value: number) {
    console.log("Setting "+value);
    this._value = value;
    this._iterationArray = new Array(value);
  };

  constructor() { 
    this.header = true;
    this.lines = 3;
  }

  // all this is necessary because ngFor doesn't have a loop structure easily used...
  _value: number;
  _iterationArray: Array<number>;

  ngOnInit(): void {
  }

}
