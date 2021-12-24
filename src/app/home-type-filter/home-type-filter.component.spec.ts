import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTypeFilterComponent } from './home-type-filter.component';

describe('HomeTypeFilterComponent', () => {
  let component: HomeTypeFilterComponent;
  let fixture: ComponentFixture<HomeTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTypeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
