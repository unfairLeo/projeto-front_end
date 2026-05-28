/*
  app.config.ts
  ---------------------------------------------------------------------------
  Arquivo de configuração global da aplicação Angular.

  Ele concentra providers, isto é, recursos que ficam disponíveis para a
  aplicação inteira. Neste projeto, os dois pontos mais importantes são:

  1. configuração da detecção de mudanças;
  2. ativação do sistema de rotas.
*/

import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    /*
      Detecção de mudanças:
      o Angular precisa saber quando deve atualizar a tela.

      Exemplo: quando o usuário digita no formulário, clica em um botão ou
      quando uma lista de dados muda, o Angular detecta a mudança e atualiza
      o HTML exibido no navegador.
    */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /*
      Ativa as rotas definidas em app.routes.ts.
      Sem esta linha, routerLink e router-outlet não funcionariam corretamente.
    */
    provideRouter(routes),

    /*
      Define a localidade padrão da aplicação como pt-BR.
      Isso é usado por pipes de data, moeda e número.
    */
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};
