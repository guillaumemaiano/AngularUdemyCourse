import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css']
})
export class ElementsHomeComponent implements OnInit {

  constructor() { }

  header = true;
  lines = 0;

  toggleHeader() {
    this.header = !this.header;
  }

  onInput(value: string) {
    const intValue = parseInt(value);
    if (!isNaN(intValue)) {
      this.lines = intValue;
    }
  }

  ngOnInit(): void {
  }

}
