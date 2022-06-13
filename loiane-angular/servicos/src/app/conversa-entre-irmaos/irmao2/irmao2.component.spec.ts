import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Irmao2Component } from './irmao2.component';

describe('Irmao2Component', () => {
  let component: Irmao2Component;
  let fixture: ComponentFixture<Irmao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Irmao2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Irmao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
