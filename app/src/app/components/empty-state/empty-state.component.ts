/*
  empty-state.component.ts
  ---------------------------------------------------------------------------
  Componente para mostrar mensagem quando não há dados.

  Em sistemas reais, listas vazias precisam ser tratadas. Caso contrário,
  o usuário pode achar que a aplicação travou ou que ocorreu algum erro.
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.css'
})
export class EmptyStateComponent {
  /*
    Mensagens configuráveis por @Input.
    Assim, o mesmo componente pode ser usado em várias telas com textos diferentes.
  */
  @Input() titulo = 'Nenhum registro encontrado';
  @Input() mensagem = 'Altere os filtros ou cadastre um novo item.';
}
