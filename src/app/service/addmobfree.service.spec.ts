import { TestBed } from '@angular/core/testing';

import { AddmobfreeService } from './addmobfree.service';

describe('AddmobfreeService', () => {
  let service: AddmobfreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmobfreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
