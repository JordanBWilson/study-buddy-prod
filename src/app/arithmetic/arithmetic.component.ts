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
  public currentAnswer = 0;
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

    this.getCurrentAnswer();

  }

  getCurrentAnswer() {

    this.currentAnswer = 0;

    for (let i = 0; i < this.currentProblem.length; i++) {

      if (this.currentTypeProblem === '+' ) {

        this.currentAnswer += this.currentProblem[i];
      }
      if (this.currentTypeProblem === '-' ) {

        if (i === 0) {

          this.currentAnswer = this.currentProblem[i];
        } else {

          this.currentAnswer -= this.currentProblem[i];
        }
      }

    }

    console.log(this.currentAnswer);
  }

}
