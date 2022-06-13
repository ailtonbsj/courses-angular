import { TestBed } from '@angular/core/testing';

import { ServicoSingletonService } from './servico-singleton.service';

describe('ServicoSingletonService', () => {
  let service: ServicoSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
