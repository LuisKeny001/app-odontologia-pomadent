import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClientesComponent } from './card-clientes.component';

describe('CardClientesComponent', () => {
  let component: CardClientesComponent;
  let fixture: ComponentFixture<CardClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardClientesComponent]
    });
    fixture = TestBed.createComponent(CardClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
