/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnviarValorService } from './enviar-valor.service';

describe('Service: EnviarValor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnviarValorService]
    });
  });

  it('should ...', inject([EnviarValorService], (service: EnviarValorService) => {
    expect(service).toBeTruthy();
  }));
});
