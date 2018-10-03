import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ls-landing-rules',
  templateUrl: './searchRule.component.html'
})

export class LsSearchRuleComponent implements OnInit {
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
