const appState = {
    currentPage: 'home',
    currentTest: null,
    currentQuestion: 0,
    answers: [],
    timer: null,
    timeLeft: 1200
};


const testDatabase = {
    ent: [
        {
            question: "Қай сан жай сан болып табылады?",
            options: ["4", "7", "9", "12"],
            correct: 1,
            subject: "math"
        },
        {
            question: "Қазақстан қай жылы тәуелсіздік алды?",
            options: ["1989", "1990", "1991", "1992"],
            correct: 2,
            subject: "history"
        },
        {
            question: "Қазақстанның астанасы - бұл:",
            options: ["Алматы", "Шымкент", "Нұр-Сұлтан", "Қарағанды"],
            correct: 2,
            subject: "history"
        },
        {
            question: "2 + 2 × 2 = ?",
            options: ["6", "8", "4", "10"],
            correct: 0,
            subject: "math"
        },
        {
            question: "Қазақ хандығының алғашқы ханы кім?",
            options: ["Абылай хан", "Керей хан", "Жәнібек хан", "Қасым хан"],
            correct: 2,
            subject: "history"
        },
        {
            question: "π (пи) санының мәні қандай?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            correct: 1,
            subject: "math"
        },
        {
            question: "Қазақ тіліндегі септіктер саны қанша?",
            options: ["5", "6", "7", "8"],
            correct: 2,
            subject: "kazakh"
        },
        {
            question: "Алматы қаласы қай жылы құрылды?",
            options: ["1854", "1867", "1883", "1895"],
            correct: 0,
            subject: "history"
        },
        {
            question: "Сутегінің химиялық белгісі қандай?",
            options: ["H", "He", "O", "N"],
            correct: 0,
            subject: "chemistry"
        },
        {
            question: "Қазақстанның ең биік тауы қайсы?",
            options: ["Хан Тәңірі", "Белуха", "Жеңіс", "Талғар"],
            correct: 1,
            subject: "geography"
        },
        {
            question: "Тәуелсіз Қазақстанның алғашқы Конституциясы қабылданған жыл?",
            options: ["1991", "1993", "1995", "1997"],
            correct: 2,
            subject: "history"
        },
        {
            question: "Фотосинтез процесі қай органеллада жүреді?",
            options: ["Митохондрия", "Хлоропласт", "Ядро", "Рибосома"],
            correct: 1,
            subject: "biology"
        },
        {
            question: "Қазақстандағы ең ұзын өзен қайсы?",
            options: ["Ертіс", "Сырдария", "Іле", "Жайық"],
            correct: 0,
            subject: "geography"
        },
        {
            question: "Қазақ әліпбиіндегі әріптер саны қанша?",
            options: ["28", "33", "42", "38"],
            correct: 2,
            subject: "kazakh"
        },
        {
            question: "Ньютонның екінші заңы қандай формуламен өрнектеледі?",
            options: ["F=ma", "E=mc²", "P=IV", "V=IR"],
            correct: 0,
            subject: "physics"
        },
        {
            question: "Қазақстанның ұлттық валютасы қашан енгізілді?",
            options: ["1991", "1993", "1995", "1997"],
            correct: 1,
            subject: "history"
        },
        {
            question: "Температураны өлшейтін құрал?",
            options: ["Барометр", "Термометр", "Анемометр", "Гигрометр"],
            correct: 1,
            subject: "physics"
        },
        {
            question: "Қазақстанның халқы қанша миллион адам? (2023 ж.)",
            options: ["15", "18", "20", "22"],
            correct: 2,
            subject: "geography"
        },
        {
            question: "Қазақстандағы ең үлкен көл қайсы?",
            options: ["Балқаш", "Зайсан", "Алакөл", "Каспий"],
            correct: 3,
            subject: "geography"
        },
        {
            question: "Қазақ тіліндегі етістік категориялары қанша?",
            options: ["3", "5", "7", "9"],
            correct: 2,
            subject: "kazakh"
        },
        {
            question: "Қуаңшылыққа төзімді өсімдік?",
            options: ["Қызғалдақ", "Кактус", "Раушан", "Қалампыр"],
            correct: 1,
            subject: "biology"
        },
        {
            question: "Қазақстанның ең ірі қаласы (халық саны бойынша)?",
            options: ["Алматы", "Нұр-Сұлтан", "Шымкент", "Қарағанды"],
            correct: 0,
            subject: "geography"
        },
        {
            question: "Қазақстан Конституциясы қашан қабылданды?",
            options: ["1991", "1993", "1995", "1997"],
            correct: 2,
            subject: "history"
        },
        {
            question: "Қышқылды анықтау үшін қандай индикатор қолданылады?",
            options: ["Фенолфталеин", "Лакмус", "Метилоранж", "Бромтимол көк"],
            correct: 1,
            subject: "chemistry"
        },
        {
            question: "Қазақстанның ұлттық символдары қанша?",
            options: ["3", "5", "7", "9"],
            correct: 2,
            subject: "history"
        },
        {
            question: "Қазақ тіліндегі сөз таптары қанша?",
            options: ["5", "7", "9", "11"],
            correct: 2,
            subject: "kazakh"
        },
        {
            question: "Қазақстандағы ең ұзын темір жол қайсы?",
            options: ["Транс-Каспий", "Туркістан-Сібір", "Орталық-Азия", "Оңтүстік-Солтүстік"],
            correct: 1,
            subject: "geography"
        },
        {
            question: "Қазақстанның ұлттық аспабы?",
            options: ["Домбыра", "Қобыз", "Сыбызғы", "Жетіген"],
            correct: 0,
            subject: "culture"
        },
        {
            question: "Қазақстандағы ең ірі университет қайсы?",
            options: ["ҚазҰУ", "Әл-Фараби атындағы ҚазҰУ", "Еуразия ұлттық университеті", "Сәтбаев университеті"],
            correct: 1,
            subject: "education"
        },
        {
            question: "Қазақстанның ұлттық валютасы?",
            options: ["Теңге", "Сом", "Рубль", "Доллар"],
            correct: 0,
            subject: "economics"
        },
        {
            question: "Қазақстанның ұлттық биі?",
            options: ["Қара жорға", "Ортеке", "Қыз Жібек", "Айжан қыз"],
            correct: 0,
            subject: "culture"
        }
    ],
    math: [
        {
            question: "x² - 4 = 0 теңдеуінің шешімі қандай?",
            options: ["-2", "2", "-2 және 2", "Шешімі жоқ"],
            correct: 2,
            subject: "math"
        },
        {
            question: "π (пи) санының мәні қандай?",
            options: ["3.12", "3.14", "3.16", "3.18"],
            correct: 1,
            subject: "math"
        },
        {
            question: "Тік төртбұрыштың ауданы қалай есептеледі?",
            options: ["Қабырғаларын қосу", "Ұзындығын биіктікке көбейту", "Периметрін есептеу", "Диагональды табу"],
            correct: 1,
            subject: "math"
        }
    ],
    history: [
        {
            question: "Қазақ хандығының алғашқы ханы кім?",
            options: ["Абылай хан", "Керей хан", "Жәнібек хан", "Қасым хан"],
            correct: 2,
            subject: "history"
        },
        {
            question: "Алматы қаласы қай жылы құрылды?",
            options: ["1854", "1867", "1883", "1895"],
            correct: 0,
            subject: "history"
        },
        {
            question: "Тәуелсіз Қазақстанның алғашқы Конституциясы қабылданған жыл?",
            options: ["1991", "1993", "1995", "1997"],
            correct: 2,
            subject: "history"
        }
    ]
};


function showHome() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('subjects-page').style.display = 'none';
    document.getElementById('ent-test-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('stats-page').style.display = 'none';
    appState.currentPage = 'home';
}


function showSubjects() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('subjects-page').style.display = 'block';
    document.getElementById('ent-test-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('stats-page').style.display = 'none';
    appState.currentPage = 'subjects';
}


function showStats() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('subjects-page').style.display = 'none';
    document.getElementById('ent-test-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('stats-page').style.display = 'block';
    appState.currentPage = 'stats';
}


function startENTTest() {
    appState.currentTest = 'ent';
    appState.currentQuestion = 0;
    appState.answers = new Array(testDatabase.ent.length).fill(null);
    
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('subjects-page').style.display = 'none';
    document.getElementById('ent-test-page').style.display = 'block';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('stats-page').style.display = 'none';
    
    startTimer();
    showQuestion();
}

function startSubjectTest(subject) {
    appState.currentTest = subject;
    appState.currentQuestion = 0;
    appState.answers = new Array(testDatabase[subject].length).fill(null);
    
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('subjects-page').style.display = 'none';
    document.getElementById('ent-test-page').style.display = 'block';
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('stats-page').style.display = 'none';
    

    document.getElementById('timer').style.display = 'none';
    showQuestion();
}


function showQuestion() {
    const container = document.getElementById('question-container');
    const test = testDatabase[appState.currentTest];
    const question = test[appState.currentQuestion];
    
    container.innerHTML = `
        <div class="question">
            <p class="question-text">${appState.currentQuestion + 1}. ${question.question}</p>
            ${question.options.map((option, index) => `
                <label class="option">
                    <input type="radio" name="answer" value="${index}" 
                           ${appState.answers[appState.currentQuestion] === index ? 'checked' : ''}>
                    ${option}
                </label>
            `).join('')}
        </div>
    `;
    

    document.getElementById('prev-btn').disabled = appState.currentQuestion === 0;
    
    if (appState.currentQuestion === test.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('finish-btn').style.display = 'inline-block';
    } else {
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('finish-btn').style.display = 'none';
    }
}


function nextQuestion() {
    saveAnswer();
    appState.currentQuestion++;
    showQuestion();
}


function prevQuestion() {
    saveAnswer();
    appState.currentQuestion--;
    showQuestion();
}


function saveAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        appState.answers[appState.currentQuestion] = parseInt(selected.value);
    }
}


function finishTest() {
    saveAnswer();
    clearInterval(appState.timer);
    

    const test = testDatabase[appState.currentTest];
    let correct = 0;
    const mistakes = [];
    
    for (let i = 0; i < test.length; i++) {
        if (appState.answers[i] === test[i].correct) {
            correct++;
        } else {
            mistakes.push({
                question: test[i].question,
                correctAnswer: test[i].options[test[i].correct],
                userAnswer: appState.answers[i] !== null ? test[i].options[appState.answers[i]] : "Жауап жоқ"
            });
        }
    }
    document.getElementById('ent-test-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';
    
    const score = document.getElementById('score');
    score.textContent = `Сіздің нәтижеңіз: ${correct}/${test.length}`;
    
    const progress = document.getElementById('progress-bar');
    progress.style.width = `${(correct / test.length) * 100}%`;
    
    const mistakesList = document.getElementById('mistakes-list');
    mistakesList.innerHTML = mistakes.map(mistake => `
        <div class="mistake">
            <p class="mistake-question">${mistake.question}</p>
            <p>Сіздің жауабыңыз: ${mistake.userAnswer}</p>
            <p class="correct-answer">Дұрыс жауап: ${mistake.correctAnswer}</p>
        </div>
    `).join('');
}


function startTimer() {
    appState.timeLeft = 1200;
    updateTimerDisplay();
    
    appState.timer = setInterval(() => {
        appState.timeLeft--;
        updateTimerDisplay();
        
        if (appState.timeLeft <= 0) {
            clearInterval(appState.timer);
            finishTest();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(appState.timeLeft / 60);
    const seconds = appState.timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
showHome();