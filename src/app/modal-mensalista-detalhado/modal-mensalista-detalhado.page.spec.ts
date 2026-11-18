import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMensalistaDetalhadoPage } from './modal-mensalista-detalhado.page';

describe('ModalMensalistaDetalhadoPage', () => {
  let component: ModalMensalistaDetalhadoPage;
  let fixture: ComponentFixture<ModalMensalistaDetalhadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMensalistaDetalhadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMensalistaDetalhadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
