import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAlgorithmComponent } from './choose-algorithm.component';

describe('ChooseAlgorithmComponent', () => {
  let component: ChooseAlgorithmComponent;
  let fixture: ComponentFixture<ChooseAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
