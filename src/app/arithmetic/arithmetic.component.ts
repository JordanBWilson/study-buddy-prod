import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arithmetic',
  templateUrl: './arithmetic.component.html',
  styleUrls: ['./arithmetic.component.scss']
})
export class ArithmeticComponent implements OnInit {


  public upperRange = 10;
  public lowerRange = 1;
  public partsNumber = 2;
  public typeOfProblem = ['+', '-'];

  public currentProblem: Array<number>;
  public currentTypeProblem: string;
  public currentAnswer: number;
  public userAttempt: number;

  constructor() { }

  ngOnInit() {

    this.generateNextProblem();
  }

  generateNextProblem() {

    const problemContainer = [];

    for (let i = 0; i < this.partsNumber; i++) {

      const newNumber = Math.floor(Math.random() * this.upperRange) + this.lowerRange;
      problemContainer.push(newNumber);
    }

    const currentType = Math.floor(Math.random() * this.typeOfProblem.length);

    this.currentProblem = problemContainer;
    this.currentTypeProblem = this.typeOfProblem[currentType];

  }

  getCurrentAnswer() {

    for (let i = 0; i < this.currentProblem.length; i++) {

      if (this.currentTypeProblem === '+' ) {


      }
      if (this.currentTypeProblem === '-' ) {

        
      }
    }
  }

}
