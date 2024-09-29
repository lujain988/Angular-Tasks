import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBar29Component } from './nav-bar29.component';

describe('NavBar29Component', () => {
  let component: NavBar29Component;
  let fixture: ComponentFixture<NavBar29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBar29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBar29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
