# Sistema Modelo Angular — pacote portátil para aula

Este pacote contém uma aplicação Angular pronta para estudo, execução e adaptação nos trabalhos de Front-End.

A proposta é reduzir problemas de instalação em laboratório: o estudante executa `iniciar.bat`, o pacote prepara o ambiente quando necessário e inicia a aplicação em `http://localhost:4200`.

## 1. Como executar

1. Extraia a pasta do ZIP em um local do computador.
2. Evite Google Drive, OneDrive, Dropbox, pendrive ou pasta de rede.
3. Abra a pasta extraída.
4. Execute o arquivo:

```text
iniciar.bat
```

5. Aguarde o servidor iniciar.
6. Acesse no navegador:

```text
http://localhost:4200
```

Enquanto a aplicação estiver sendo usada, o terminal precisa permanecer aberto. Para parar o servidor, use `CTRL + C` no terminal.

## 2. O que o `iniciar.bat` faz

O arquivo `iniciar.bat` é o único comando que o estudante precisa usar nesta etapa.

Fluxo executado pelo script:

```text
iniciar.bat
   ↓
verifica se existe Node.js portátil em tools/node
   ↓
se não existir, baixa e prepara o Node.js portátil
   ↓
entra na pasta app
   ↓
verifica se as dependências existem em app/node_modules
   ↓
se não existirem, executa npm install
   ↓
executa npm run start
   ↓
inicia o servidor Angular em http://localhost:4200
```

Esse fluxo automatiza tarefas que normalmente seriam feitas manualmente no terminal. Assim, o foco da aula fica na estrutura da aplicação Angular, e não na instalação do ambiente.

## 3. Ideia geral da aplicação

A aplicação usa um domínio genérico chamado **Registros**. Esse domínio foi escolhido para servir como base para vários tipos de projeto.

Um `Registro` pode ser adaptado para:

- produto;
- ferramenta;
- agendamento;
- despesa ou receita;
- cliente;
- livro;
- chamado;
- tarefa;
- evento.

A aplicação já possui exemplos de:

- tela inicial com indicadores;
- tela de cadastro;
- formulário;
- filtro;
- listagem;
- edição;
- exclusão;
- alteração de status;
- serviço com dados em memória;
- rotas;
- componentes reutilizáveis;
- model TypeScript.

Em termos de aprendizagem, o projeto mostra uma estrutura comum em aplicações front-end: uma tela recebe ações do usuário, chama funções para manipular dados e atualiza a interface com o resultado.

## 4. Fluxo da aplicação

O fluxo técnico principal é este:

```text
src/main.ts
   ↓
inicia o Angular com AppComponent e appConfig
   ↓
app/app.component.html
   ↓
mostra o HeaderComponent e o router-outlet
   ↓
app/app.routes.ts
   ↓
escolhe qual página será carregada pela URL
   ↓
pages/dashboard ou pages/registros ou pages/sobre
   ↓
as páginas usam componentes menores de components/
   ↓
pages/registros usa RegistrosService para manipular os dados
   ↓
RegistrosService usa o tipo Registro definido em models/registro.model.ts
```

Em linguagem mais simples:

```text
main.ts liga a aplicação.
app.component monta a estrutura principal.
app.routes decide qual tela aparece.
pages são as telas principais.
components são partes reutilizáveis das telas.
services concentram manipulação de dados.
models definem o formato dos dados.
```

De forma prática, o usuário não acessa diretamente o service ou o model. Ele interage com a tela. A tela aciona componentes, os componentes emitem eventos ou recebem dados, e a página usa o service para buscar, cadastrar, editar ou excluir registros.

## 5. Arquivos que devem ser abertos na aula

A sequência abaixo foi pensada para explicar Angular sem começar por detalhes avançados.

### 1º arquivo — inicialização da aplicação

```text
app/src/main.ts
```

Mostra onde o Angular começa a executar.

Conceitos com pequena explicação:

- **Ponto de entrada da aplicação**: arquivo inicial executado pelo Angular para carregar o sistema no navegador.
- **`bootstrapApplication`**: função responsável por iniciar a aplicação Angular usando o componente principal.
- **Componente raiz**: primeiro componente carregado; funciona como a base visual da aplicação.
- **Configurações globais**: definições usadas pela aplicação inteira, como rotas, localização e outros provedores.

### 2º arquivo — configurações globais

```text
app/src/app/app.config.ts
```

Mostra provedores globais da aplicação.

Conceitos com pequena explicação:

- **Configuração da aplicação**: local onde ficam ajustes gerais usados por diferentes partes do projeto.
- **Ativação das rotas**: permite que o Angular carregue páginas diferentes conforme a URL acessada.
- **Locale `pt-BR`**: configuração de idioma e formato regional, como moeda, data e numeração no padrão brasileiro.
- **Atualização da tela quando dados mudam**: mecanismo que permite ao Angular refletir alterações de dados na interface.

### 3º arquivo — componente raiz

```text
app/src/app/app.component.ts
app/src/app/app.component.html
```

Mostra a estrutura principal carregada no navegador.

Conceitos com pequena explicação:

- **Componente**: bloco da interface que reúne lógica TypeScript, estrutura HTML e, quando necessário, estilo visual.
- **Selector**: nome usado para inserir um componente dentro de outro template HTML.
- **Imports em componente standalone**: lista de recursos, componentes ou diretivas que aquele componente precisa usar.
- **Template HTML**: parte visual do componente, responsável por definir o que aparece na tela.
- **Property binding**: forma de enviar valores do TypeScript para o HTML ou para outro componente.
- **`router-outlet`**: espaço reservado onde o Angular exibe a página correspondente à rota atual.

### 4º arquivo — rotas

```text
app/src/app/app.routes.ts
```

Mostra como as URLs carregam páginas diferentes.

Conceitos com pequena explicação:

- **Rota vazia**: caminho inicial da aplicação, geralmente acessado quando a URL não possui complemento.
- **Redirecionamento**: regra que envia o usuário automaticamente de uma rota para outra.
- **`/dashboard`**: rota usada para exibir a tela inicial com indicadores e resumo dos dados.
- **`/registros`**: rota usada para abrir a tela principal de cadastro, listagem, edição e exclusão.
- **`/sobre`**: rota usada para apresentar informações gerais sobre o projeto.
- **Rota coringa `**`**: rota usada quando o usuário acessa um endereço inexistente na aplicação.
- **Lazy loading com `loadComponent`**: carregamento de um componente apenas quando a rota for acessada, ajudando na organização e no desempenho.

### 5º arquivo — menu superior

```text
app/src/app/components/header/header.component.ts
app/src/app/components/header/header.component.html
```

Mostra navegação entre telas.

Conceitos com pequena explicação:

- **`@Input`**: permite que um componente receba dados enviados por um componente pai.
- **Interpolação**: forma de exibir valores do TypeScript dentro do HTML usando `{{ }}`.
- **`routerLink`**: diretiva usada para navegar entre rotas sem recarregar a página inteira.
- **`routerLinkActive`**: diretiva usada para aplicar uma classe visual ao link da rota que está ativa.
- **Navegação sem recarregar a página inteira**: comportamento típico de aplicações SPA, em que a troca de tela acontece dentro da própria aplicação.

### 6º arquivo — model

```text
app/src/app/models/registro.model.ts
```

Mostra o formato dos dados usados pela aplicação.

Conceitos com pequena explicação:

- **`type`**: recurso do TypeScript usado para criar um tipo personalizado, como uma lista de status permitidos.
- **`interface`**: estrutura que define quais campos um objeto deve possuir.
- **Diferença entre `Registro` e `RegistroFormData`**: `Registro` representa o dado completo; `RegistroFormData` representa os dados digitados no formulário antes de virar um registro completo.
- **Padronização dos dados**: garante que diferentes partes da aplicação trabalhem com a mesma estrutura de informação.

### 7º arquivo — service

```text
app/src/app/services/registros.service.ts
```

Mostra onde ficam os dados e as operações da aplicação.

Conceitos com pequena explicação:

- **Service**: classe responsável por concentrar regras de acesso, consulta e manipulação de dados.
- **`@Injectable`**: indica que a classe pode ser injetada e reutilizada por outros componentes ou páginas.
- **`providedIn: 'root'`**: faz o service ficar disponível para toda a aplicação.
- **Dados em memória**: dados guardados temporariamente no próprio front-end, sem banco de dados ou API externa.
- **`listar`**: operação usada para retornar todos os registros disponíveis.
- **`adicionar`**: operação usada para inserir um novo registro na lista.
- **`atualizar`**: operação usada para modificar um registro existente.
- **`excluir`**: operação usada para remover um registro.
- **`buscarPorTexto`**: operação usada para filtrar registros com base em um texto digitado.
- **Separação entre tela e regra de dados**: evita que o componente visual fique responsável por toda a lógica do sistema.

### 8º arquivo — dashboard

```text
app/src/app/pages/dashboard/dashboard.component.ts
app/src/app/pages/dashboard/dashboard.component.html
```

Mostra uma página que usa dados do service para montar indicadores.

Conceitos com pequena explicação:

- **Página como componente**: em Angular, uma página também é um componente, mas normalmente representa uma tela inteira.
- **`inject`**: função usada para acessar um service dentro de um componente.
- **Uso de service**: permite que a página busque dados sem armazenar toda a regra diretamente no HTML.
- **Componente reutilizável `app-dashboard-card`**: pequeno bloco visual usado para exibir indicadores de forma padronizada.
- **Binding de valores para componentes filhos**: envio de dados da página para componentes menores, como cards ou listas.

### 9º arquivo — página de registros

```text
app/src/app/pages/registros/registros.component.ts
app/src/app/pages/registros/registros.component.html
```

Mostra a tela principal de CRUD.

Conceitos com pequena explicação:

- **Estado da tela**: conjunto de informações que controlam o que aparece no momento, como lista filtrada, item em edição ou mensagem de erro.
- **Composição com componentes filhos**: construção da página usando partes menores, como formulário, filtro e lista.
- **Comunicação pai → filho com `@Input`**: envio de dados da página principal para componentes internos.
- **Comunicação filho → pai com `@Output`**: envio de eventos de um componente interno para a página principal.
- **Carregamento**: indicação de que a aplicação está buscando ou preparando dados.
- **Erro**: mensagem exibida quando alguma ação não pode ser concluída corretamente.
- **Filtro**: recurso usado para reduzir a lista exibida conforme critérios definidos pelo usuário.
- **Cadastro**: ação de inserir um novo registro.
- **Edição**: ação de alterar os dados de um registro já existente.
- **Exclusão**: ação de remover um registro da lista.

### 10º arquivo — formulário

```text
app/src/app/components/item-form/item-form.component.ts
app/src/app/components/item-form/item-form.component.html
```

Mostra como capturar dados digitados pelo usuário.

Conceitos com pequena explicação:

- **`FormsModule`**: módulo que habilita recursos de formulário no Angular.
- **`[(ngModel)]`**: ligação bidirecional entre o campo do formulário e uma variável no TypeScript.
- **`ngSubmit`**: evento disparado quando o formulário é enviado.
- **Validação simples**: verificação básica para impedir dados incompletos ou inválidos.
- **Modo cadastro**: estado do formulário usado para criar um novo registro.
- **Modo edição**: estado do formulário usado para alterar um registro existente.
- **Emissão de evento para salvar**: envio dos dados preenchidos para a página principal decidir como salvar.

### 11º arquivo — filtro

```text
app/src/app/components/filter-bar/filter-bar.component.ts
app/src/app/components/filter-bar/filter-bar.component.html
```

Mostra busca e filtros da listagem.

Conceitos com pequena explicação:

- **Campo de busca**: entrada de texto usada para pesquisar registros.
- **`select`**: elemento HTML usado para escolher uma opção em uma lista.
- **`@for`**: estrutura do Angular usada para repetir elementos no HTML a partir de uma lista.
- **`EventEmitter`**: recurso usado para emitir eventos de um componente filho para o componente pai.
- **Emissão de filtros para a página pai**: envio dos critérios escolhidos para que a página principal atualize a listagem.

### 12º arquivo — lista

```text
app/src/app/components/item-list/item-list.component.ts
app/src/app/components/item-list/item-list.component.html
```

Mostra como exibir vários registros.

Conceitos com pequena explicação:

- **`@for`**: usado para percorrer a lista de registros e criar um bloco visual para cada item.
- **Pipes**: recursos do Angular usados para transformar a forma de exibição de um valor.
- **`CurrencyPipe`**: pipe usado para exibir valores monetários formatados.
- **`DatePipe`**: pipe usado para exibir datas em um formato mais legível.
- **Botões de ação**: botões usados para executar operações como editar, excluir ou alterar status.
- **Eventos de editar, excluir e alterar status**: ações disparadas pelo usuário e enviadas para a página principal tratar.

## 6. Pastas principais

```text
app/src/app/components
```

Componentes reutilizáveis. São partes menores da interface que podem ser reaproveitadas em mais de uma tela. Exemplos: cabeçalho, formulário, lista, filtro e card.

```text
app/src/app/pages
```

Páginas principais da aplicação. São os componentes carregados pelas rotas e representam telas completas, como dashboard, registros e sobre.

```text
app/src/app/services
```

Serviços. Centralizam acesso e manipulação de dados. No projeto atual, os dados ficam em memória. Depois, essa pasta pode ser alterada para usar API com `HttpClient`.

```text
app/src/app/models
```

Modelos TypeScript. Definem a estrutura dos dados da aplicação. Eles ajudam a manter consistência entre formulário, service, listagem e dashboard.

```text
app/src/styles.css
```

Estilos globais compartilhados pela aplicação. Esse arquivo afeta a aparência geral do projeto, como cores, fontes, espaçamentos e comportamento responsivo.

## 7. Arquivos que os estudantes mais devem modificar

Para adaptar o projeto para um trabalho, normalmente os arquivos mais importantes serão:

```text
app/src/app/models/registro.model.ts
app/src/app/services/registros.service.ts
app/src/app/pages/registros/registros.component.ts
app/src/app/pages/registros/registros.component.html
app/src/app/components/item-form/item-form.component.ts
app/src/app/components/item-form/item-form.component.html
app/src/app/components/item-list/item-list.component.html
app/src/app/pages/dashboard/dashboard.component.ts
app/src/app/pages/dashboard/dashboard.component.html
```

Esses arquivos concentram as principais adaptações do domínio do projeto. Em geral, primeiro altera-se o model, depois o service, depois o formulário, a lista e, por fim, o dashboard.

## 8. O que não precisa ser usado agora

Nesta primeira etapa, os estudantes não precisam executar diretamente:

```text
npm install -g @angular/cli
ng new
ng serve
npm install
npm run start
```

Esses comandos existem no ecossistema Angular, mas o pacote foi montado para que o estudante use apenas:

```text
iniciar.bat
```

Os detalhes desses comandos estão em:

```text
docs/COMANDOS_QUE_NAO_VAMOS_USAR_AGORA.md
```

## 9. Resumo dos conceitos centrais

- **Aplicação Angular**: conjunto de arquivos organizados para criar uma aplicação web executada no navegador.
- **Componente**: parte da interface com responsabilidade própria, como formulário, lista ou cabeçalho.
- **Página**: componente maior carregado por uma rota e usado como tela principal.
- **Rota**: regra que associa uma URL a uma página da aplicação.
- **Service**: classe usada para concentrar operações de dados e regras que não devem ficar diretamente no HTML.
- **Model**: definição do formato dos dados usados na aplicação.
- **Binding**: mecanismo de ligação entre dados do TypeScript e elementos do HTML.
- **Evento**: ação disparada pelo usuário ou pelo componente, como clicar em um botão ou enviar um formulário.
- **SPA**: aplicação de página única, em que a navegação troca partes da tela sem recarregar todo o site.
