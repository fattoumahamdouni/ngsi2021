import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { backComponent } from './back.component';

describe('BackComponent', () => {
  let component: backComponent;
  let fixture: ComponentFixture<backComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ backComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(backComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
