import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardQaComponent } from './dashboard-qa.component';

describe('DashboardQaComponent', () => {
  let component: DashboardQaComponent;
  let fixture: ComponentFixture<DashboardQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardQaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
