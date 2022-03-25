import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtstComponentComponent } from './firtst-component.component';

describe('FirtstComponentComponent', () => {
  let component: FirtstComponentComponent;
  let fixture: ComponentFixture<FirtstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirtstComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
