import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatineComponent } from './chocolatine.component';

describe('ChocolatineComponent', () => {
  let component: ChocolatineComponent;
  let fixture: ComponentFixture<ChocolatineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocolatineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolatineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
