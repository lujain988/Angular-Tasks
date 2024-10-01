import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestrationUserComponent } from './regestration-user.component';

describe('RegestrationUserComponent', () => {
  let component: RegestrationUserComponent;
  let fixture: ComponentFixture<RegestrationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegestrationUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegestrationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
