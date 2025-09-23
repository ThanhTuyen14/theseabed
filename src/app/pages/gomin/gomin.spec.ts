import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gomin } from './gomin';

describe('Gomin', () => {
  let component: Gomin;
  let fixture: ComponentFixture<Gomin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gomin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gomin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
