/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsSearchRuleComponent } from './searchRule.component';

describe('BuscadorCriteriosComponent', () => {
  let component: LsSearchRuleComponent;
  let fixture: ComponentFixture<LsSearchRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsSearchRuleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsSearchRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
