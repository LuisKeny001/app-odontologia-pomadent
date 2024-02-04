import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiosComponent } from './card-servios.component';

describe('CardServiosComponent', () => {
  let component: CardServiosComponent;
  let fixture: ComponentFixture<CardServiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardServiosComponent]
    });
    fixture = TestBed.createComponent(CardServiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
