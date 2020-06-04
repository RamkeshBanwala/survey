import { TestBed } from '@angular/core/testing';

import { AppPreBootstrapService } from './app-pre-boot.service';

describe('AppPreBootService', () => {
  let service: AppPreBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppPreBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
