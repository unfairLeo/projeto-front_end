/*
  dashboard-card.component.ts
  ---------------------------------------------------------------------------
  Componente reutilizável para exibir um indicador no Dashboard.

  Ele não calcula os dados. Apenas recebe informações prontas por @Input e
  mostra no HTML.

  Esse componente poderia ser usado para vários domínios:
  - total de produtos;
  - ferramentas disponíveis;
  - agendamentos pendentes;
  - despesas do mês;
  - chamados abertos;
  - tarefas concluídas.
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
  /*
    @Input({ required: true }) indica que o componente pai deve fornecer o valor.
    Se o pai esquecer, o Angular ajuda a identificar o problema durante o desenvolvimento.
  */
  @Input({ required: true }) titulo = '';
  @Input({ required: true }) valor: string | number = '';
  @Input() icone = '✂️';
  @Input() destaque: 'servicos' | 'agendamentos' | 'faturamento' | 'clientes' = 'servicos';

  /*
    Descrição é opcional. Por isso não está marcada como required.
  */
  @Input() descricao = '';
}
