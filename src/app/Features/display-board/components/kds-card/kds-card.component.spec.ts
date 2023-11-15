/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KdsCardComponent } from './kds-card.component';

describe('KdsCardComponent', () => {
  let component: KdsCardComponent;
  let fixture: ComponentFixture<KdsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KdsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KdsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
