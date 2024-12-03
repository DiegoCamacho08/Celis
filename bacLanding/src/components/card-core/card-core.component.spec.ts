import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCoreComponent } from './card-core.component';

describe('CardCoreComponent', () => {
  let component: CardCoreComponent;
  let fixture: ComponentFixture<CardCoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCoreComponent]
    });
    fixture = TestBed.createComponent(CardCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
