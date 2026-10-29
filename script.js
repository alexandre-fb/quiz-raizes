const SCHOOL_URL = 'https://raizes----escola-de-educacao-infantil.webflow.io/#contato';

const questions = [
  {
    pillar: 'Aprendizagem pelo brincar',
    shortName: 'Brincar e aprender',
    icon: '✳',
    prompt: 'O que você mais valoriza na rotina de aprendizagem da criança?',
    options: [
      { text: 'Aprender por meio de brincadeiras e descobertas.', score: 2 },
      { text: 'Equilibrar brincadeiras com atividades dirigidas.', score: 1 },
      { text: 'Priorizar atividades formais e estruturadas.', score: 0 }
    ]
  },
  {
    pillar: 'Natureza',
    shortName: 'Natureza',
    icon: '❋',
    prompt: 'Qual a importância do contato com a natureza na educação infantil?',
    options: [
      { text: 'Fundamental para o desenvolvimento e as descobertas.', score: 2 },
      { text: 'Importante, mas não precisa acontecer diariamente.', score: 1 },
      { text: 'Prefiro que a maior parte das atividades aconteça em sala.', score: 0 }
    ]
  },
  {
    pillar: 'Autonomia',
    shortName: 'Autonomia',
    icon: '↗',
    prompt: 'Como você acredita que a criança deve participar das decisões do dia a dia?',
    options: [
      { text: 'Tendo liberdade para explorar e fazer escolhas acompanhadas.', score: 2 },
      { text: 'Equilibrando escolhas próprias com orientações dos adultos.', score: 1 },
      { text: 'Seguindo principalmente atividades definidas pelos educadores.', score: 0 }
    ]
  }
];

const screens = {
  intro: document.querySelector('#intro-screen'),
  quiz: document.querySelector('#quiz-screen'),
  result: document.querySelector('#result-screen')
};
const startButton = document.querySelector('#start-button');
const backButton = document.querySelector('#back-button');
const continueButton = document.querySelector('#continue-button');
const restartButton = document.querySelector('#restart-button');
const questionContent = document.querySelector('#question-content');
const questionTitle = document.querySelector('#question-title');
const questionPillar = document.querySelector('#question-pillar');
const answerList = document.querySelector('#answer-list');
const stepLabel = document.querySelector('#step-label');
const progressTrack = document.querySelector('#progress-track');
const progressFill = document.querySelector('#progress-fill');
const contactButton = document.querySelector('#contact-button');

let currentQuestion = 0;
const answers = Array(questions.length).fill(null);
contactButton.href = SCHOOL_URL;

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => { screen.hidden = key !== name; });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  stepLabel.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  questionPillar.textContent = `Pilar 0${currentQuestion + 1} · ${question.pillar}`;
  questionTitle.textContent = question.prompt;
  progressTrack.setAttribute('aria-valuenow', String(currentQuestion + 1));
  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  backButton.disabled = currentQuestion === 0;
  continueButton.innerHTML = currentQuestion === questions.length - 1
    ? 'Ver meu resultado <span aria-hidden="true">→</span>'
    : 'Continuar <span aria-hidden="true">→</span>';
  answerList.replaceChildren();

  question.options.forEach((option, optionIndex) => {
    const label = document.createElement('label');
    label.className = 'answer-option';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${currentQuestion}`;
    input.value = String(optionIndex);
    input.checked = answers[currentQuestion] === optionIndex;
    input.addEventListener('change', () => {
      answers[currentQuestion] = optionIndex;
      continueButton.disabled = false;
    });
    const card = document.createElement('span');
    card.className = 'answer-card';
    const marker = document.createElement('span');
    marker.className = 'radio-mark';
    marker.setAttribute('aria-hidden', 'true');
    const text = document.createElement('span');
    text.className = 'answer-text';
    text.textContent = option.text;
    card.append(marker, text);
    label.append(input, card);
    answerList.append(label);
  });

  continueButton.disabled = answers[currentQuestion] === null;
  questionContent.focus();
}

function getAffinity() {
  const totalScore = answers.reduce((total, answer, index) => total + questions[index].options[answer].score, 0);
  return { totalScore, affinity: Math.round((totalScore / 6) * 100) };
}

function renderResult() {
  const { totalScore, affinity } = getAffinity();
  const result = affinity >= 67
    ? { level: 'Alta afinidade', title: 'Parece que temos muito em comum!', description: 'Suas preferências estão bastante alinhadas com nossa forma de educar, que valoriza o brincar, a natureza e a autonomia infantil.' }
    : affinity >= 34
      ? { level: 'Afinidade moderada', title: 'Compartilhamos alguns valores!', description: 'Temos pontos em comum, e conhecer melhor nossa rotina pode ajudar você a entender como colocamos nossa proposta pedagógica em prática.' }
      : { level: 'Propostas diferentes', title: 'Vamos conhecer melhor nossas propostas?', description: 'Cada família possui expectativas diferentes. Na Raízes, valorizamos a aprendizagem por experiências, o contato com a natureza e a autonomia. Que tal conhecer nossa maneira de educar?' };

  document.querySelector('#result-level').textContent = result.level;
  document.querySelector('#result-title').textContent = result.title;
  document.querySelector('#result-description').textContent = result.description;
  document.querySelector('#score-value').textContent = `${affinity}%`;

  const alignedPillars = questions
    .map((question, index) => ({ ...question, score: question.options[answers[index]].score }))
    .filter((question) => question.score >= 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  const pillarList = document.querySelector('#pillar-list');
  const connectionCopy = document.querySelector('#connection-copy');
  pillarList.replaceChildren();
  if (totalScore === 0) {
    connectionCopy.textContent = 'Venha conhecer nossa proposta pedagógica e descobrir como o brincar, a natureza e a autonomia fazem parte do cotidiano.';
  } else {
    alignedPillars.forEach((pillar) => {
      const chip = document.createElement('span');
      chip.className = 'pillar-chip';
      const icon = document.createElement('span');
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = pillar.icon;
      chip.append(icon, document.createTextNode(pillar.shortName));
      pillarList.append(chip);
    });
    const names = alignedPillars.map((pillar) => pillar.shortName.toLowerCase());
    connectionCopy.textContent = names.length === 1
      ? `Você valoriza ${names[0]}. Esse princípio faz parte da proposta da Raízes.`
      : `Você valoriza ${names[0]} e ${names[1]}. Esses princípios fazem parte da proposta da Raízes.`;
  }
  showScreen('result');
  document.querySelector('#result-title').focus?.();
}

startButton.addEventListener('click', () => {
  currentQuestion = 0;
  showScreen('quiz');
  renderQuestion();
});

backButton.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

continueButton.addEventListener('click', () => {
  if (answers[currentQuestion] === null) return;
  if (currentQuestion === questions.length - 1) {
    renderResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

restartButton.addEventListener('click', () => {
  answers.fill(null);
  currentQuestion = 0;
  showScreen('intro');
  startButton.focus();
});
