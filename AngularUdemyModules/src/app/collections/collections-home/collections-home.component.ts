import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: "Kennedy", killed: true, succession: 35 },
    { name: "Lincoln", killed: true, succession: 16 },
    { name: "Trump", killed: false, succession: 45 }
  ];
  headers = [
    { key: 'name', label: 'President' },
    { key: 'succession', label: "Order of Succession" },
    { key: 'killed', label: 'Assassinated while in Office' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
