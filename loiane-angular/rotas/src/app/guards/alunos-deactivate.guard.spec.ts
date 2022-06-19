import { TestBed } from '@angular/core/testing';

import { AlunosDeactivateGuard } from './alunos-deactivate.guard';

describe('AlunosDeactivateGuard', () => {
  let guard: AlunosDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunosDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
