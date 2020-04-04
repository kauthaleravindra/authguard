import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineFormEditComponent } from './inline-form-edit.component';

describe('InlineFormEditComponent', () => {
  let component: InlineFormEditComponent;
  let fixture: ComponentFixture<InlineFormEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineFormEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
