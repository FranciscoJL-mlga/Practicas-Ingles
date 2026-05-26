
    const exerciseSections = {
      gap: {
        label: 'Completar directo a indirecto',
        theory: '<table class="theory-table"><thead><tr><th>Directo</th><th>Indirecto</th></tr></thead><tbody><tr><td>Present simple</td><td>Past simple</td></tr><tr><td>Present continuous</td><td>Past continuous</td></tr><tr><td>Present perfect</td><td>Past perfect</td></tr><tr><td>Will</td><td>Would</td></tr><tr><td>Can / may</td><td>Could / might</td></tr></tbody></table>',
        type: 'text',
        items: [
          { prompt: 'Direct speech: "I am tired," she said. Reported speech: She said that she ______ tired.', answer: 'was', explanation: 'En estilo indirecto, el presente se convierte en pasado simple.' },
          { prompt: 'Direct speech: "I have finished my work," he said. Reported speech: He said that he ______ finished his work.', answer: 'had', explanation: 'En reported speech, present perfect cambia a past perfect.' },
          { prompt: 'Direct speech: "I will call you later," she said. Reported speech: She said that she ______ call me later.', answer: 'would', explanation: 'El futuro simple se convierte en would en estilo indirecto.' },
          { prompt: 'Direct speech: "I am going home," he said. Reported speech: He said that he ______ going home.', answer: 'was', explanation: 'El presente continuo cambia a past continuous.' },
          { prompt: 'Direct speech: "I have been working hard," she said. Reported speech: She said that she ______ been working hard.', answer: 'had', explanation: 'El present perfect continuous se transforma en past perfect continuous.' },
          { prompt: 'Direct speech: "I can’t come tomorrow," she said. Reported speech: She said that she ______ come tomorrow.', answer: 'could', explanation: 'El modal can cambia a could en estilo indirecto.' },
          { prompt: 'Direct speech: "I may join you later," he said. Reported speech: He said that he ______ join us later.', answer: 'might', explanation: 'May cambia a might en reported speech con cambio de tiempo.' },
          { prompt: 'Direct speech: "I am buying a ticket," she said. Reported speech: She said that she ______ buying a ticket.', answer: 'was', explanation: 'El presente continuo cambia a pasado continuo en estilo indirecto.' },
          { prompt: 'Direct speech: "I have never seen that film," he said. Reported speech: He said that he ______ never seen that film.', answer: 'had', explanation: 'El present perfect se convierte en past perfect con never.' },
          { prompt: 'Direct speech: "I will be there at six," she said. Reported speech: She said that she ______ be there at six.', answer: 'would', explanation: 'El futuro simple del orador directo cambia a would en estilo indirecto.' }
        ]
      },
      gapReverse: {
        label: 'Completar indirecto a directo',
        theory: '<table class="theory-table"><thead><tr><th>Indirecto</th><th>Directo</th></tr></thead><tbody><tr><td>Past simple</td><td>Present simple</td></tr><tr><td>Past continuous</td><td>Present continuous</td></tr><tr><td>Past perfect</td><td>Present perfect</td></tr><tr><td>Would</td><td>Will</td></tr><tr><td>Could / might</td><td>Can / may</td></tr></tbody></table>',
        type: 'text',
        items: [
          { prompt: 'Reported speech: She said that she was tired. Direct speech: She said, "I ______ tired."', answer: 'am', explanation: 'Al pasar a estilo directo, el pasado simple vuelve a presente simple cuando el verbo de introducción está en pasado.' },
          { prompt: 'Reported speech: He said that he had finished his work. Direct speech: He said, "I ______ finished my work."', answer: 'have', explanation: 'El past perfect en estilo indirecto vuelve a present perfect en directo.' },
          { prompt: 'Reported speech: She said that she would call me later. Direct speech: She said, "I ______ call you later."', answer: 'will', explanation: 'Would en estilo indirecto se convierte en will en estilo directo.' },
          { prompt: 'Reported speech: He said that he was going home. Direct speech: He said, "I ______ going home."', answer: 'am', explanation: 'El pasado continuo en estilo indirecto vuelve a presente continuo en directo.' },
          { prompt: 'Reported speech: She said that she had been working hard. Direct speech: She said, "I ______ been working hard."', answer: 'have', explanation: 'El past perfect continuous se convierte en present perfect continuous en estilo directo.' },
          { prompt: 'Reported speech: She said that she could not come tomorrow. Direct speech: She said, "I ______ come tomorrow."', answer: 'can', explanation: 'Could en estilo indirecto vuelve a can en estilo directo.' },
          { prompt: 'Reported speech: He said that he might join us later. Direct speech: He said, "I ______ join you later."', answer: 'may', explanation: 'Might en estilo indirecto se convierte en may en estilo directo.' },
          { prompt: 'Reported speech: She said that she was cooking dinner. Direct speech: She said, "I ______ cooking dinner."', answer: 'am', explanation: 'El pasado continuo indirecto vuelve a presente continuo directo.' },
          { prompt: 'Reported speech: They said that they had seen that movie. Direct speech: They said, "We ______ seen that movie."', answer: 'have', explanation: 'El past perfect se convierte en present perfect en el estilo directo.' },
          { prompt: 'Reported speech: He said that he would help me. Direct speech: He said, "I ______ help you."', answer: 'will', explanation: 'El would en indirecto vuelve a will en directo.' }
        ]
      },
      choice: {
        label: 'Opción múltiple',
        theory: '<table class="theory-table"><thead><tr><th>Tipo</th><th>Cambio típico</th></tr></thead><tbody><tr><td>Present simple</td><td>Past simple</td></tr><tr><td>Present continuous</td><td>Past continuous</td></tr><tr><td>Present perfect</td><td>Past perfect</td></tr><tr><td>Will / can / may</td><td>Would / could / might</td></tr></tbody></table>',
        type: 'choice',
        items: [
          { prompt: 'He said: "I have lost my keys." Reported speech: He said that he ____ lost his keys.', options: ['has', 'had', 'have'], answer: 'b', explanation: 'El present perfect se convierte en past perfect en estilo indirecto.' },
          { prompt: 'She said: "I am visiting my aunt." Reported speech: She said that she ____ visiting her aunt.', options: ['is', 'was', 'will'], answer: 'b', explanation: 'El presente continuo cambia a pasado continuo.' },
          { prompt: 'They said: "We will finish tomorrow." Reported speech: They said that they ____ finish tomorrow.', options: ['would', 'will', 'could'], answer: 'a', explanation: 'El futuro simple reportado se convierte en would.' },
          { prompt: 'He said: "I can speak French." Reported speech: He said that he ____ speak French.', options: ['could', 'can', 'would'], answer: 'a', explanation: 'El modal can cambia a could en estilo indirecto.' },
          { prompt: 'She said: "I have been waiting here." Reported speech: She said that she ____ been waiting here.', options: ['had', 'has', 'have'], answer: 'a', explanation: 'El present perfect continuous se pasa a past perfect continuous.' },
          { prompt: 'He said: "I may arrive late." Reported speech: He said that he ____ arrive late.', options: ['might', 'may', 'must'], answer: 'a', explanation: 'May cambia a might en estilo indirecto para mantener el significado de posibilidad.' },
          { prompt: 'She said: "I am tired." Reported speech: She said that she ____ tired.', options: ['was', 'is', 'will'], answer: 'a', explanation: 'El presente simple se traslada a pasado simple.' },
          { prompt: 'They said: "We have seen that movie." Reported speech: They said that they ____ seen that movie.', options: ['had', 'have', 'has'], answer: 'a', explanation: 'El present perfect se convierte en past perfect en reported speech.' },
          { prompt: 'He said: "I will help you." Reported speech: He said that he ____ help me.', options: ['would', 'will', 'can'], answer: 'a', explanation: 'El futuro simple directo pasa a would en estilo indirecto.' },
          { prompt: 'She said: "I am cooking dinner." Reported speech: She said that she ____ cooking dinner.', options: ['was', 'is', 'will'], answer: 'a', explanation: 'El presente continuo cambia a pasado continuo en estilo indirecto.' }
        ]
      },
      error: {
        label: 'Corregir el error',
        theory: '<table class="theory-table"><thead><tr><th>Problema</th><th>Regla</th></tr></thead><tbody><tr><td>Verbo introductorio en pasado</td><td>El tiempo de la oración reportada puede retroceder.</td></tr><tr><td>Modalidad</td><td>Can → could, may → might, must → had to.</td></tr><tr><td>Estilo indirecto</td><td>No se usan comillas; se usa that o frase subordinada.</td></tr></tbody></table>',
        type: 'text',
        items: [
          { prompt: 'Direct speech: "I am hungry," he said. Reported speech: He said that he is hungry.', answer: 'He said that he was hungry.', explanation: 'Cuando el verbo introductorio está en pasado, el presente se cambia a pasado.' },
          { prompt: 'Direct speech: "I have been waiting," she said. Reported speech: She said that she has been waiting.', answer: 'She said that she had been waiting.', explanation: 'El present perfect continuous cambia a past perfect continuous.' },
          { prompt: 'Direct speech: "I can’t come," he said. Reported speech: He said that he can’t come.', answer: 'He said that he couldn’t come.', explanation: 'El modal can en estilo directo cambia a couldn’t en estilo indirecto.' },
          { prompt: 'Direct speech: "I will arrive soon," she said. Reported speech: She said that she will arrive soon.', answer: 'She said that she would arrive soon.', explanation: 'El future simple se transforma en would en reported speech.' },
          { prompt: 'Direct speech: "I am reading a book," he said. Reported speech: He said that he am reading a book.', answer: 'He said that he was reading a book.', explanation: 'El presente continuo cambia a pasado continuo.' },
          { prompt: 'Direct speech: "I have seen that film," she said. Reported speech: She said that she have seen that film.', answer: 'She said that she had seen that film.', explanation: 'El present perfect en estilo directo pasa a past perfect.' },
          { prompt: 'Direct speech: "I may come later," he said. Reported speech: He said that he may come later.', answer: 'He said that he might come later.', explanation: 'May cambia a might en estilo indirecto para mantener la posibilidad en pasado.' },
          { prompt: 'Direct speech: "We are leaving now," they said. Reported speech: They said that they are leaving now.', answer: 'They said that they were leaving now.', explanation: 'El presente continuo se convierte en pasado continuo cuando el verbo introductorio está en pasado.' },
          { prompt: 'Direct speech: "I must finish this," she said. Reported speech: She said that she must finish this.', answer: 'She said that she had to finish this.', explanation: 'Must suele cambiar a had to en estilo indirecto pasado.' },
          { prompt: 'Direct speech: "I am going to study," he said. Reported speech: He said that he is going to study.', answer: 'He said that he was going to study.', explanation: 'El going to en presente cambia a was going to en estilo indirecto pasado.' }
        ]
      }
    };

    const quizState = {
      startTime: 0,
      totalScore: 0,
      completedSections: 0,
      sectionResults: {},
      currentSection: null,
      currentIndex: 0,
      currentSectionScore: 0,
      sectionWrong: 0,
      sectionStartTime: 0,
      totalTimeSeconds: 0,
      questionChecked: false
    };

    let timerInterval = null;

    function formatTime(seconds) {
      const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
      const remaining = String(seconds % 60).padStart(2, '0');
      return `${minutes}:${remaining}`;
    }

    function updateStatus() {
      const elapsedSeconds = quizState.sectionStartTime ? Math.floor((Date.now() - quizState.sectionStartTime) / 1000) : 0;
      document.getElementById('timer').textContent = formatTime(elapsedSeconds);
      document.getElementById('total-score').textContent = quizState.totalScore;
      document.getElementById('progress').textContent = `${quizState.completedSections} / ${Object.keys(exerciseSections).length} secciones`;
    }

    function startTimer() {
      if (timerInterval) clearInterval(timerInterval);
      quizState.sectionStartTime = Date.now();
      timerInterval = setInterval(updateStatus, 500);
      updateStatus();
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      if (quizState.sectionStartTime) {
        quizState.totalTimeSeconds += Math.floor((Date.now() - quizState.sectionStartTime) / 1000);
        quizState.sectionStartTime = 0;
      }
    }

    function normalizeText(text) {
      return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[’'”“".,?¡!¿:;-]/g, '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, ' ');
    }

    function showStartScreen() {
      document.getElementById('start-screen').classList.remove('hidden');
      document.getElementById('quiz-screen').classList.add('hidden');
      document.getElementById('final-summary').textContent = '';
      document.getElementById('section-summary').textContent = '';
      document.getElementById('question-feedback').textContent = '';
      document.getElementById('choose-another').classList.add('hidden');
      document.getElementById('finish-button').classList.add('hidden');
      document.getElementById('next-button').textContent = 'Comprobar y siguiente';
    }

    function startSection(sectionKey) {
      quizState.currentSection = sectionKey;
      quizState.currentIndex = 0;
      quizState.currentSectionScore = 0;
      quizState.sectionWrong = 0;
      quizState.questionChecked = false;
      document.getElementById('start-screen').classList.add('hidden');
      document.getElementById('quiz-screen').classList.remove('hidden');
      document.getElementById('current-type-label').textContent = exerciseSections[sectionKey].label;
      document.getElementById('current-question-title').textContent = 'Responde una pregunta a la vez';
      document.getElementById('finish-button').classList.add('hidden');
      document.getElementById('next-button').classList.remove('hidden');
      startTimer();
      showCurrentQuestion();
    }

    function showCurrentQuestion() {
      const sectionKey = quizState.currentSection;
      const section = exerciseSections[sectionKey];
      const item = section.items[quizState.currentIndex];
      const questionArea = document.getElementById('question-area');
      const feedback = document.getElementById('question-feedback');
      questionArea.innerHTML = '';
      document.getElementById('section-summary').textContent = '';
      feedback.textContent = '';
      feedback.classList.remove('visible', 'correct', 'wrong');

      if (!item) {
        return completeSection();
      }

      const prompt = document.createElement('p');
      prompt.className = 'question-prompt';
      prompt.textContent = `${quizState.currentIndex + 1}. ${item.prompt}`;
      questionArea.appendChild(prompt);

      if (section.theory) {
        const theory = document.createElement('div');
        theory.className = 'theory-box';
        theory.innerHTML = `<strong>Cuadro explicativo</strong><div class="theory-content">${section.theory}</div>`;
        questionArea.appendChild(theory);
      }

      if (section.type === 'choice') {
        const options = document.createElement('div');
        options.className = 'choice-options';
        item.options.forEach((option, index) => {
          const optionId = `choice-${quizState.currentIndex}-${index}`;
          const label = document.createElement('label');
          label.className = 'choice-label';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = 'answer';
          radio.value = String.fromCharCode(97 + index);
          radio.id = optionId;
          radio.className = 'choice-input';

          const text = document.createElement('span');
          text.textContent = `${String.fromCharCode(97 + index)}) ${option}`;

          label.appendChild(radio);
          label.appendChild(text);
          options.appendChild(label);
        });
        questionArea.appendChild(options);
      } else {
        const input = section.type === 'textarea' ? document.createElement('textarea') : document.createElement('input');
        input.className = section.type === 'textarea' ? 'exercise-textarea' : 'exercise-input';
        input.type = 'text';
        input.id = 'answer-input';
        input.autocomplete = 'off';
        input.placeholder = 'Escribe tu respuesta aquí';
        questionArea.appendChild(input);
        input.focus();
      }

      if (quizState.currentIndex === exerciseSections[sectionKey].items.length - 1) {
        document.getElementById('next-button').textContent = 'Comprobar y terminar';
      } else {
        document.getElementById('next-button').textContent = 'Comprobar y siguiente';
      }
      document.getElementById('finish-button').classList.add('hidden');
    }

    function evaluateAnswer() {
      const sectionKey = quizState.currentSection;
      const section = exerciseSections[sectionKey];
      const item = section.items[quizState.currentIndex];
      const feedback = document.getElementById('question-feedback');
      const nextButton = document.getElementById('next-button');
      const isLastQuestion = quizState.currentIndex === section.items.length - 1;

      if (!quizState.questionChecked) {
        let userAnswer = '';
        if (section.type === 'choice') {
          const selected = document.querySelector('input[name="answer"]:checked');
          userAnswer = selected ? selected.value : '';
        } else {
          const input = document.getElementById('answer-input');
          userAnswer = normalizeText(input.value);
        }

        const correctAnswer = section.type === 'choice' ? item.answer : normalizeText(item.answer);
        const explanation = item.explanation || `La respuesta correcta es "${item.answer}".`;

        if (userAnswer === correctAnswer) {
          quizState.totalScore += 12;
          quizState.currentSectionScore += 12;
          feedback.textContent = `Correcto. +12 puntos. Explicación: ${explanation}`;
          feedback.classList.add('correct', 'visible');
          feedback.classList.remove('wrong');
        } else {
          quizState.totalScore -= 5;
          quizState.sectionWrong += 1;
          feedback.textContent = `Incorrecto. Respuesta correcta: ${item.answer}. -5 puntos. Explicación: ${explanation}`;
          feedback.classList.add('wrong', 'visible');
          feedback.classList.remove('correct');
        }

        quizState.questionChecked = true;
        nextButton.textContent = isLastQuestion ? 'Finalizar sección' : 'Siguiente pregunta';
        if (isLastQuestion) {
          document.getElementById('finish-button').classList.remove('hidden');
        }
        updateStatus();
        return;
      }

      quizState.currentIndex += 1;
      quizState.questionChecked = false;
      if (isLastQuestion) {
        completeSection();
      } else {
        showCurrentQuestion();
      }
    }

    function completeSection() {
      const elapsedSeconds = quizState.sectionStartTime ? Math.floor((Date.now() - quizState.sectionStartTime) / 1000) : 0;
      const sectionLength = exerciseSections[quizState.currentSection].items.length;
      const timeBonus = Math.max(0, Math.round(sectionLength * 3 - elapsedSeconds * 0.5));
      stopTimer();
      quizState.totalScore += timeBonus;
      quizState.completedSections += 1;
      quizState.sectionResults[quizState.currentSection] = true;
      const sectionSummary = document.getElementById('section-summary');
      sectionSummary.textContent = `Sección finalizada. Puntos de esta sección: ${quizState.currentSectionScore}. Tiempo: ${formatTime(elapsedSeconds)}. Bonificación por rapidez: +${timeBonus}. Errores: ${quizState.sectionWrong}.`;
      document.getElementById('choose-another').classList.remove('hidden');
      document.getElementById('next-button').classList.add('hidden');
      document.getElementById('finish-button').classList.add('hidden');
      updateStatus();
      showStartScreen();
    }

    function finishSectionEarly() {
      completeSection();
    }

    function resetQuiz() {
      stopTimer();
      quizState.totalScore = 0;
      quizState.completedSections = 0;
      quizState.sectionResults = {};
      quizState.currentSection = null;
      quizState.currentIndex = 0;
      quizState.currentSectionScore = 0;
      quizState.sectionWrong = 0;
      quizState.questionChecked = false;
      document.getElementById('next-button').classList.remove('hidden');
      document.getElementById('finish-button').classList.remove('hidden');
      showStartScreen();
      updateStatus();
    }

    function renderSectionChooser() {
      const chooser = document.getElementById('section-chooser');
      chooser.innerHTML = '';

      Object.keys(exerciseSections).forEach((key) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'section-card';
        card.textContent = exerciseSections[key].label;
        card.addEventListener('click', () => startSection(key));
        chooser.appendChild(card);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderSectionChooser();
      document.getElementById('reset-quiz').addEventListener('click', resetQuiz);
      document.getElementById('next-button').addEventListener('click', evaluateAnswer);
      document.getElementById('finish-button').addEventListener('click', finishSectionEarly);
      document.getElementById('choose-another').addEventListener('click', showStartScreen);
    });
  