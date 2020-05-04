import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoroplethmapComponent } from './choroplethmap.component';

describe('ChoroplethmapComponent', () => {
  let component: ChoroplethmapComponent;
  let fixture: ComponentFixture<ChoroplethmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoroplethmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoroplethmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
