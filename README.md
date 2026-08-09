# Training Playwright with Goreth

Um repositório de treinamento dedicado ao aprendizado e prática de **Playwright** - framework de automação de testes end-to-end para aplicações web.

## 📚 Sobre o Projeto

Este projeto foi desenvolvido como material de treinamento para dominar as práticas de automação de testes com **Playwright**, utilizando **TypeScript** como linguagem principal. O foco é aplicar conceitos reais de teste automatizado em cenários práticos.

## 🎯 Objetivo

Desenvolver habilidades em:
- Automação de testes web com Playwright
- Escrita de testes usando BDD (Behavior Driven Development)
- Validação de elementos e interações da UI
- Tratamento de casos de sucesso e erro
- Boas práticas em testes automatizados

- **Linguagem:** TypeScript (100%)
- **Framework de Testes:** Playwright
- **Metodologia:** BDD (Behavior Driven Development)
- **Aplicação de Teste:** Sauce Demo (saucedemo.com)

## 📝 Cenários de Teste

Os testes cobrem funcionalidades de autenticação na aplicação **Sauce Demo**:

- ✅ Validação do campo Username
- ✅ Validação do campo Password
- ✅ Validação do botão Login
- ✅ Login com credenciais válidas
- ✅ Login com credenciais inválidas

## 🚀 Como Começar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação

```bash
git clone https://github.com/ManuelPiresLuis01/trainingPlaywrightWithGoreth.git
cd trainingPlaywrightWithGoreth
npm install
```

### Executar os Testes

```bash
npm test
```

## 📖 Padrão BDD

Os testes seguem a metodologia **BDD** com a estrutura:

```
DADO que [contexto inicial]
QUANDO [ação realizada]
E [condições adicionais]
ENTÃO [resultado esperado]
```

## 📦 Estrutura do Projeto

```
trainingPlaywrightWithGoreth/
├── README.md
├── package.json
└── [testes e configurações do Playwright]
```

## 🎓 Recursos de Aprendizado

Este repositório serve como referência para:
- Estruturação de suites de teste
- Seletores CSS e XPath
- Assertions e validações
- Tratamento de esperas e sincronização
- Organização de testes com BDD

## 📝 Notas

Projeto desenvolvido como material educacional para treinamento em automação de testes web.

---

**Mantido por:** Manuel Pires Luis
