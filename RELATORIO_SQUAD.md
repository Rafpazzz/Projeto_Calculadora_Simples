# Relatório Final do Squad – Projeto Calculadora Simples

## 1. Integrantes e Papéis

- **Rafael Paz – Tech Lead**
  - Responsável pela liderança técnica do projeto, definição de arquitetura, revisão de código, organização do fluxo de trabalho Git e suporte aos demais membros.

- **Jhonata – Desenvolvedor 1 (Estrutura HTML/CSS)**
  - Estruturação do layout da calculadora em HTML, estilização visual com CSS e garantia da responsividade.

- **Luiz Felipe – Desenvolvedor 2 (Lógica/JavaScript)**
  - Implementação da lógica das operações matemáticas, manipulação do DOM e integração das funcionalidades em JavaScript.

- **Mylena – QA / Documentadora**
  - Planejamento e execução de testes, validação das funcionalidades, documentação do projeto e apoio na garantia de qualidade.

## 2. Projeto Escolhido

O projeto desenvolvido foi uma **Calculadora Simples**, capaz de realizar as quatro operações matemáticas básicas: soma, subtração, multiplicação e divisão. O objetivo principal foi aplicar conceitos de desenvolvimento colaborativo utilizando Git e GitHub, além de consolidar conhecimentos em HTML, CSS e JavaScript puro.

O escopo do projeto abrangeu:
- Interface amigável e intuitiva para o usuário
- Implementação das operações matemáticas
- Tratamento de erros comuns (como divisão por zero)
- Estrutura de código clara e separada por responsabilidades

## 3. Funcionalidades Desenvolvidas

- **Operações Matemáticas:**
  - Soma, subtração, multiplicação e divisão entre dois números.
- **Interface Interativa:**
  - Botões para cada número e operação, display para exibir resultados e entradas.
- **Tratamento de Erros:**
  - Exibição de mensagem de erro ao tentar dividir por zero.
  - Prevenção de entradas inválidas (ex: múltiplos pontos decimais).
- **Limpar/Clear:**
  - Botão para limpar o display e reiniciar o cálculo.
- **Design Responsivo:**
  - Interface adaptada para diferentes tamanhos de tela.

**Comportamento da Calculadora:**
- Ao inserir valores e selecionar uma operação, o resultado é exibido imediatamente após pressionar o botão de igual.
- Caso o usuário tente dividir por zero, uma mensagem de erro é exibida e o cálculo é interrompido.
- O botão "C" limpa o display e permite iniciar um novo cálculo.

## 4. Descrição do Fluxo de Trabalho Git

### 4.1 Organização de Branches
- **Branch principal:** `main` – contém sempre a versão estável do projeto.
- **Branches de funcionalidades:** padrão `feature/nome-da-feature` (ex: `feature/layout-inicial`, `feature/operacoes-basicas`).
- **Branches de correção:** padrão `bugfix/nome-do-bug` (ex: `bugfix/divisao-zero`).

**Exemplo prático:**
- Para implementar a lógica de multiplicação, foi criada a branch `feature/multiplicacao` a partir da `main`. Após finalização e revisão, foi feito o merge na `main`.

### 4.2 Padrão de Commits
- Utilização do padrão **Conventional Commits** para clareza e rastreabilidade.
- **Principais tipos utilizados:**
  - `feat`: implementação de nova funcionalidade
  - `fix`: correção de bugs
  - `docs`: alterações na documentação
  - `style`: ajustes de formatação e estilo (sem alteração de lógica)
  - `refactor`: refatoração de código

**Exemplos reais:**
- `feat: adicionar operação de multiplicação`
- `fix: corrigir erro de divisão por zero`
- `docs: atualizar README com instruções de uso`
- `style: ajustar espaçamento do CSS`

### 4.3 Processo de Pull Request e Code Review
- Cada branch desenvolvida gerava um **Pull Request (PR)** direcionado à `main`.
- O PR era revisado pelo **Tech Lead (Rafael Paz)** e, quando relacionado a funcionalidades ou correções críticas, também pela **QA (Mylena)**.
- Critérios para aprovação:
  - Código limpo e seguindo padrões definidos
  - Funcionalidade testada e validada
  - Ausência de conflitos com a `main`
- Após aprovação, o PR era integrado à branch principal.

## 5. Processo de Desenvolvimento Colaborativo

- As tarefas foram divididas conforme as especialidades de cada membro, otimizando o paralelismo e a produtividade.
- **Jhonata** iniciou a estruturação do HTML e CSS, enquanto **Luiz Felipe** trabalhou na lógica em JavaScript em branches separadas.
- O **Tech Lead** acompanhava o progresso, revisava PRs e orientava sobre boas práticas.
- Para evitar conflitos, cada membro trabalhava em sua respectiva branch e realizava merges frequentes da `main` para manter o código atualizado.
- Em caso de conflitos, estes eram resolvidos em conjunto, priorizando a comunicação e o entendimento do impacto das alterações.

## 6. Testes e Garantia de Qualidade

- A **QA (Mylena)** foi responsável por planejar e executar testes manuais em todas as funcionalidades.
- Foram realizados testes de:
  - Operações corretas (soma, subtração, multiplicação, divisão)
  - Tratamento de erros (divisão por zero, entradas inválidas)
  - Responsividade da interface
  - Fluxo de uso contínuo (vários cálculos em sequência)
- A validação das funcionalidades era obrigatória antes do merge de qualquer PR.
- Bugs identificados eram reportados via issues e corrigidos em branches `bugfix/`.

## 7. Conclusão

O trabalho em equipe foi fundamental para o sucesso do projeto. A divisão clara de papéis, o uso disciplinado do Git e a comunicação constante permitiram um desenvolvimento eficiente e colaborativo. Os principais aprendizados envolveram o domínio do fluxo de trabalho Git, a importância dos code reviews e a necessidade de testes rigorosos para garantir a qualidade.

Como pontos de melhoria, destaca-se a possibilidade de automatizar testes no futuro e aprimorar ainda mais a documentação técnica. O projeto cumpriu todos os requisitos propostos e serviu como excelente prática de desenvolvimento colaborativo em equipe.
