import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyformComponent } from './udemyform.component';

describe('UdemyformComponent', () => {
  let component: UdemyformComponent;
  let fixture: ComponentFixture<UdemyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdemyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
