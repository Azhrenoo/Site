document.addEventListener('DOMContentLoaded', function () {
  // Handle tab switching between difficulty levels
  const tabButtons = document.querySelectorAll('.tab-button');
  const sections = document.querySelectorAll('.accordion-section');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');

      tabButtons.forEach(btn => btn.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Accordion toggle behavior
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach((accordion, index) => {
    const header = accordion.querySelector('.accordion-header');
    if (index === 0) {
      accordion.classList.add('active');
    }
    header.addEventListener('click', () => {
      accordion.classList.toggle('active');
    });
  });

  // Quiz functionality
  const submitButton = document.querySelector('.submit-quiz');
  const quizResult = document.querySelector('.quiz-result');

  if (submitButton) {
    submitButton.addEventListener('click', () => {
      let score = 0;
      const answers = {
        q1: 'A',
        q2: 'B',
      };

      for (let key in answers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
          score++;
        }
      }

      quizResult.textContent = `نتيجتك: ${score} من ${Object.keys(answers).length}`;
    });
  }
});
