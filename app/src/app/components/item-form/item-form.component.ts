/*
  item-form.component.ts
  ---------------------------------------------------------------------------
  Componente de formulário usado para cadastrar e editar agendamentos.

  Responsabilidades:
  - controlar os campos digitados pelo usuário;
  - validar informações mínimas;
  - emitir um evento de salvar para a página pai;
  - preencher o formulário quando um agendamento for editado.
*/

import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Agendamento, AgendamentoFormData, StatusAgendamento, TipoServico } from '../../models/registro.model';

@Component({
  selector: 'app-item-form',
  imports: [FormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnChanges {
  @Input() registroEdicao: Agendamento | null = null;

  @Output() salvar = new EventEmitter<AgendamentoFormData>();
  @Output() cancelar = new EventEmitter<void>();

  statusOptions: StatusAgendamento[] = [
    'Pendente',
    'Confirmado',
    'Concluído',
    'Cancelado'
  ];

  servicoOptions: TipoServico[] = [
    'Corte',
    'Barba',
    'Alisamento',
    'Tratamento',
    'Limpeza',
    'Combo'
  ];

  form: AgendamentoFormData = this.criarFormularioVazio();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['registroEdicao']) {
      if (this.registroEdicao) {
        const { id: _id, ...dadosFormulario } = this.registroEdicao;
        this.form = { ...dadosFormulario };
      } else {
        this.form = this.criarFormularioVazio();
      }
    }
  }

  enviar(): void {
    if (!this.form.cliente.trim() || !this.form.telefone.trim()) {
      alert('Preencha pelo menos cliente e telefone.');
      return;
    }

    this.salvar.emit({
      ...this.form,
      cliente: this.form.cliente.trim(),
      telefone: this.form.telefone.trim(),
      profissional: this.form.profissional.trim(),
      valor: Number(this.form.valor) || 0
    });

    if (!this.registroEdicao) {
      this.form = this.criarFormularioVazio();
    }
  }

  cancelarEdicao(): void {
    this.form = this.criarFormularioVazio();
    this.cancelar.emit();
  }

  private criarFormularioVazio(): AgendamentoFormData {
    return {
      cliente: '',
      servico: 'Corte',
      profissional: '',
      dataHora: new Date().toISOString().slice(0, 16),
      status: 'Pendente',
      valor: 50,
      telefone: ''
    };
  }
}
