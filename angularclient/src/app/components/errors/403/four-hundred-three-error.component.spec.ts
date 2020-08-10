import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourHundredThreeErrorComponent } from './four-hundred-three-error.component';

describe('FourHundredThreeErrorComponent', () => {
  let component: FourHundredThreeErrorComponent;
  let fixture: ComponentFixture<FourHundredThreeErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourHundredThreeErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourHundredThreeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
