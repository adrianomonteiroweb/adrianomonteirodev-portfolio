# ADRIANO MONTEIRO DEV PORTFÓLIO

Repositório de um portfólio em React.js, Node.js e TypeScript. Com testes no front-end usando Cypress E2E, tradução multi idiomas e muito mais.

### STRUCTURE AND TECHNOLOGIES

- NPM Workspaces

```bash
...
> packages/
  > client/
  > server/
...
```

- Root Dev Dependencies:

  - ts-node;
  - typescript.

- Client Dependencies:

  - react;
  - react-dom;
  - react-router-dom;
  - i18next;
  - react-i18next;
  - typescript.

- Client Dev Dependencies:

  - Cypress.

### RUNNING THE APPLICATION

- Client

  - Running E2E Cypress:

  ```bash
  npm run cy:open
  ```

  - Start React.js application:

  ```bash
  npm run client:start
  ```

### DESIGN

- Prototype in [Figma](https://www.figma.com/file/BXf5swV5EKuSzAL0hWXTH7/Adriano-Monteiro-Dev?node-id=0%3A1)

# TESTS

### E2E FRONT_END TESTS WITH CYPRES

```bash
...
> packages/
  > client/
    > cypress/
      ...
      > 2e2/
        profile-screen.spec.cy.ts
      ...
  > server/
...
```
