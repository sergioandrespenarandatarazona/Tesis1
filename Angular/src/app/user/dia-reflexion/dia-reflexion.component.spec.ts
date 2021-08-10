import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaReflexionComponent } from './dia-reflexion.component';

describe('DiaReflexionComponent', () => {
  let component: DiaReflexionComponent;
  let fixture: ComponentFixture<DiaReflexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaReflexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaReflexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
