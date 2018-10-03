import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ls-landing-selector',
  templateUrl: './ls-landing-selector.component.html'
})

export class LsLandingSelectorComponent implements OnInit {
  @Input() tittle: String;
  @Input() valueSelected: string;
  @Input() values: any[];
  @Output() public changeRule = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  changeValues() {
    this.changeRule.next(this.valueSelected);
  }
}
