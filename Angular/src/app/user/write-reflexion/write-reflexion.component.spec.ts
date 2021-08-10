import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReflexionComponent } from './write-reflexion.component';

describe('WriteReflexionComponent', () => {
  let component: WriteReflexionComponent;
  let fixture: ComponentFixture<WriteReflexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteReflexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReflexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
