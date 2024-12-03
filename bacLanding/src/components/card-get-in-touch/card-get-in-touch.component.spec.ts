import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGetInTouchComponent } from './card-get-in-touch.component';

describe('CardGetInTouchComponent', () => {
  let component: CardGetInTouchComponent;
  let fixture: ComponentFixture<CardGetInTouchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGetInTouchComponent]
    });
    fixture = TestBed.createComponent(CardGetInTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
