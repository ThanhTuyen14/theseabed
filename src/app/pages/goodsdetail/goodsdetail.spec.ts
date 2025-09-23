import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goodsdetail } from './goodsdetail';

describe('Goodsdetail', () => {
  let component: Goodsdetail;
  let fixture: ComponentFixture<Goodsdetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goodsdetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Goodsdetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
