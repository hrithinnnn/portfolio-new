import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainViewComponent } from './plain-view.component';

describe('PlainViewComponent', () => {
  let component: PlainViewComponent;
  let fixture: ComponentFixture<PlainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
