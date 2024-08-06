# Configurando NVM

**NVM (Node Version Manager)** é uma ferramenta que permite alterar a versão do Node.js sem precisar instalar diretamente na máquina. Isso facilita a troca de versões dentro de um projeto, tornando o gerenciamento de diferentes versões do Node.js mais simples e eficiente.

## 1. Como instalar NVM.

Para instalar o NVM, acesse o link de releases do projeto no GitHub:
[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

## 2. Instalar uma versão específica do Node.js

Para instalar uma versão específica do Node.js, use o comando:

```bash
nvm install <versão>
```

Exemplo:

```bash
nvm install 14.21.3
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
nvm use 14.21.3
```

## 5. Verificar a versão ativa do Node.js

Para verificar qual versão do Node.js está atualmente ativa, digite:

```bash
node -v
```

# Efetuando deploy

Siga estes passos para configurar e fazer o deploy do projeto usando NVM e Firebase.

**OBS:** Sempre que for efetuar um deploy, use a versão `14.21.3` do nodejs, e sempre que for fazer deploy, use a versão mais recente do nodejs.


## 1. Instalar NVM
Este projeto funciona com a versão do Node.js `14.21.3`. Primeiro, instale o NVM.

## 2. Mudar a versão do Node.js
```bash
nvm install 14.21.3
nvm use 14.21.3
```

## 3. Instalação de dependências na raiz do projeto
Na raiz do projeto, execute:
```bash
npm install
```

## 4. Instalação de dependências na pasta functions
Acesse a pasta `functions` e execute:
```bash
npm install
```

## 5. Build na pasta functions
Dentro da pasta `functions`, execute:
```bash
npm run build
```

## 6. Build na raiz do projeto
Volte para a raiz do projeto e execute:
```bash
npm run build
```

## 7. Mudar para a versão mais recente do Node.js
```bash
nvm use <versão mais recente>
```

## 8. Instalar Firebase CLI
Instale o Firebase CLI globalmente:
```bash
npm install -g firebase-tools
```

## 9. Login no Firebase
```bash
firebase login
usuario: webmaster@solopropaganda.com.br
```

## 10. Deploy usando Firebase
```bash
firebase deploy
```

## Mapeamento
![Mapeamento](https://github.com/lognsoft/nextSim/blob/main/mapeamento.jpg?raw=true)

