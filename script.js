// Quiz Data
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            correct: 1
        },
        {
            question: "What is the longest river in the world?",
            options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            correct: 1
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
            correct: 2
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Euro", "Dollar", "Pound Sterling", "Franc"],
            correct: 2
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "8"],
            correct: 2
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for Gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2
        },
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"],
            correct: 2
        },
        {
            question: "How many bones are in the human body?",
            options: ["186", "206", "226", "246"],
            correct: 1
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0
        },
        {
            question: "What is the most abundant element in the universe?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2
        },
        {
            question: "What is the pH of pure water?",
            options: ["5", "7", "9", "11"],
            correct: 1
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2
        },
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            correct: 1
        },
        {
            question: "How many chambers does a human heart have?",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"],
            correct: 1
        }
    ],
    history: [
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
            correct: 1
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
            correct: 1
        },
        {
            question: "In which century was the Renaissance?",
            options: ["13th", "14th", "15th", "16th"],
            correct: 2
        },
        {
            question: "Who was the first Emperor of Rome?",
            options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
            correct: 1
        },
        {
            question: "In which year did Columbus discover America?",
            options: ["1490", "1491", "1492", "1493"],
            correct: 2
        },
        {
            question: "Who invented the printing press?",
            options: ["Gutenberg", "Caxton", "Aldus", "Jenson"],
            correct: 0
        },
        {
            question: "In which year did the French Revolution begin?",
            options: ["1787", "1788", "1789", "1790"],
            correct: 2
        },
        {
            question: "Who was the first President of India?",
            options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Vallabhbhai Patel", "Mahatma Gandhi"],
            correct: 1
        }
    ],
    technology: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
            correct: 0
        },
        {
            question: "In what year was the first iPhone released?",
            options: ["2005", "2006", "2007", "2008"],
            correct: 2
        },
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Central Program Utility", "Computer Personal Unit", "Central Processor Utility"],
            correct: 0
        },
        {
            question: "Which company created Java?",
            options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
            correct: 2
        },
        {
            question: "What is the most used programming language?",
            options: ["Python", "Java", "C++", "JavaScript"],
            correct: 3
        },
        {
            question: "Who is known as the father of computers?",
            options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Donald Knuth"],
            correct: 1
        },
        {
            question: "What does API stand for?",
            options: ["Application Programming Interface", "Advanced Programming Integration", "Application Process Interface", "Advanced Process Integration"],
            correct: 0
        },
        {
            question: "In what year was the World Wide Web invented?",
            options: ["1989", "1990", "1991", "1992"],
            correct: 0
        },
        {
            question: "What is the speed of a standard USB 3.0 connection?",
            options: ["480 Mbps", "5 Gbps", "10 Gbps", "12 Mbps"],
            correct: 1
        },
        {
            question: "Which company developed the first successful web browser?",
            options: ["Microsoft", "Netscape", "Google", "Apple"],
            correct: 1
        }
    ]
};

// State Management
let currentCategory = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let currentQuestions = [];
let score = 0;

// DOM Elements
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const categoryBtns = document.querySelectorAll('.category-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');
const performanceMessage = document.getElementById('performance-message');
const resultsDetails = document.getElementById('results-details');
const restartBtn = document.getElementById('restart-btn');

// Event Listeners
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        currentCategory = btn.dataset.category;
        startQuiz();
    });
});

prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', goHome);

// Functions
function startQuiz() {
    currentQuestions = [...quizData[currentCategory]];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(null);
    score = 0;
    
    showScreen('quiz-screen');
    displayQuestion();
}

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option';
        
        if (userAnswers[currentQuestionIndex] === index) {
            label.classList.add('selected');
        }
        
        label.innerHTML = `
            <input type="radio" name="option" value="${index}" ${userAnswers[currentQuestionIndex] === index ? 'checked' : ''}>
            <span>${option}</span>
        `;
        
        label.addEventListener('change', (e) => {
            userAnswers[currentQuestionIndex] = index;
            updateAllOptions();
        });
        
        optionsContainer.appendChild(label);
    });
    
    updateProgressBar();
    updateQuestionCounter();
    updateButtonStates();
}

function updateAllOptions() {
    const options = document.querySelectorAll('.option');
    options.forEach((label, index) => {
        label.classList.remove('selected', 'correct', 'incorrect');
        const input = label.querySelector('input');
        
        if (input.checked) {
            label.classList.add('selected');
        }
    });
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = progress + '%';
}

function updateQuestionCounter() {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
}

function updateButtonStates() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = 'Submit Quiz';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Next →';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    calculateScore();
    showResults();
    showScreen('results-screen');
}

function calculateScore() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuestions[index].correct) {
            score++;
        }
    });
}

function showResults() {
    finalScore.textContent = score;
    totalQuestions.textContent = currentQuestions.length;
    
    const percentage = (score / currentQuestions.length) * 100;
    
    if (percentage === 100) {
        performanceMessage.textContent = '🌟 Perfect Score! Outstanding!';
    } else if (percentage >= 80) {
        performanceMessage.textContent = '🎉 Excellent Performance!';
    } else if (percentage >= 60) {
        performanceMessage.textContent = '👍 Good Job!';
    } else if (percentage >= 40) {
        performanceMessage.textContent = '💪 Keep Practicing!';
    } else {
        performanceMessage.textContent = '📚 Study More and Try Again!';
    }
    
    displayResultsDetails();
    updateScoreDisplay();
}

function displayResultsDetails() {
    resultsDetails.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correct;
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        resultItem.innerHTML = `
            <strong>Question ${index + 1}:</strong> ${question.question}<br>
            <span style="color: ${isCorrect ? '#4caf50' : '#f44336'};">
                ${isCorrect ? '✓ Correct' : '✗ Incorrect'} - Your answer: ${question.options[userAnswers[index]]}
            </span>
            ${!isCorrect ? `<br><span style="color: #4caf50;">Correct answer: ${question.options[question.correct]}</span>` : ''}
        `;
        
        resultsDetails.appendChild(resultItem);
    });
}

function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}/${currentQuestions.length}`;
}

function showScreen(screenId) {
    homeScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    document.getElementById(screenId).classList.add('active');
}

function goHome() {
    currentCategory = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    currentQuestions = [];
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
    showScreen('home-screen');
}

// Initialize
showScreen('home-screen');
