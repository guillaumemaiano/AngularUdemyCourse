import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: "City Scape",
      username: "concretemonkey",
      imageUrl: "free-stock-image.jpg",
      content: "this stock image is so cool it's even grey."
    },
    {
      title: "City Scape",
      username: "concretemonkey",
      imageUrl: "free-stock-image.jpg",
      content: "this stock image is so cool it's even grey."
    },
    {
      title: "City Scape",
      username: "concretemonkey",
      imageUrl: "free-stock-image.jpg",
      content: "this stock image is so cool it's even grey."
    },
  ];
}
