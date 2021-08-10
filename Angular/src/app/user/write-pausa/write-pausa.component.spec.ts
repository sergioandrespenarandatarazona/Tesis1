import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePausaComponent } from './write-pausa.component';

describe('WritePausaComponent', () => {
  let component: WritePausaComponent;
  let fixture: ComponentFixture<WritePausaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritePausaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePausaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
