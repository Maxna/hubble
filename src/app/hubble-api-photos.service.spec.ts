import { TestBed, inject } from '@angular/core/testing';

import { HubbleApiPhotosService } from './hubble-api-photos.service';

describe('HubbleApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HubbleApiPhotosService]
    });
  });

  it('should be created', inject([HubbleApiPhotosService], (service: HubbleApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
