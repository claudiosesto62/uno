import { TestBed } from '@angular/core/testing';

import { XSFRInterceptor } from './xsfr.interceptor';

describe('XSFRInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XSFRInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XSFRInterceptor = TestBed.inject(XSFRInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
