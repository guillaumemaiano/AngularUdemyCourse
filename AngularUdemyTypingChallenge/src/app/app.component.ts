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
// solution makes use of NPM's module "faker" with import {lorem} from faker. # Note to self
  THESAURUS = [
    "a", "body", "monkey", "part", "jumps", "wild", "shark", "the", "gun", "over", "moon", "I", "can't", "type", "that", "fast", 'won\'t'
  ];

  MAX_SIZE = 12;

  sentence = '';
  // displaySentence will be updated as a div containing "unknown", "correct" and "incorrect" elements later on
  displaySentence = '';

  filledValue = "";

  // simplified "separation of concerns" within two event handlers
  onInput(content: string) {
    if (content.length > this.sentence.length) {
      return;
    }
    // I'm choosing to put everything after the incorrect element as "incorrect" instead of only incorrect elemetns themselves
    var correct: string = "";
    var incorrect: string = "";
    var unknown: string = "";
    var fail = false;
    for (var iterator = 0; iterator < content.length; iterator++) {

      if (content[iterator] == this.sentence[iterator]) {
        if (!fail) {
          correct += content[iterator];
        } else {
          incorrect += content[iterator];
        }
      } else {
        fail = true;
        incorrect += content[iterator];
      }
    }
    unknown = this.sentence.slice(content.length);
    // I probably could improve using slice more
    this.displaySentence = `<span class='correct'>${correct}</span><span class='incorrect'>${incorrect}</span><span class='unknownValidity'>${unknown}</span>`;
  };

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
    this.displaySentence = `<div class='unknownValidity'>${this.sentence}</div>`;
  };

}
