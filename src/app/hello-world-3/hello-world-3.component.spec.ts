import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorld3Component } from './hello-world-3.component';

describe('HelloWorld3Component', () => {
  let component: HelloWorld3Component;
  let fixture: ComponentFixture<HelloWorld3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloWorld3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorld3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
