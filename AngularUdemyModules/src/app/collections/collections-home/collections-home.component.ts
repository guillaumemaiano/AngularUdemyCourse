import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    { name: "Kennedy", killed: true, succession: 35, wearsHat: false }, // the famous non-hat-wearer: https://www.gentlemansgazette.com/president-john-f-kennedy/
    { name: "Lincoln", killed: true, succession: 16, wearsHat: true }, // the famous top hat
    { name: "Trump", killed: false, succession: 45, wearsHat: true } // the famous MAGA red cap... 
  ];
  headers = [
    { key: 'name', label: 'President' },
    { key: 'succession', label: "Order of Succession" },
    { key: 'killed', label: 'Assassinated while in Office' },
    { key: 'wearsHat', label: 'Often accessorized looks with a hat'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
