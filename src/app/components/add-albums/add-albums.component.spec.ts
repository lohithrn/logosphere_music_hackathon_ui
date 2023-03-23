import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlbumsComponent } from './add-albums.component';

describe('AddAlbumsComponent', () => {
  let component: AddAlbumsComponent;
  let fixture: ComponentFixture<AddAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
