import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHundredErrorComponent } from './four-hundred-error.component';

describe('FourHundredErrorComponent', () => {
  let component: FourHundredErrorComponent;
  let fixture: ComponentFixture<FourHundredErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourHundredErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourHundredErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
