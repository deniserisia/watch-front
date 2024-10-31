import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSuporteComponent } from './dashboard-suporte.component';

describe('DashboardSuporteComponent', () => {
  let component: DashboardSuporteComponent;
  let fixture: ComponentFixture<DashboardSuporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSuporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
