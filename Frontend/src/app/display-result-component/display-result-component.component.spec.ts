import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResultComponentComponent } from './display-result-component.component';

describe('DisplayResultComponentComponent', () => {
  let component: DisplayResultComponentComponent;
  let fixture: ComponentFixture<DisplayResultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayResultComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
