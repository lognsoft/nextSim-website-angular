# Configurando NVM

**NVM (Node Version Manager)** é uma ferramenta que permite alterar a versão do Node.js sem precisar instalar diretamente na máquina. Isso facilita a troca de versões dentro de um projeto, tornando o gerenciamento de diferentes versões do Node.js mais simples e eficiente.

## 1. Como instalar NVM

Para instalar o NVM, acesse o link de releases do projeto no GitHub:
[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

## 2. Instalar uma versão específica do Node.js

Para instalar uma versão específica do Node.js, use o comando:

```bash
nvm install <versão>
```

Exemplo:

```bash
nvm install 14.17.0
```

## 3. Listar todas as versões instaladas do Node.js

Para listar todas as versões do Node.js que estão instaladas no seu sistema, utilize:

```bash
nvm list
```

## 4. Usar uma versão específica do Node.js

Para usar uma versão específica do Node.js, execute:

```bash
nvm use <versão>
```

Exemplo:

```bash
nvm use 14.17.0
```

## 5. Verificar a versão ativa do Node.js

Para verificar qual versão do Node.js está atualmente ativa, digite:

```bash
node -v
```
