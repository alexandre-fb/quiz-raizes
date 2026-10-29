# Quiz de Afinidade Pedagógica — Raízes

Quiz leve e responsivo para que responsáveis conheçam a conexão entre suas preferências para a educação infantil e a proposta pedagógica da Raízes — escola que valoriza o contato com a natureza, a autonomia infantil, o acolhimento e a aprendizagem por meio de brincadeiras.

## Problema que resolve

O quiz apresenta os valores pedagógicos da escola de forma rápida e acolhedora. Ele ajuda cada família a refletir sobre suas expectativas e oferece um convite para conhecer melhor a rotina da Raízes. O resultado é ilustrativo e não determina possibilidade de matrícula.

## Funcionalidades

- Apresentação com estimativa de duração e acesso direto ao questionário.
- Três perguntas, exibidas uma por vez, com alternativas em controles de rádio acessíveis.
- Navegação de voltar e continuar, preservando as respostas durante o percurso.
- Resultado imediato com percentual ilustrativo, faixa de afinidade e até dois pilares de maior conexão.
- Ação para conhecer a escola e opção de refazer o quiz.
- Layout adaptado a dispositivos móveis, foco visível e respeito à preferência por movimento reduzido.
- Sem backend, cookies, analytics, coleta de dados ou dependências JavaScript.

## Tecnologias

HTML5 semântico, CSS3 com variáveis e JavaScript Vanilla (ES6+). As fontes Nunito e DM Sans são carregadas do Google Fonts; fontes alternativas do sistema são declaradas no CSS. O logotipo institucional está no arquivo `logo-raizes.png` e é usado na apresentação, no questionário e no resultado.

## Lógica de afinidade

Cada resposta vale 0, 1 ou 2 pontos. A soma máxima é 6. O percentual é calculado por `Math.round((totalScore / 6) * 100)`. A classificação é alta entre 67% e 100%, moderada entre 34% e 66%, e propostas diferentes entre 0% e 33%. Os pilares são ordenados por pontuação e, em empate, mantêm a ordem das perguntas; são exibidos até dois com pelo menos 1 ponto. Se todos tiverem zero, aparece um convite neutro.

## Personalizações

- **HTML (`index.html`):** textos, título, descrição, metadados e estrutura semântica da experiência.
- **CSS (`style.css`):** cores e demais tokens visuais, tipografia, espaçamento, formas, estados interativos e regras responsivas.
- **JavaScript (`script.js`):** perguntas, alternativas e pontuação, URL do contato, navegação, cálculo, faixas e texto personalizado do resultado.

O botão de contato aponta para `https://raizes----escola-de-educacao-infantil.webflow.io/#contato`. Para alterar o destino, edite `SCHOOL_URL` no início de `script.js`. Respostas e percentuais não são enviados pela URL.

## Executar localmente

1. Baixe ou clone este repositório.
2. Abra `index.html` diretamente no navegador. Não é necessário instalar dependências nem executar build.

## Publicar no GitHub Pages

1. Envie estes arquivos para um repositório GitHub.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch principal e a pasta `/ (root)`, e salve.
4. Aguarde a publicação e use a URL apresentada pelo GitHub Pages. O projeto é estático e não requer build.

## Integração com o Webflow

O quiz complementa um site institucional no-code desenvolvido no Webflow. Publique o quiz no GitHub Pages e adicione no site principal um botão ou link que leve à URL publicada. O botão “Quero conhecer a Raízes” do quiz retorna ao endereço do Webflow configurado em `SCHOOL_URL`, diretamente na seção de contato. O formulário já existente no Webflow pode continuar integrado ao Make e ao Google Sheets; o quiz não transmite respostas pessoais nem requer integração com esses serviços.

## Publicação e capturas

- **URL publicada:** _adicione aqui a URL do GitHub Pages_
- **Captura da apresentação:** _adicione aqui uma imagem_
- **Captura da pergunta:** _adicione aqui uma imagem_
- **Captura do resultado:** _adicione aqui uma imagem_
