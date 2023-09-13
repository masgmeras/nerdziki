import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodoComponent } from './rodo.component';

describe('RodoComponent', () => {
  let component: RodoComponent;
  let fixture: ComponentFixture<RodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RodoComponent]
    });
    fixture = TestBed.createComponent(RodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
