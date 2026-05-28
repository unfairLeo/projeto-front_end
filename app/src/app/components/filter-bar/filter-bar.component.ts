import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StatusAgendamento } from '../../models/registro.model';

export interface FiltrosRegistros {
  texto: string;
  categoria: string;
  status: StatusAgendamento | 'Todos';
}

@Component({
  selector: 'app-filter-bar',
  imports: [FormsModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent {
  @Input() categorias: string[] = [];

  @Output() filtrosAlterados = new EventEmitter<FiltrosRegistros>();

  texto = '';
  categoria = 'Todas';
  status: StatusAgendamento | 'Todos' = 'Todos';

  statusOptions: Array<StatusAgendamento | 'Todos'> = [
    'Todos',
    'Pendente',
    'Confirmado',
    'Concluído',
    'Cancelado'
  ];

  emitirFiltros(): void {
    this.filtrosAlterados.emit({
      texto: this.texto,
      categoria: this.categoria,
      status: this.status
    });
  }

  limpar(): void {
    this.texto = '';
    this.categoria = 'Todas';
    this.status = 'Todos';
    this.emitirFiltros();
  }
}
