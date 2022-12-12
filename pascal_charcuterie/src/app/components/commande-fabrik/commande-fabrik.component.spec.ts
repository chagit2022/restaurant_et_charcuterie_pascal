import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeFabrikComponent } from './commande-fabrik.component';

describe('CommandeFabrikComponent', () => {
  let component: CommandeFabrikComponent;
  let fixture: ComponentFixture<CommandeFabrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeFabrikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeFabrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
