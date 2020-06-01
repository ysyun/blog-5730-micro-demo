import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazypageComponent } from './lazypage.component';

describe('LazypageComponent', () => {
  let component: LazypageComponent;
  let fixture: ComponentFixture<LazypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
