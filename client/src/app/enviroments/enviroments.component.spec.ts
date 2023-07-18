import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentsComponent } from './enviroments.component';

describe('EnviromentsComponent', () => {
  let component: EnviromentsComponent;
  let fixture: ComponentFixture<EnviromentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnviromentsComponent]
    });
    fixture = TestBed.createComponent(EnviromentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
