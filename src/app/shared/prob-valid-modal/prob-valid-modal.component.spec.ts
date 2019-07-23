import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbValidModalComponent } from './prob-valid-modal.component';

describe('ProbValidModalComponent', () => {
  let component: ProbValidModalComponent;
  let fixture: ComponentFixture<ProbValidModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbValidModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbValidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
