import { TestBed, inject } from '@angular/core/testing';

import { ListCardsService } from './list-cards.service';

describe('ListCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListCardsService]
    });
  });

  it('should be created', inject([ListCardsService], (service: ListCardsService) => {
    expect(service).toBeTruthy();
  }));
});
