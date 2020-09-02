import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterDividerComponent } from './better-divider.component';

describe('BetterDividerComponent', () => {
  let component: BetterDividerComponent;
  let fixture: ComponentFixture<BetterDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
