import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BM1Component } from './bm1.component';

describe('BM1Component', () => {
  let component: BM1Component;
  let fixture: ComponentFixture<BM1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BM1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
