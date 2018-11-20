import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCompNameComponent } from './new-comp-name.component';

describe('NewCompNameComponent', () => {
  let component: NewCompNameComponent;
  let fixture: ComponentFixture<NewCompNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCompNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCompNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
