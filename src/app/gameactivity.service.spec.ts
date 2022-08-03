import { TestBed } from '@angular/core/testing';

import { GameactivityService } from './gameactivity.service';

describe('GameactivityService', () => {
  let service: GameactivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameactivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
