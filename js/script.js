const examCard = {
  title: "Modo examen",
  description: "30 preguntas mixtas de todos los temas sin pistas de teoría. Resultados por tema al finalizar.",
  file: "pages/exam.html",
  isExam: true
};

const topics = [
  {
    title: "Tiempos verbales",
    description: "Present simple, past simple, past perfect y otros tiempos principales.",
    file: "pages/tiempos-verbales.html"
  },
  {
    title: "Reported speech",
    description: "Practica el estilo indirecto con declaraciones, preguntas y órdenes.",
    file: "pages/reported-speech.html"
  },
  {
    title: "Relative clauses",
    description: "Aprende a usar cláusulas relativas con who, which, where y más.",
    file: "pages/relative-clauses.html"
  },
  {
    title: "The passive and the causative",
    description: "Revisa la voz pasiva y estructuras causativas como have/get something done.",
    file: "pages/passive-causative.html"
  },
  {
    title: "Conditionals, wishes and regrets",
    description: "Condicionales y expresiones de deseos o arrepentimiento.",
    file: "pages/conditionals.html"
  },
  {
    title: "Modals verb",
    description: "Modal verbs como can, could, must, should y sus usos.",
    file: "pages/modals.html"
  },
  {
    title: "Verb structures (gerunds)",
    description: "Estructuras verbales con gerundios y formas verbales relacionadas.",
    file: "pages/verb-structures.html"
  }
];

const optionsGrid = document.getElementById("optionsGrid");

function createTopicCard(topic) {
  const card = document.createElement("a");
  card.className = topic.isExam ? "option-card option-card--exam" : "option-card";
  card.href = topic.file;
  card.innerHTML = `
    <div>
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
    </div>
    <small>${topic.isExam ? 'Iniciar examen' : 'Ir al tema'}</small>
  `;
  return card;
}

function renderTopics() {
  optionsGrid.appendChild(createTopicCard(examCard));
  topics.forEach((topic) => {
    optionsGrid.appendChild(createTopicCard(topic));
  });
}

renderTopics();
