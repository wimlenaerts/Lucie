'use strict';

/* ── Vragen (voor 10-jarige Belgische meisjes) ── */
const ALL_QUESTIONS = [
  /* Dieren */
  { category: '🐾 Dieren', text: 'Hoeveel poten heeft een spin?', answers: ['6', '8', '4', '10'], correct: 1 },
  { category: '🐾 Dieren', text: 'Welk dier is het grootste op aarde?', answers: ['Olifant', 'Blauwe vinvis', 'Giraf', 'Neushoorn'], correct: 1 },
  { category: '🐾 Dieren', text: 'Hoe noem je een babykonijn?', answers: ['Welp', 'Kuiken', 'Jong konijn', 'Katje'], correct: 2 },
  { category: '🐾 Dieren', text: 'Welk dier maakt het geluid "blèren"?', answers: ['Koe', 'Schaap', 'Geit', 'Paard'], correct: 2 },
  { category: '🐾 Dieren', text: 'Welke vlinder is roze en zwart?', answers: ['Citroenvlinder', 'Koninginnenpage', 'Atalanta', 'Dagpauwoog'], correct: 3 },
  { category: '🐾 Dieren', text: 'Wat eet een panda het liefst?', answers: ['Appels', 'Bamboe', 'Vis', 'Gras'], correct: 1 },
  { category: '🐾 Dieren', text: 'Hoeveel tanden heeft een volwassen mens?', answers: ['28', '30', '32', '36'], correct: 2 },
  { category: '🐾 Dieren', text: 'Welk dier kan zijn kleur veranderen?', answers: ['Hagedis', 'Kameleont', 'Salamander', 'Krokodil'], correct: 1 },

  /* Natuur & Wetenschap */
  { category: '🌿 Natuur', text: 'Welke planeet is het dichtst bij de zon?', answers: ['Venus', 'Aarde', 'Mercurius', 'Mars'], correct: 2 },
  { category: '🌿 Natuur', text: 'Hoeveel kleuren heeft een regenboog?', answers: ['5', '6', '7', '8'], correct: 2 },
  { category: '🌿 Natuur', text: 'Wat is de grootste oceaan?', answers: ['Atlantische Oceaan', 'Indische Oceaan', 'Stille Oceaan', 'Arctische Oceaan'], correct: 2 },
  { category: '🌿 Natuur', text: 'Welke bloem is het symbool van België?', answers: ['Roos', 'Tulp', 'Madeliefje', 'Papaver'], correct: 0 },
  { category: '🌿 Natuur', text: 'Uit wat bestaat water?', answers: ['H3O', 'H2O', 'CO2', 'O2'], correct: 1 },
  { category: '🌿 Natuur', text: 'Wat is het grootste continent?', answers: ['Afrika', 'Amerika', 'Azië', 'Europa'], correct: 2 },
  { category: '🌿 Natuur', text: 'Hoeveel planeten heeft ons zonnestelsel?', answers: ['7', '8', '9', '10'], correct: 1 },

  /* België */
  { category: '🇧🇪 België', text: 'Wat is de hoofdstad van België?', answers: ['Antwerpen', 'Gent', 'Brussel', 'Luik'], correct: 2 },
  { category: '🇧🇪 België', text: 'Welk Belgisch stripfiguur is een detective?', answers: ['De Smurfen', 'Kuifje', 'Lucky Luke', 'Marsupilami'], correct: 1 },
  { category: '🇧🇪 België', text: 'Voor welk eten is België wereldberoemd?', answers: ['Pizza', 'Sushi', 'Chocolade', 'Hamburger'], correct: 2 },
  { category: '🇧🇪 België', text: 'Hoeveel kleuren heeft de Belgische vlag?', answers: ['2', '3', '4', '5'], correct: 1 },
  { category: '🇧🇪 België', text: 'In welke Belgische stad staat de Atomium?', answers: ['Gent', 'Antwerpen', 'Brussel', 'Brugge'], correct: 2 },
  { category: '🇧🇪 België', text: 'Welke taal spreken ze in Wallonië?', answers: ['Nederlands', 'Duits', 'Frans', 'Engels'], correct: 2 },
  { category: '🇧🇪 België', text: 'Welk beroemd feest begint elk jaar op 11 juli in Vlaanderen?', answers: ['Carnaval', 'Vlaamse Feestdag', 'Pasen', 'Sinterklaas'], correct: 1 },

  /* Muziek & Cultuur */
  { category: '🎵 Muziek', text: 'Hoeveel noten heeft een octaaf?', answers: ['6', '7', '8', '9'], correct: 2 },
  { category: '🎵 Muziek', text: 'Welk instrument heeft snaren én toetsen?', answers: ['Viool', 'Piano', 'Trompet', 'Fluit'], correct: 1 },
  { category: '🎵 Muziek', text: 'Hoe heet het bekendste kinderlied over ster?', answers: ['Bim bam belle', 'Twinkle twinkle', 'Vliegerlied', 'In de maneschijn'], correct: 1 },

  /* Sport */
  { category: '⚽ Sport', text: 'Hoeveel spelers staan er in een voetbalteam?', answers: ['9', '10', '11', '12'], correct: 2 },
  { category: '⚽ Sport', text: 'In welk land werd de Olympische Spelen uitgevonden?', answers: ['Italië', 'Griekenland', 'Egypte', 'Turkije'], correct: 1 },
  { category: '⚽ Sport', text: 'Hoeveel ringen heeft het Olympisch symbool?', answers: ['4', '5', '6', '7'], correct: 1 },

  /* Eten */
  { category: '🍕 Eten', text: 'Welke kleur heeft een rijpe banaan?', answers: ['Groen', 'Oranje', 'Geel', 'Rood'], correct: 2 },
  { category: '🍕 Eten', text: 'Wat is het hoofdingrediënt van guacamole?', answers: ['Tomaat', 'Avocado', 'Komkommer', 'Paprika'], correct: 1 },
  { category: '🍕 Eten', text: 'Van welk fruit wordt appelmoes gemaakt?', answers: ['Peer', 'Druif', 'Appel', 'Pruim'], correct: 2 },
];

/* ── Moeilijkheidsgraden ── */
const DIFFICULTY = {
  easy:   { time: 20, label: 'Makkelijk' },
  medium: { time: 15, label: 'Gemiddeld' },
  hard:   { time: 10, label: 'Moeilijk'  },
};

/* ── State ── */
let currentDiff    = 'easy';
let questions      = [];
let qIndex         = 0;
let score          = 0;
let timer          = null;
let timeLeft       = 15;
let answered       = false;
let results        = [];

/* ── Helpers ── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ── Timer ring ── */
const CIRC = 113; // 2πr met r=18
function setTimerRing(pct) {
  const circle = document.getElementById('timer-circle');
  if (!circle) return;
  circle.style.strokeDashoffset = (CIRC * (1 - pct)).toFixed(2);
  circle.style.stroke = pct > 0.5 ? '#2563eb' : pct > 0.25 ? '#f59e0b' : '#ef4444';
}

/* ── Start game ── */
function startGame() {
  questions = shuffle(ALL_QUESTIONS).slice(0, 10);
  qIndex    = 0;
  score     = 0;
  results   = [];
  showQuestion();
  show('screen-quiz');
}

/* ── Toon vraag ── */
function showQuestion() {
  answered = false;
  const q  = questions[qIndex];
  timeLeft = DIFFICULTY[currentDiff].time;

  document.getElementById('q-num').textContent      = `Vraag ${qIndex + 1} / 10`;
  document.getElementById('q-score').textContent    = `Score: ${score}`;
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-text').textContent     = q.text;
  document.getElementById('timer-num').textContent  = timeLeft;
  document.getElementById('feedback-bar').className = 'feedback-bar hidden';

  /* Progress */
  document.getElementById('progress-fill').style.width = (qIndex / 10 * 100) + '%';

  /* Antwoorden opbouwen */
  const grid = document.getElementById('answers-grid');
  grid.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = ans;
    btn.addEventListener('click', () => selectAnswer(i));
    grid.appendChild(btn);
  });

  setTimerRing(1);
  startTimer();
}

/* ── Timer ── */
function startTimer() {
  clearInterval(timer);
  const maxTime = DIFFICULTY[currentDiff].time;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer-num').textContent = timeLeft;
    setTimerRing(timeLeft / maxTime);
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (!answered) timeOut();
    }
  }, 1000);
}

function timeOut() {
  answered = true;
  const q = questions[qIndex];
  results.push({ correct: false, timedOut: true });
  showFeedback(false, q.answers[q.correct], '⏰ Tijd is om!');
  highlightCorrect(q.correct);
  setTimeout(nextQuestion, 1800);
}

/* ── Antwoord selecteren ── */
function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const q        = questions[qIndex];
  const isRight  = idx === q.correct;
  const btns     = document.querySelectorAll('.answer-btn');

  if (isRight) {
    score++;
    btns[idx].classList.add('correct');
    results.push({ correct: true, timedOut: false });
    showFeedback(true, '', '');
  } else {
    btns[idx].classList.add('wrong');
    highlightCorrect(q.correct);
    results.push({ correct: false, timedOut: false });
    showFeedback(false, q.answers[q.correct], '');
  }

  document.getElementById('q-score').textContent = `Score: ${score}`;
  setTimeout(nextQuestion, 1800);
}

function highlightCorrect(idx) {
  const btns = document.querySelectorAll('.answer-btn');
  if (btns[idx]) btns[idx].classList.add('correct');
}

function showFeedback(correct, correctAns, extra) {
  const bar  = document.getElementById('feedback-bar');
  const icon = document.getElementById('feedback-icon');
  const txt  = document.getElementById('feedback-text');
  const cor  = document.getElementById('feedback-correct');

  bar.className = 'feedback-bar ' + (correct ? 'fb-correct' : 'fb-wrong');
  icon.textContent = correct ? '✓' : (extra ? extra[0] : '✗');
  txt.textContent  = correct
    ? ['Super goed! 🌟', 'Fantastisch! 🎉', 'Geweldig! ⭐', 'Bravo! 🦋', 'Top! 💜'][Math.floor(Math.random() * 5)]
    : (extra || 'Helaas, dat was fout!');
  cor.textContent  = correctAns ? `Het juiste antwoord was: ${correctAns}` : '';
}

/* ── Volgende vraag ── */
function nextQuestion() {
  qIndex++;
  if (qIndex >= 10) {
    showResult();
  } else {
    showQuestion();
  }
}

/* ── Resultaat ── */
function showResult() {
  clearInterval(timer);
  document.getElementById('progress-fill').style.width = '100%';

  const pct = score / 10;
  let emoji, title, sub;

  if (pct === 1)       { emoji = '🏆'; title = 'Perfect! Je bent een echte quizkampioen!'; }
  else if (pct >= 0.8) { emoji = '🌟'; title = 'Wauw, super goed gedaan!'; }
  else if (pct >= 0.6) { emoji = '😊'; title = 'Goed geprobeerd!'; }
  else if (pct >= 0.4) { emoji = '🤔'; title = 'Oefening baart kunst!'; }
  else                 { emoji = '💪'; title = 'Probeer het nog een keer!'; }

  sub = `Je hebt ${score} van de 10 vragen goed beantwoord.`;

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent  = title;
  document.getElementById('result-score').textContent  = score;
  document.getElementById('result-sub').textContent    = sub;

  /* Animated score arc */
  const arc = document.getElementById('result-arc');
  const DASH = 314;
  setTimeout(() => {
    arc.style.transition = 'stroke-dashoffset 1s ease';
    arc.style.strokeDashoffset = (DASH * (1 - pct)).toFixed(1);
    arc.style.stroke = pct >= 0.8 ? '#059669' : pct >= 0.5 ? '#2563eb' : '#f59e0b';
  }, 100);

  /* Stats */
  const correct  = results.filter(r => r.correct).length;
  const wrong    = results.filter(r => !r.correct && !r.timedOut).length;
  const timedOut = results.filter(r => r.timedOut).length;
  const stats = document.getElementById('result-stats');
  stats.innerHTML = `
    <div class="stat"><span class="stat-val green">${correct}</span><span class="stat-lbl">Goed</span></div>
    <div class="stat"><span class="stat-val red">${wrong}</span><span class="stat-lbl">Fout</span></div>
    <div class="stat"><span class="stat-val amber">${timedOut}</span><span class="stat-lbl">Tijd op</span></div>
  `;

  show('screen-result');
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  /* Moeilijkheid */
  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiff = btn.dataset.diff;
    });
  });

  document.getElementById('btn-start').addEventListener('click', startGame);

  document.getElementById('btn-restart').addEventListener('click', startGame);

  document.getElementById('btn-menu').addEventListener('click', () => {
    clearInterval(timer);
    show('screen-start');
  });
});
