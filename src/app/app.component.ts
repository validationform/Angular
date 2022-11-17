import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
   
  firstNumber : number;
  secondNumber : number;
  result : number;
   

  addNumber(){

      this.result = this.firstNumber + this.secondNumber;
  }
}
