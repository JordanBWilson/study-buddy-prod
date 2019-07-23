import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prob-valid-modal',
  templateUrl: './prob-valid-modal.component.html',
  styleUrls: ['./prob-valid-modal.component.scss']
})
export class ProbValidModalComponent implements OnInit {

  constructor() { }

  @Input() modalMessage: string;
  @Input() buttonLabel: string;
  @Input() isValid: boolean;
  @Input() buttonColor: string;

  ngOnInit() {
  }

}
