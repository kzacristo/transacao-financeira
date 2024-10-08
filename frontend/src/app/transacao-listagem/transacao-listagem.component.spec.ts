import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacaoListagemComponent } from './transacao-listagem.component';

describe('TransacaoListagemComponent', () => {
  let component: TransacaoListagemComponent;
  let fixture: ComponentFixture<TransacaoListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransacaoListagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransacaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
