/*
  loading-error.component.ts
  ---------------------------------------------------------------------------
  Componente para centralizar mensagens de carregamento e erro.

  Mesmo que o projeto atual use dados em memória, esse componente prepara os
  estudantes para uma aplicação com API, onde é comum ter estados como:
  - carregando;
  - sucesso;
  - erro.
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-error',
  templateUrl: './loading-error.component.html',
  styleUrl: './loading-error.component.css'
})
export class LoadingErrorComponent {
  @Input() carregando = false;
  @Input() erro = '';
}
