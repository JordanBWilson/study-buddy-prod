import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adventure-modal',
  templateUrl: './adventure-modal.component.html',
  styleUrls: ['./adventure-modal.component.scss']
})
export class AdventureModalComponent implements OnInit {

  constructor() { }

  @Output() selectedAdventure = new EventEmitter();

  ngOnInit() {
  }

}
