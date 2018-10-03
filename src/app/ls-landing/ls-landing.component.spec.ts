import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsLandingComponent } from './ls-landing.component';

describe('NjBuscadorComponent', () => {
  let component: LsLandingComponent;
  let fixture: ComponentFixture<LsLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LsLandingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
