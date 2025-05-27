const TOTAL_QUESTIONS = 10;

const allQuestions = [
    {
    "question": "What was Pluto originally classified as?",
    "choices": ["A star", "A moon", "A planet", "A comet"],
    "answer": "A planet",
    "fact": "Pluto used to be the 9th planet before being reclassified as a dwarf planet in 2006."
  },
  {
    "question": "What is Pluto’s largest moon called?",
    "choices": ["Luna", "Titan", "Charon", "Europa"],
    "answer": "Charon",
    "fact": "Charon is so big that Pluto and Charon are sometimes called a double planet."
  },
  {
    "question": "What special feature does Pluto have on its surface?",
    "choices": ["A volcano", "A heart-shaped icy area", "A canyon", "A forest"],
    "answer": "A heart-shaped icy area",
    "fact": "Pluto has a giant icy region shaped like a heart called Tombaugh Regio."
  },
  {
    "question": "How long is one year on Pluto?",
    "choices": ["1 Earth year", "10 Earth years", "100 Earth years", "248 Earth years"],
    "answer": "248 Earth years",
    "fact": "Pluto takes 248 Earth years to orbit the Sun once!"
  },
  {
    "question": "Eris is very similar in size to which other dwarf planet?",
    "choices": ["Ceres", "Haumea", "Makemake", "Pluto"],
    "answer": "Pluto",
    "fact": "Eris and Pluto are close in size, which helped lead to the dwarf planet category."
  },
  {
    "question": "Why is Eris colder than Pluto?",
    "choices": ["It’s made of ice", "It has no sun", "It’s farther from the Sun", "It’s covered in snow"],
    "answer": "It’s farther from the Sun",
    "fact": "Eris is one of the farthest dwarf planets from the Sun, making it extremely cold."
  },
  {
    "question": "What is the name of Eris’s moon?",
    "choices": ["MK2", "Dysnomia", "Namaka", "Hiʻiaka"],
    "answer": "Dysnomia",
    "fact": "Eris’s moon, Dysnomia, helps scientists learn more about Eris’s mass and orbit."
  },
  {
    "question": "How long does it take Eris to orbit the Sun?",
    "choices": ["100 years", "248 years", "400 years", "557 years"],
    "answer": "557 years",
    "fact": "Eris has a very slow orbit — one trip around the Sun takes 557 Earth years!"
  },
  {
    "question": "Why is Haumea shaped like a football?",
    "choices": ["It’s melting", "It’s spinning very fast", "It was hit by a comet", "It has no gravity"],
    "answer": "It’s spinning very fast",
    "fact": "Haumea spins once every 4 hours, making it stretch into a football shape."
  },
  {
    "question": "What makes Haumea different from other dwarf planets?",
    "choices": ["It has volcanoes", "It has rings", "It has no moons", "It glows"],
    "answer": "It has rings",
    "fact": "Haumea is the only dwarf planet known to have a ring around it."
  },
  {
    "question": "How many moons does Haumea have?",
    "choices": ["None", "One", "Two", "Three"],
    "answer": "Two",
    "fact": "Haumea has two moons named Hiʻiaka and Namaka."
  },
  {
    "question": "What is Haumea made of?",
    "choices": ["Rock and ice", "Only metal", "Only gas", "Only rock"],
    "answer": "Rock and ice",
    "fact": "Scientists think Haumea has a rocky core and an icy outer shell."
  },
  {
    "question": "What makes Makemake hard to study?",
    "choices": ["It has storms", "It spins too fast", "It has no thick atmosphere", "It has too many moons"],
    "answer": "It has no thick atmosphere",
    "fact": "Makemake's thin atmosphere and dark surface make it tough to observe clearly."
  },
  {
    "question": "What is the name of Makemake’s moon?",
    "choices": ["MK2", "Dysnomia", "Namaka", "Charon"],
    "answer": "MK2",
    "fact": "Makemake has a tiny moon named MK2, which is very hard to spot."
  },
  {
    "question": "What is Makemake named after?",
    "choices": ["A Roman god", "A Greek hero", "An alien", "A creator god from Easter Island"],
    "answer": "A creator god from Easter Island",
    "fact": "Makemake is named after a god from the mythology of Rapa Nui (Easter Island)."
  },
  {
    "question": "Why is Makemake's surface always frozen?",
    "choices": ["It’s made of snow", "It has no Sun", "It’s very far from the Sun", "It spins too slowly"],
    "answer": "It’s very far from the Sun",
    "fact": "Makemake is so far from the Sun that its surface stays frozen all year round."
  },
  {
    "question": "Where is Ceres located?",
    "choices": ["Near Pluto", "In the Kuiper Belt", "In the asteroid belt", "In Saturn’s rings"],
    "answer": "In the asteroid belt",
    "fact": "Ceres is the only dwarf planet in the asteroid belt between Mars and Jupiter."
  },
  {
    "question": "What year was Ceres discovered?",
    "choices": ["1801", "1901", "2001", "1601"],
    "answer": "1801",
    "fact": "Ceres was the first dwarf planet ever discovered, way back in 1801."
  },
  {
    "question": "What strange spots are found on Ceres?",
    "choices": ["Lava lakes", "Icebergs", "Salt deposits", "Alien lights"],
    "answer": "Salt deposits",
    "fact": "The bright spots on Ceres are actually patches of salty minerals."
  },
  {
    "question": "Which spacecraft visited Ceres?",
    "choices": ["Voyager", "Cassini", "Dawn", "Hubble"],
    "answer": "Dawn",
    "fact": "NASA's Dawn spacecraft orbited Ceres and sent back amazing images and data."
  },
  {
    "question": "What may exist under Ceres’s surface?",
    "choices": ["Fire", "Lava", "Water", "Air"],
    "answer": "Water",
    "fact": "Scientists think salty water or even ancient oceans may lie beneath Ceres’s crust."
  }

  ];
let selectedQuestions = [];
let startTime;
let endTime;
let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let totalTime = 0;
let timerInterval;

const countdownEl = document.getElementById("countdown");
const leaderboardSound = document.getElementById("leaderboard-sound");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const timerEl = document.getElementById("timer");
const tryAgainBtn = document.getElementById("try-again");
const leaderboardList = document.getElementById("leaderboard-list");
const nextBtn = document.getElementById("next-btn");

const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

const LEADERBOARD_KEY = "dwarf-leaderboard";

// You must have this array defined elsewhere or replace it here
// const allQuestions = [...];

const questions = getRandomQuestions(allQuestions, TOTAL_QUESTIONS);

// Shuffle and select random questions
function getRandomQuestions(all, count) {
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Show current question
function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = `Score: ${score} / ${questions.length}`;
  nextBtn.style.display = "none";
  resetTimer();

  // Shuffle choices
  const shuffledChoices = [...q.choices].sort(() => Math.random() - 0.5);
  shuffledChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.setAttribute("aria-label", `Answer: ${choice}`);
    btn.addEventListener("click", () => checkAnswer(btn, q.answer));
    choicesEl.appendChild(btn);
  });
}

// Check user's answer
function checkAnswer(button, correctAnswer) {
  stopTimer();
  const q = questions[currentQuestion];
  const buttons = choicesEl.querySelectorAll("button");
  
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
    if (btn === button && btn.textContent !== correctAnswer) {
      btn.classList.add("wrong");
    }
  });

  if (button.textContent === correctAnswer) {
    score++;
    feedbackEl.innerHTML = `✅ Correct! Score: ${score} / ${questions.length}<br><em>📘 Fact: ${q.fact}</em>`;
    correctSound.play();
  } else {
    feedbackEl.innerHTML = `❌ Wrong! Score: ${score} / ${questions.length}<br><em>📘 Fact: ${q.fact}</em>`;
    wrongSound.play();
  }

  nextBtn.style.display = "inline-block";
}

// Handle time out
function handleTimeout() {
  stopTimer();
  const q = questions[currentQuestion];
  const buttons = choicesEl.querySelectorAll("button");

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    }
  });

  feedbackEl.innerHTML = `⏰ Time’s up! The correct answer was <strong>${q.answer}</strong>.<br><em>📘 Fact: ${q.fact}</em>`;
  wrongSound.play();
  nextBtn.style.display = "inline-block";
}

// Timer logic
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 10;
  timerEl.textContent = `Time Left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    totalTime++;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// Next question logic
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showFinalScore();
  }
}

// Final score screen
function showFinalScore() {
  questionEl.textContent = "🎉 Quiz Complete!";
  choicesEl.innerHTML = "";
  feedbackEl.innerHTML = `🏁 Final Score: <strong>${score} / ${questions.length}</strong><br>⏱️ Time Taken: <strong>${totalTime}s</strong>`;
  timerEl.textContent = "";
  nextBtn.style.display = "none";
  tryAgainBtn.style.display = "inline-block";
  saveToLeaderboard(score, totalTime);
  renderLeaderboard();
}

// Restart the quiz
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  totalTime = 0;
  tryAgainBtn.style.display = "none";
  showQuestion();
}

// Save leaderboard entry
function saveToLeaderboard(score, time) {
  let name = prompt("Enter your name for the leaderboard (min 3 characters):");

  while (!name || name.trim().length < 3) {
    name = prompt("❗ Please enter a valid name (at least 3 characters):");
  }

  const leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  leaderboard.push({ name: name.trim(), score, time });
  leaderboard.sort((a, b) => b.score - a.score || a.time - b.time);
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard.slice(0, 10)));
  leaderboardSound.play();
}

// Display leaderboard
function renderLeaderboard() {
  leaderboardList.innerHTML = "";
  const leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];

  leaderboard.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.name} – ${entry.score} pts – ${entry.time}s`;
    leaderboardList.appendChild(li);
  });
}

// Start countdown before quiz begins
function startCountdown(seconds) {
  countdownEl.textContent = `Starting in ${seconds}...`;
  const countdownInterval = setInterval(() => {
    seconds--;
    countdownEl.textContent = `Starting in ${seconds}...`;
    if (seconds <= 0) {
      clearInterval(countdownInterval);
      countdownEl.textContent = "";
      showQuestion();
    }
  }, 1000);
}

// Add event listeners
nextBtn.addEventListener("click", nextQuestion);
tryAgainBtn.addEventListener("click", resetQuiz);

// Initialize app
renderLeaderboard();
startCountdown(5);
