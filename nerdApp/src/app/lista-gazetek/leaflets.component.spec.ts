import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletsComponent } from './leaflets.component';

describe('ListaGazetekComponent', () => {
  let component: LeafletsComponent;
  let fixture: ComponentFixture<LeafletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeafletsComponent]
    });
    fixture = TestBed.createComponent(LeafletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
