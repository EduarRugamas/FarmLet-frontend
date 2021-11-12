import { TestBed } from '@angular/core/testing';

import { FarmletServerService } from './farmlet-server.service';

describe('FarmletServerService', () => {
  let service: FarmletServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmletServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
