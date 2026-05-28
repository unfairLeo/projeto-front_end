/*
  app.component.ts
  ---------------------------------------------------------------------------
  Componente raiz da aplicação.

  Ele é o primeiro componente Angular renderizado dentro da tag <app-root>,
  que fica no arquivo src/index.html.

  O AppComponent não deve concentrar todas as regras do sistema. Neste projeto,
  ele apenas monta a estrutura geral:

  - cabeçalho/menu;
  - área dinâmica onde as rotas carregam as páginas.
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  /*
    selector é o nome da tag HTML usada para renderizar este componente.
    No index.html existe uma tag <app-root>. É nela que o Angular coloca
    o conteúdo deste componente.
  */
  selector: 'app-root',

  /*
    Este projeto usa componentes standalone.
    Por isso, todo componente/diretiva usado no HTML precisa ser importado aqui.

    RouterOutlet: área onde as rotas carregam as páginas.
    HeaderComponent: componente do menu superior.
  */
  imports: [RouterOutlet, HeaderComponent],

  /*
    Separação de responsabilidades:
    - .ts: dados e comportamento;
    - .html: estrutura visual;
    - .css: estilo do componente.
  */
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*
    Esta propriedade será enviada ao HeaderComponent por property binding:

    <app-header [titulo]="titulo"></app-header>

    Ou seja, o componente pai envia um dado para o componente filho.
  */
  titulo = 'Barbearia Caveira Nobre';
}
