import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage= 0;
  getPinned() {
    // the only page that doesn't "exist" is a negative number one... so let's make one
    this.currentPage = -1;
  };
  // simulate pinning functionality
  hasPinned(): boolean { return true};
  jobs = [
    {
      company: "BIG CORP SAS",
      url:'https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
      date: ''
    },
    {
      company: "COFFEE SHOP SLTD",
      url:'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
      date: ''
    },
    {
      company: "SMALL STARTUP CO",
      url:'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80',
      date: ''
    },
    {
      company: "BIG OIL SS",
      url:'https://images.unsplash.com/photo-1562237553-fd52cb2067b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
      date: ''
    }
  ];
}
