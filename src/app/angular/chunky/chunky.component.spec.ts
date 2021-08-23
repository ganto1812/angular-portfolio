import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkyComponent } from './chunky.component';

describe('ChunkyComponent', () => {
  let component: ChunkyComponent;
  let fixture: ComponentFixture<ChunkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChunkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
