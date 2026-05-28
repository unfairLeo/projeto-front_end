/*
  app.routes.ts
  ---------------------------------------------------------------------------
  Arquivo responsável pelo mapeamento das rotas da aplicação.

  Rota é a associação entre uma URL e uma página/componente.

  Exemplos:
  - http://localhost:4200/dashboard  -> DashboardComponent
  - http://localhost:4200/registros  -> RegistrosComponent
  - http://localhost:4200/sobre      -> SobreComponent

  Neste projeto, as páginas são carregadas com loadComponent, uma forma moderna
  de lazy loading. Isso significa que o componente da página só é carregado
  quando a rota é acessada.
*/

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    /*
      Rota vazia.
      Quando o usuário abre somente http://localhost:4200,
      a aplicação redireciona automaticamente para /dashboard.
    */
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    /*
      Página inicial com indicadores/resumo.
    */
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component')
      .then((m) => m.DashboardComponent)
  },
  {
    path: 'servicos',
    loadComponent: () => import('./pages/servicos/servicos.component')
      .then((m) => m.ServicosComponent)
  },
  {
    /*
      Página de agendamentos da barbearia.
      Contém formulário, filtro, lista, edição, exclusão e alteração de status.
    */
    path: 'registros',
    loadComponent: () => import('./pages/registros/registros.component')
      .then((m) => m.RegistrosComponent)
  },
  {
    path: 'agendamentos',
    redirectTo: 'registros'
  },
  {
    path: 'agendamento',
    redirectTo: 'registros'
  },
  {
    path: 'visagismo',
    loadComponent: () => import('./pages/visagismo/visagismo.component')
      .then((m) => m.VisagismoComponent)
  },
  {
    /*
      Página explicativa, usada para apresentar a finalidade do projeto modelo.
    */
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.component')
      .then((m) => m.SobreComponent)
  },
  {
    /*
      Rota coringa.
      Se o usuário digitar uma URL inexistente, ele volta para /dashboard.
    */
    path: '**',
    redirectTo: 'dashboard'
  }
];
