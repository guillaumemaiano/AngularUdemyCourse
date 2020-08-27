import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    this.generateNewGame();
  }

  THESAURUS = [
    "a", "body", "monkey", "part", "jumps", "wild", "shark", "the", "gun", "over", "moon", "I", "can't", "type", "that", "fast", 'won\'t'
  ];

  MAX_SIZE = 12;

  sentence = '';

  filledValue = "";


  onChangeSentence(content: string) {
    this.filledValue = content;
    if (content.length > this.sentence.length) {
      return;
    }
  };

  onButtonClick() {
    this.generateNewGame();

  };
  success(): boolean {
    if (this.filledValue.length > this.sentence.length) {
      return false;
    }
    if (this.filledValue == this.sentence) {
      return true;
    }
    return false;
  };

  private generateNewGame() {
    this.sentence = '';
    length = Math.ceil(Math.random() * this.MAX_SIZE);
    for (var iterator = 0; iterator < length; iterator++) {
      this.sentence += ` ${this.THESAURUS[Math.floor(Math.random()*this.THESAURUS.length)]}`;
    }
    this.sentence = this.sentence.trim();
  };

}
