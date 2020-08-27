import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sentence = 'I can\'t type that fast.';

  onChangeLength(content) {

  };

  onButtonClick() {

  };
  success(): boolean {
    return false;
  };

}
