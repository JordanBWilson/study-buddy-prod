import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSelectModalComponent } from './level-select-modal.component';

describe('LevelSelectModalComponent', () => {
  let component: LevelSelectModalComponent;
  let fixture: ComponentFixture<LevelSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
