import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  date: string;
  money: string;

  onDateChange(dateFieldText:string) {
    this.date = dateFieldText;
  }
  onNameChange(nameFieldText:string) {
    this.name = nameFieldText;
  }
  onMoneyChange(moneyFieldText:string) {
    this.money = moneyFieldText;
  }
}
