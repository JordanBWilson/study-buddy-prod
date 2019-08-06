import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adventure-modal',
  templateUrl: './adventure-modal.component.html',
  styleUrls: ['./adventure-modal.component.scss']
})
export class AdventureModalComponent implements OnInit {

  constructor() { }

  @Output() selectedAdventureEmit = new EventEmitter();
  public selectedAdventure = '';
  public displaySelection: string;
  public adventureSelected = false;

  ngOnInit() {

  }

  selectAdventureFinal() {

    this.selectedAdventureEmit.emit(this.selectedAdventure);
    this.adventureSelected = true;
  }

  selectAdventure(adventure: string) {

    if (adventure === 'chef') {

      this.selectedAdventure = 'chef';
      this.displaySelection = 'Chef';

    } else if (adventure === 'game-dev') {

      this.selectedAdventure = 'game-dev';
      this.displaySelection = 'Game Developer';

    } else if (adventure === 'music') {

      this.selectedAdventure = 'music';
      this.displaySelection = 'Musician';

    } else if (adventure === 'sports') {

      this.selectedAdventure = 'sports';
      this.displaySelection = 'Athlete';
    }

  }



}
