import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LujainsAdminComponent } from './lujains-admin.component';

describe('LujainsAdminComponent', () => {
  let component: LujainsAdminComponent;
  let fixture: ComponentFixture<LujainsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LujainsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LujainsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
