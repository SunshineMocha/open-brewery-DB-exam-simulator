import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListComponent } from './brewery-list.component';

describe('BreweryListComponent', () => {
  let component: BreweryListComponent;
  let fixture: ComponentFixture<BreweryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreweryListComponent]
    });
    fixture = TestBed.createComponent(BreweryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
