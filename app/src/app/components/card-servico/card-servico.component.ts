import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Servico } from '../../models/servico.model';

@Component({
  selector: 'app-card-servico',
  imports: [CurrencyPipe],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent {
  @Input({ required: true }) servico!: Servico;
}
