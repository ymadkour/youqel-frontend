import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropInformationComponent } from './drop-information.component';

describe('DropInformationComponent', () => {
  let component: DropInformationComponent;
  let fixture: ComponentFixture<DropInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
