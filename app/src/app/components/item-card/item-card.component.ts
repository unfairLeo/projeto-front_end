import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agendamento } from '../../models/registro.model';

@Component({
  selector: 'app-item-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input({ required: true }) registro!: Agendamento;

  @Output() editar = new EventEmitter<Agendamento>();
  @Output() excluir = new EventEmitter<number>();
  @Output() alternarStatus = new EventEmitter<number>();

  classeStatus(): string {
    switch (this.registro.status) {
      case 'Pendente':
        return 'status-pendente';
      case 'Confirmado':
        return 'status-confirmado';
      case 'Concluído':
        return 'status-concluido';
      case 'Cancelado':
        return 'status-cancelado';
      default:
        return '';
    }
  }
}
