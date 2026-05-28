/*
  dashboard.component.ts
  ---------------------------------------------------------------------------
  Página inicial da aplicação.

  Em Angular, uma página também é um componente. A diferença é conceitual:
  chamamos de "page" o componente que representa uma tela inteira acessada por rota.

  Esta página mostra indicadores calculados a partir dos registros cadastrados.
*/

import { Component, inject } from '@angular/core';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';
import { RegistrosService } from '../../services/registros.service';

@Component({
  selector: 'app-dashboard',

  /*
    Esta página usa o componente app-dashboard-card no HTML.
    Como o projeto usa standalone components, precisamos importar o componente aqui.
  */
  imports: [DashboardCardComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  /*
    inject() solicita uma dependência ao Angular.
    Aqui pedimos uma instância de RegistrosService para acessar os dados.
  */
  private registrosService = inject(RegistrosService);

  /*
    O resumo é calculado pelo service.
    Isso evita que a página tenha que saber detalhes da lista completa.
  */
  resumo = this.registrosService.getResumo();
  ticketMedio = this.resumo.total > 0 ? this.resumo.valorTotal / this.resumo.total : 0;

  valorFormatado(): string {
    /*
      Formata a soma de valores para moeda brasileira.
      Em um projeto maior, isso poderia ser feito com CurrencyPipe também.
    */
    return this.resumo.valorTotal.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  ticketMedioFormatado(): string {
    return this.ticketMedio.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }
}
