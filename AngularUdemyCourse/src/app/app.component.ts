import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = { useLetters: false, useSymbols: false, useNumbers: false};

  password = { value: "", desiredLength: 0};

  onChangeLength(value: string) {
    const parsedLength = parseInt(value);
    if (!isNaN(parsedLength)) {
      this.password.desiredLength = parsedLength;
    }
  }
  onChangeUseLetters() {
    this.options.useLetters = !this.options.useLetters;
  }
  onChangeUseSymbols() {
    this.options.useSymbols = !this.options.useSymbols;
  }
  onChangeUseNumbers() {
    this.options.useNumbers = !this.options.useNumbers;
  }

  onButtonClick() {
    this.password.value = "1generatedPWD!";
    console.log('Super secure log: ' + this.password.value + ` with options ${this.options.useLetters}`);
  }
}
