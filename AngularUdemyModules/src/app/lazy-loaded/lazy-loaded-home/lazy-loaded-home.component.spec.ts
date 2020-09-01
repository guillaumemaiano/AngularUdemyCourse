import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedHomeComponent } from './lazy-loaded-home.component';

describe('LazyLoadedHomeComponent', () => {
  let component: LazyLoadedHomeComponent;
  let fixture: ComponentFixture<LazyLoadedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
