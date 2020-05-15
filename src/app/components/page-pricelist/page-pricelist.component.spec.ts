import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePricelistComponent } from './page-pricelist.component';

describe('PagePricelistComponent', () => {
  let component: PagePricelistComponent;
  let fixture: ComponentFixture<PagePricelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePricelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePricelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
