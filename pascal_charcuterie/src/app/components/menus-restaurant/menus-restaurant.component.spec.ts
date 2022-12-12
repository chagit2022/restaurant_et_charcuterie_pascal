import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusRestaurantComponent } from './menus-restaurant.component';

describe('MenusRestaurantComponent', () => {
  let component: MenusRestaurantComponent;
  let fixture: ComponentFixture<MenusRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
