import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureModalComponent } from './adventure-modal.component';

describe('AdventureModalComponent', () => {
  let component: AdventureModalComponent;
  let fixture: ComponentFixture<AdventureModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdventureModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
