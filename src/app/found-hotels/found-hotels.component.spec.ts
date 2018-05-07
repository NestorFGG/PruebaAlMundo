import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundHotelsComponent } from './found-hotels.component';

describe('FoundHotelsComponent', () => {
  let component: FoundHotelsComponent;
  let fixture: ComponentFixture<FoundHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
