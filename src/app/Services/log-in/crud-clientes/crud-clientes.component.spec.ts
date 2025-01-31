import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDClientesComponent } from './crud-clientes.component';

describe('CRUDClientesComponent', () => {
  let component: CRUDClientesComponent;
  let fixture: ComponentFixture<CRUDClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CRUDClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRUDClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
