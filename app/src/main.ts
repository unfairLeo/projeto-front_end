/*
  main.ts
  ---------------------------------------------------------------------------
  Este é o ponto de entrada da aplicação Angular.

  Em uma aplicação web comum, o navegador carrega o arquivo index.html.
  Dentro desse HTML existe a tag <app-root>. O Angular assume essa tag e
  renderiza nela o componente raiz da aplicação: AppComponent.

  Para explicar em aula:
  1. o navegador abre a página;
  2. o Angular é inicializado por este arquivo;
  3. o AppComponent passa a controlar a área principal da aplicação;
  4. as configurações globais vêm de app.config.ts.
*/

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

/*
  Registra dados de localização para português do Brasil.
  Isso permite que pipes como DatePipe e CurrencyPipe formatem data e moeda
  corretamente no padrão brasileiro.
*/
registerLocaleData(localePt);

/*
  bootstrapApplication inicia uma aplicação Angular baseada em componentes
  standalone. Nesta abordagem, não precisamos criar um AppModule.

  Parâmetros:
  - AppComponent: componente raiz que será carregado primeiro.
  - appConfig: configurações globais da aplicação, como rotas e providers.
*/
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
