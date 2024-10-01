import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services29Component } from './services29.component';

describe('Services29Component', () => {
  let component: Services29Component;
  let fixture: ComponentFixture<Services29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Services29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Services29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
