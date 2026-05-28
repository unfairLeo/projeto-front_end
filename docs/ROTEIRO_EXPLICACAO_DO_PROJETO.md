# Roteiro de explicacao do projeto Angular modelo

Este roteiro foi criado para orientar a explicacao em aula. A ideia nao e apresentar todos os detalhes do Angular de uma vez, mas mostrar como a aplicacao esta organizada.

## 1. Como iniciar

Executar o arquivo:

```text
iniciar.bat
```

Depois acessar:

```text
http://localhost:4200
```

O terminal precisa ficar aberto porque ele mantem o servidor de desenvolvimento do Angular em execucao.

## 2. Ideia geral da aplicacao

O projeto representa um sistema generico de registros. Ele pode ser adaptado para diferentes trabalhos:

- produtos;
- ferramentas;
- agendamentos;
- despesas e receitas;
- clientes;
- livros;
- chamados;
- tarefas.

A escolha de um dominio generico evita que a aplicacao resolva diretamente o trabalho de um grupo, mas oferece uma base tecnica reaproveitavel.

## 3. Pastas principais

```text
src/app/components
```

Componentes reutilizaveis. Exemplos: header, card de dashboard, formulario, lista, filtro, mensagem de vazio e mensagem de carregamento/erro.

```text
src/app/pages
```

Paginas acessadas por rota. Exemplos: dashboard, registros e sobre.

```text
src/app/services
```

Camada responsavel por manipular dados. No projeto atual, os dados estao em memoria. Depois, esta pasta pode ser alterada para usar HttpClient e API.

```text
src/app/models
```

Tipos e interfaces TypeScript. Define o formato dos dados usados pela aplicacao.

## 4. Sequencia recomendada de explicacao

1. Mostrar o `iniciar.bat` apenas como ferramenta para iniciar o ambiente.
2. Abrir `src/main.ts` e explicar que ele inicia a aplicacao.
3. Abrir `app.component.html` e explicar `app-header` e `router-outlet`.
4. Abrir `app.routes.ts` e mostrar como as rotas carregam as paginas.
5. Abrir `pages/dashboard` e mostrar o uso de componentes de card.
6. Abrir `pages/registros` e mostrar a composicao da tela: formulario, filtro, lista, carregamento e estado vazio.
7. Abrir `services/registros.service.ts` e mostrar que os dados estao centralizados no service.
8. Abrir `models/registro.model.ts` e mostrar o formato dos dados.

## 5. Pontos de Angular que aparecem no projeto

- componente standalone;
- template HTML;
- CSS de componente;
- property binding com `[valor]`;
- event binding com `(click)` e `(salvar)`;
- two-way data binding com `[(ngModel)]`;
- repeticao com `@for`;
- condicional com `@if`;
- rotas com `routerLink` e `router-outlet`;
- service com injecao de dependencia;
- interface TypeScript para modelar dados;
- pipes para moeda e data.

## 6. O que os grupos podem alterar primeiro

Para uma primeira atividade, pedir que cada grupo altere:

1. O titulo do sistema em `app.component.ts`.
2. Os textos do menu em `header.component.html`.
3. O modelo `Registro` em `registro.model.ts`.
4. Os dados iniciais em `registros.service.ts`.
5. Os campos do formulario em `item-form.component.html`.
6. Os indicadores do dashboard em `dashboard.component.html`.

## 7. O que ainda nao precisa ser usado agora

Neste momento, os grupos nao precisam usar:

- `ng new`;
- `npm install -g @angular/cli`;
- criacao manual de projeto;
- configuracao global do Node;
- backend real;
- banco de dados.

Esses assuntos podem ser retomados depois, quando a turma ja estiver confortavel com componentes, templates e services.
