import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreVisuComponent } from './pre-visu.component';

describe('PreVisuComponent', () => {
  let component: PreVisuComponent;
  let fixture: ComponentFixture<PreVisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreVisuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreVisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
