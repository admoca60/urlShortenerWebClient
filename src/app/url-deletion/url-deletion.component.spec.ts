import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDeletionComponent } from './url-deletion.component';

describe('UrlDeletionComponent', () => {
  let component: UrlDeletionComponent;
  let fixture: ComponentFixture<UrlDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
