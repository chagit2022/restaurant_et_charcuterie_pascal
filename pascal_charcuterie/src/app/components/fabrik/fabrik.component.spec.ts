import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabrikComponent } from './fabrik.component';

describe('FabrikComponent', () => {
  let component: FabrikComponent;
  let fixture: ComponentFixture<FabrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabrikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
