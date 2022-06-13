import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Irmao1Component } from './irmao1.component';

describe('Irmao1Component', () => {
  let component: Irmao1Component;
  let fixture: ComponentFixture<Irmao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Irmao1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Irmao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
