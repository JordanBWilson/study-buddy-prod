import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public adventureChosen = false;
  public adventureName = '';

  constructor() { }

  ngOnInit() {

  }

  newAdventure(event: string) {

    this.adventureName = event;
    setTimeout(() => {
      this.adventureChosen = true;
    }, 1450); // this is the length of time the animation takes to complete

  }

}
