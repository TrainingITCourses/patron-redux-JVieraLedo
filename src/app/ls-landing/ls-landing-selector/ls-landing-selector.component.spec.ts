/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsLandingSelectorComponent } from './ls-landing-selector.component';

describe('BuscadorCriteriosComponent', () => {
  let component: LsLandingSelectorComponent;
  let fixture: ComponentFixture<LsLandingSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsLandingSelectorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsLandingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
