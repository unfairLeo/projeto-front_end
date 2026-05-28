# Angular Aula Portátil — Professor

Este pacote contém um projeto Angular modelo para uso em aula de Front-End.

## Como usar

1. Extraia a pasta fora de Google Drive, OneDrive, Dropbox, pendrive ou pasta de rede.
2. Execute `iniciar.bat`.
3. Aguarde o servidor iniciar.
4. Acesse `http://localhost:4200`.

Na primeira execução, caso o Node portátil ou as dependências ainda não existam, o script pode precisar de internet. Depois que tudo estiver preparado, compacte a pasta inteira para entregar aos estudantes.

## Principal arquivo para conduzir a aula

```text
README.md
```

Esse arquivo foi estruturado como guia didático. Ele explica:

- fluxo de execução da aplicação;
- função do `iniciar.bat`;
- função das pastas;
- ordem dos arquivos para abrir em aula;
- conceitos que podem ser explicados em cada arquivo;
- arquivos que os grupos devem modificar para adaptar o projeto.

## Comentários didáticos incluídos

Os principais arquivos `.ts`, `.html` e alguns `.css` foram comentados para servir como material de apoio durante a explicação.

Arquivos mais relevantes:

```text
app/src/main.ts
app/src/app/app.config.ts
app/src/app/app.routes.ts
app/src/app/app.component.ts
app/src/app/app.component.html
app/src/app/models/registro.model.ts
app/src/app/services/registros.service.ts
app/src/app/pages/dashboard/dashboard.component.ts
app/src/app/pages/dashboard/dashboard.component.html
app/src/app/pages/registros/registros.component.ts
app/src/app/pages/registros/registros.component.html
app/src/app/components/item-form/item-form.component.ts
app/src/app/components/item-form/item-form.component.html
app/src/app/components/filter-bar/filter-bar.component.ts
app/src/app/components/filter-bar/filter-bar.component.html
app/src/app/components/item-list/item-list.component.ts
app/src/app/components/item-list/item-list.component.html
```

## Ideia pedagógica

O projeto não deve ser apresentado como sistema final pronto. Ele é um modelo técnico para mostrar organização de uma aplicação Angular.

A aplicação usa o domínio genérico `Registro` para que os grupos possam adaptar para produtos, ferramentas, agendamentos, despesas, clientes, livros, chamados ou outros temas.
