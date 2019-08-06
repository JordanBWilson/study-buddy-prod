import { Component, OnInit } from '@angular/core';

export interface MapItems {
  title: string;
  description: string;
  graphic: string;
  link: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public adventureChosen = false;
  public adventureName = '';
  public levelSelected = false;

  public chefMap: MapItems[];
  public gameDevMap: MapItems[];
  public musicMap: MapItems[];
  public sportsMap: MapItems[];

  constructor() { }

  ngOnInit() {

    this.chefMap = [
      {
        title: 'Secret Recipe',
        description: 'Chef Jacob Learns a Secret Recipe',
        graphic: '',
        link: ''
      },
      {
        title: 'Cooking Contest',
        description: 'Chef Jacob Puts His Skills and Taste To The Test',
        graphic: '',
        link: ''
      }
    ];

    this.gameDevMap = [
      {
        title: 'Player One',
        description: 'Sophia Completes Her First Real Video Game',
        graphic: '',
        link: ''
      },
      {
        title: 'Hackathon',
        description: 'Sophia Joins Her Friends To See Who Can Build The Best Game',
        graphic: '',
        link: ''
      }
    ];

    this.musicMap = [
      {
        title: 'Composer',
        description: 'Elijah Composes a Song',
        graphic: '',
        link: ''
      },
      {
        title: 'Music Ensemble',
        description: 'Elijah Performs His Song',
        graphic: '',
        link: ''
      }
    ];

    this.sportsMap = [
      {
        title: 'Track Star',
        description: 'Amelia Practices For Her Big Race',
        graphic: '',
        link: ''
      },
      {
        title: 'Try Outs',
        description: 'Amelia Wants To Join The Golf Team',
        graphic: '',
        link: ''
      }
    ];

  }

  newAdventure(event: string) {

    this.adventureName = event;
    setTimeout(() => {
      this.adventureChosen = true;
    }, 450); // this is the length of time the animation takes to complete

  }

}
