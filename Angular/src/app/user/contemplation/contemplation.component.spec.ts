import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContemplationComponent } from './contemplation.component';

describe('ContemplationComponent', () => {
  let component: ContemplationComponent;
  let fixture: ComponentFixture<ContemplationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContemplationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContemplationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
