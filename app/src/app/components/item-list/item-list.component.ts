import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { Agendamento } from '../../models/registro.model';

@Component({
  selector: 'app-item-list',
  imports: [ItemCardComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  @Input() registros: Agendamento[] = [];

  @Output() editar = new EventEmitter<Agendamento>();
  @Output() excluir = new EventEmitter<number>();
  @Output() alternarStatus = new EventEmitter<number>();
}
