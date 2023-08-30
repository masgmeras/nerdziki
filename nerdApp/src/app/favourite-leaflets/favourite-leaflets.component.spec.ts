import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteLeafletsComponent } from './favourite-leaflets.component';

describe('FavouriteLeafletsComponent', () => {
  let component: FavouriteLeafletsComponent;
  let fixture: ComponentFixture<FavouriteLeafletsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteLeafletsComponent]
    });
    fixture = TestBed.createComponent(FavouriteLeafletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
