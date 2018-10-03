import {Component, OnInit} from '@angular/core';
import {RDXStore, RDXSlideTypes} from '../stores/store.state';
import {ChangeTypeRule, ChangeTypeValue} from '../stores/store.actions';
import {Observable} from "rxjs/index";

@Component({
  selector: 'ls-landing',
  templateUrl: './ls-landing.component.html',
  styleUrls: ['./ls-landing.component.css']
})
export class LsLandingComponent implements OnInit {
  public titleValues = 'Type of search ';
  public titleRules = 'Values ';

  public typeRule$: Observable<any>;
  public typeSelector$: Observable<any>;
  public launches$: Observable<any>;


  constructor(public RDX: RDXStore) {

  }

  ngOnInit() {
    this.typeRule$ = this.RDX.selectSnapShot(RDXSlideTypes.typeRule);
  }

  changeTypeRule(index) {
    this.RDX.dispatch(new ChangeTypeRule(index));
    this.typeSelector$ = this.RDX.selectSnapShot(RDXSlideTypes.typeSelector);
  }

  changeValues(index) {
    this.RDX.dispatch(new ChangeTypeValue(index));
  }
}
