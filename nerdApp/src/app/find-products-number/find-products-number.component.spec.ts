import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProductsNumberComponent } from './find-products-number.component';

describe('FindProductsNumberComponent', () => {
  let component: FindProductsNumberComponent;
  let fixture: ComponentFixture<FindProductsNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindProductsNumberComponent]
    });
    fixture = TestBed.createComponent(FindProductsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
