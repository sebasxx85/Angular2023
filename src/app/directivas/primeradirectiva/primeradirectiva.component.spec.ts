import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeradirectivaComponent } from './primeradirectiva.component';

describe('PrimeradirectivaComponent', () => {
  let component: PrimeradirectivaComponent;
  let fixture: ComponentFixture<PrimeradirectivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeradirectivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeradirectivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
