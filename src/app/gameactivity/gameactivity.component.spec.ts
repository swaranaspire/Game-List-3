import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameactivityComponent } from './gameactivity.component';

describe('GameactivityComponent', () => {
  let component: GameactivityComponent;
  let fixture: ComponentFixture<GameactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
