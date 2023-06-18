import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsituteComponent } from './institute.component';

describe('InsituteComponent', () => {
  let component: InsituteComponent;
  let fixture: ComponentFixture<InsituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsituteComponent]
    });
    fixture = TestBed.createComponent(InsituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
