import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailviewerComponent } from './emailviewer.component';

describe('EmailviewerComponent', () => {
  let component: EmailviewerComponent;
  let fixture: ComponentFixture<EmailviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
