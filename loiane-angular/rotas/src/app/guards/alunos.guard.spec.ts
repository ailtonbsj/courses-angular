import { TestBed } from '@angular/core/testing';

import { AlunosGuard } from './alunos.guard';

describe('AlunosGuard', () => {
  let guard: AlunosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
