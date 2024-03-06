import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanCitiesComponent } from './german-cities.component';

describe('GermanCitiesComponent', () => {
  let component: GermanCitiesComponent;
  let fixture: ComponentFixture<GermanCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GermanCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GermanCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
