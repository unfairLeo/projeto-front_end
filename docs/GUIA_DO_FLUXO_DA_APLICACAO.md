# Guia do fluxo da aplicação Angular

Este documento resume como a aplicação executa desde o início até a manipulação dos registros.

## Fluxo de inicialização

```text
iniciar.bat
   ↓
Node.js portátil
   ↓
npm run start
   ↓
Angular CLI local do projeto
   ↓
http://localhost:4200
   ↓
src/main.ts
   ↓
AppComponent
   ↓
app.routes.ts
   ↓
Página carregada pela rota
```

## Fluxo visual

```text
AppComponent
   ├── HeaderComponent
   └── RouterOutlet
          ├── DashboardComponent
          ├── RegistrosComponent
          └── SobreComponent
```

## Fluxo da tela Registros

```text
RegistrosComponent
   ├── ItemFormComponent
   │      └── emite salvar/cancelar
   ├── FilterBarComponent
   │      └── emite filtrosAlterados
   ├── LoadingErrorComponent
   ├── ItemListComponent
   │      └── emite editar/excluir/alternarStatus
   └── EmptyStateComponent
```

## Fluxo dos dados

```text
RegistrosComponent
   ↓
RegistrosService
   ↓
array privado registros: Registro[]
   ↓
listar / buscar / adicionar / atualizar / excluir
   ↓
RegistrosComponent atualiza a tela
```

## Fluxo de cadastro

```text
Usuário preenche o formulário
   ↓
ItemFormComponent captura com [(ngModel)]
   ↓
formulário executa (ngSubmit)
   ↓
ItemFormComponent emite evento salvar
   ↓
RegistrosComponent recebe dados
   ↓
RegistrosService.adicionar()
   ↓
RegistrosComponent chama atualizarTela()
   ↓
ItemListComponent exibe a lista atualizada
```

## Fluxo de edição

```text
Usuário clica em Editar na lista
   ↓
ItemListComponent emite evento editar
   ↓
RegistrosComponent define registroEdicao
   ↓
ItemFormComponent recebe registroEdicao por @Input
   ↓
ngOnChanges preenche o formulário
   ↓
Usuário salva
   ↓
RegistrosService.atualizar()
```

## Fluxo de filtro

```text
Usuário digita no filtro ou escolhe categoria/status
   ↓
FilterBarComponent atualiza variáveis com [(ngModel)]
   ↓
FilterBarComponent emite filtrosAlterados
   ↓
RegistrosComponent recebe os filtros
   ↓
RegistrosService.buscarPorTexto()
   ↓
lista filtrada aparece na tela
```
