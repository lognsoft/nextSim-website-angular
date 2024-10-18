import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSearchImoveisComponent } from './custom-search-imoveis.component';

describe('CustomSearchImoveisComponent', () => {
  let component: CustomSearchImoveisComponent;
  let fixture: ComponentFixture<CustomSearchImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSearchImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSearchImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
