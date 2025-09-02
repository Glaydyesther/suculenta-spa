import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesType } from './services-type';

describe('ServicesType', () => {
  let component: ServicesType;
  let fixture: ComponentFixture<ServicesType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
