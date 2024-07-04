import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { AppComponent } from './app.component';

describe('ServiceService', () => {
  let service:ServiceService;

  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
