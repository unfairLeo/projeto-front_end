# Ordem recomendada para leitura dos arquivos

Use esta ordem para explicar a aplicação em aula.

## 1. Ambiente

```text
iniciar.bat
```

Explicar apenas o necessário: ele prepara o Node portátil, instala dependências quando necessário e inicia o Angular.

## 2. Entrada da aplicação

```text
app/src/main.ts
```

Mostra onde o Angular começa.

## 3. Configuração global

```text
app/src/app/app.config.ts
```

Mostra rotas e configurações globais.

## 4. Componente raiz

```text
app/src/app/app.component.ts
app/src/app/app.component.html
```

Mostra a estrutura principal da tela.

## 5. Rotas

```text
app/src/app/app.routes.ts
```

Mostra como cada URL carrega uma página.

## 6. Model

```text
app/src/app/models/registro.model.ts
```

Mostra o formato dos dados.

## 7. Service

```text
app/src/app/services/registros.service.ts
```

Mostra as operações sobre os dados.

## 8. Página Dashboard

```text
app/src/app/pages/dashboard/dashboard.component.ts
app/src/app/pages/dashboard/dashboard.component.html
```

Mostra resumo e uso de componente reutilizável.

## 9. Página Registros

```text
app/src/app/pages/registros/registros.component.ts
app/src/app/pages/registros/registros.component.html
```

Mostra a tela principal da aplicação.

## 10. Componentes filhos da tela Registros

```text
app/src/app/components/item-form/item-form.component.ts
app/src/app/components/item-form/item-form.component.html
app/src/app/components/filter-bar/filter-bar.component.ts
app/src/app/components/filter-bar/filter-bar.component.html
app/src/app/components/item-list/item-list.component.ts
app/src/app/components/item-list/item-list.component.html
app/src/app/components/empty-state/empty-state.component.ts
app/src/app/components/loading-error/loading-error.component.ts
```
