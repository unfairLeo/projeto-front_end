/*
  header.component.ts
  ---------------------------------------------------------------------------
  Componente do cabeçalho/menu superior da aplicação.

  Ele é reutilizável porque recebe o título por @Input. Assim, o componente
  não precisa ter o nome do sistema fixo dentro dele.
*/

import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',

  /*
    RouterLink permite navegar entre rotas Angular sem recarregar a página inteira.
    RouterLinkActive aplica automaticamente uma classe CSS ao link da rota atual.
  */
  imports: [RouterLink, RouterLinkActive],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  /*
    @Input indica que este valor vem do componente pai.
    Neste caso, AppComponent envia o título do sistema.
  */
  @Input({ required: true }) titulo = '';
}
