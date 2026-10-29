# Contexto — Quiz de Afinidade Pedagógica — Raízes

## Projeto

Quiz autônomo para a Raízes — escola fictícia de educação infantil. O site institucional é feito no Webflow; o quiz é hospedado separadamente no GitHub Pages e abre por um link. Não há backend nem integração do quiz com Make.

## Estado atual

Aplicação estática em HTML semântico, CSS e JavaScript Vanilla. A apresentação, as três perguntas e o resultado usam agora o logotipo institucional incluído em `logo-raizes.png`. A imagem tem fundo transparente e é redimensionada por CSS para os cabeçalhos e para a tela inicial.

## Escopo e comportamento

- Estados: apresentação; questionário com uma pergunta por vez; resultado imediato.
- Três pilares: aprendizagem pelo brincar, natureza e autonomia. Cada alternativa vale 0, 1 ou 2.
- Afinidade: `Math.round((totalScore / 6) * 100)`. Faixas: 67–100 alta, 34–66 moderada, 0–33 propostas diferentes.
- Destacar até dois pilares com pelo menos 1 ponto, em ordem determinística; empate segue a ordem original. Com pontuação zero em todos, mostrar convite neutro.
- Respostas preservadas ao voltar; botão de avanço desabilitado até seleção; refazer reinicia integralmente.
- Resultado sem julgamento e com aviso de que é apenas aproximação ilustrativa, não avaliação da criança ou família e não determina matrícula.
- Acessibilidade: rádio em `fieldset` e `legend`, teclado, foco visível, conteúdo atualizado anunciado, contraste, movimento reduzido e adaptação móvel.
- Sem coleta, armazenamento, cookies, analytics, APIs ou dependências externas de JavaScript. Fontes Google Fonts podem ser carregadas com alternativas locais.
- `SCHOOL_URL` em `script.js` aponta para o contato definitivo do Webflow: `https://raizes----escola-de-educacao-infantil.webflow.io/#contato`.

## Identidade visual

Cores: verde `#455D36`, verde claro `#8E9B75`, terracota `#CD7956`, amarelo `#E6B351`, creme `#F9F5EC`, fundo suave `#EDF0E5`, branco `#FFFFFF`, texto secundário `#59624F` e borda `#E3E7DC`. Títulos Nunito, textos DM Sans. O logotipo Raízes está em `logo-raizes.png`.

## Publicação pendente

- Publicar no GitHub Pages e inserir a URL publicada e capturas no README.
- Publicar a raiz do repositório no GitHub Pages.
- Inserir a URL publicada e capturas no README.
