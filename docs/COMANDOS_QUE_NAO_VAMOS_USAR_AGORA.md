# Comandos que nao vamos usar agora

Este pacote ja traz o ambiente preparado para reduzir problemas de instalacao em laboratorio.

## `npm install -g @angular/cli`

Instala o Angular CLI globalmente no computador. Nao sera usado porque pode exigir permissao, alterar o PATH ou falhar por politica do sistema.

## `ng new nome-do-projeto`

Cria um projeto Angular novo. Nao sera usado inicialmente porque o projeto modelo ja esta criado em `app`.

## `ng serve`

Inicia o servidor de desenvolvimento do Angular. O comando existe, mas sera chamado indiretamente pelo `iniciar.bat`, por meio de `npm run start`.

## `npm install`

Instala as dependencias do projeto. O `iniciar.bat` executa esse comando automaticamente quando necessario.

## `npm run start`

Executa o script de inicializacao do projeto. Tambem sera chamado automaticamente pelo `iniciar.bat`.
