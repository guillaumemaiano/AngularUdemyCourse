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
    if (isNaN(parsedLength) || parsedLength <= 0) {
      this.password.desiredLength = 0;
    } else {
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
    this.password.value = this.generate();
    console.log('Super secure log: ' + this.password.value + ` with options ${this.options.useLetters}`);
  }

  shouldEnableButton() {
    return !(this.password.desiredLength != 0 && (this.options.useLetters || this.options.useNumbers || this.options.useSymbols));
  }

  // worst generator in the world
  private generate(): string {
    var generatedPassword = "";
    const someSymbols = "[|_]";
    const someLetters = "azerty";
    const someNumbers = "123";
    var validChars = "";

    if (this.options.useSymbols) {
     validChars += someSymbols;
    }
    if (this.options.useNumbers) {
      validChars += someNumbers;
     }
     if (this.options.useLetters) {
      validChars += someLetters;
     }
    for (var i = 0; i < this.password.desiredLength; i++) {

      // choose randomly within the acceptable values
      const index = Math.floor(Math.random() * validChars.length);
      if (index < validChars.length) {
          generatedPassword += validChars[index];
      }
    }
    return generatedPassword;// "1generatedPWD!"
  }
}
