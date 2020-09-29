import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailreaderComponent } from './emailreader.component';

describe('EmailreaderComponent', () => {
  let component: EmailreaderComponent;
  let fixture: ComponentFixture<EmailreaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailreaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
