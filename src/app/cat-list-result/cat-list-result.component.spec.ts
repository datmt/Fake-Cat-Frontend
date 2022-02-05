import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListResultComponent } from './cat-list-result.component';

describe('CatListResultComponent', () => {
  let component: CatListResultComponent;
  let fixture: ComponentFixture<CatListResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatListResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
