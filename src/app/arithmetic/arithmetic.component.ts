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
  public typeOfProblem = ['+', '-', 'x', '/'];

  public currentProblem: Array<number>;
  public currentTypeProblem: string;
  public currentAnswer = 0;
  public userAttempt = '';
  public displayCheckAnswerButton = false;
  public answerCorrect = false;
  public displayAnswerMessage = false;

  constructor() { }

  ngOnInit() {

    this.generateNextProblem();
  }

  generateNextProblem() {

    const problemContainer = [];
    this.userAttempt = '';

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

      if (this.currentTypeProblem === '+') {

        this.currentAnswer += this.currentProblem[i];
      }
      else if (this.currentTypeProblem === '-') {

        if (i === 0) {

          this.currentAnswer = this.currentProblem[i];
        } else {

          this.currentAnswer -= this.currentProblem[i];
        }
      } else if (this.currentTypeProblem === 'x') {

        if (i === 0) {

          this.currentAnswer = this.currentProblem[i];
        } else {

          this.currentAnswer *= this.currentProblem[i];
        }
      } else if (this.currentTypeProblem === '/') {

        if (i === 0) {

          this.currentAnswer = this.currentProblem[i];
        } else {

          this.currentAnswer /= this.currentProblem[i];
        }
      }

    }

    console.log(this.currentAnswer);
  }

  detectUserInput(event: string) {

    if (event !== '') {

      this.displayCheckAnswerButton = true;
    } else {

      this.displayCheckAnswerButton = false;
    }
  }

  checkAnswer() {

    const roundCurrentAnswer = this.currentAnswer.toFixed(2);

    console.log(roundCurrentAnswer);

    if (+this.userAttempt === +roundCurrentAnswer) {

      this.displayCheckAnswerButton = false;
      this.answerCorrect = true;
      this.displayAnswerMessage = true;
    } else {

      this.answerCorrect = false;
      this.displayAnswerMessage = true;
    }
  }

  closeDialog() {

    if (this.answerCorrect) {

      this.generateNextProblem();
    }

    this.answerCorrect = false;
    this.displayAnswerMessage = false;
  }

}
