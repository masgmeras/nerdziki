import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGazetekComponent } from './lista-gazetek.component';

describe('ListaGazetekComponent', () => {
  let component: ListaGazetekComponent;
  let fixture: ComponentFixture<ListaGazetekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGazetekComponent]
    });
    fixture = TestBed.createComponent(ListaGazetekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
