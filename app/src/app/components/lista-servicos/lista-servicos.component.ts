import { Component, Input } from '@angular/core';
import { Servico } from '../../models/servico.model';
import { CardServicoComponent } from '../card-servico/card-servico.component';

@Component({
  selector: 'app-lista-servicos',
  imports: [CardServicoComponent],
  templateUrl: './lista-servicos.component.html',
  styleUrl: './lista-servicos.component.css'
})
export class ListaServicosComponent {
  @Input() servicos: Servico[] = [];
}
