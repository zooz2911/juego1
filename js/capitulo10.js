// ============================================
// PREGUNTAS DEL CAPÍTULO 10 CON NIVELES DE DIFICULTAD
// CLASIFICADAS SEGÚN COMPLEJIDAD APARENTE
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - Preguntas básicas de hechos directos (28 preguntas)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año la iglesia encaró un gran proyecto de rehabilitación y reconstrucción?',
        options: ['1945', '1946', '1947', '1948'],
        correct: 1,
        explanation: 'En 1946, la iglesia encaró un gran proyecto de rehabilitación y reconstrucción después de la guerra.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué país obligó a salir a todos los obreros extranjeros?',
        options: ['Japón', 'China', 'Corea', 'India'],
        correct: 1,
        explanation: 'Pronto todos los obreros extranjeros tuvieron que salir de China.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se inició una escuela secundaria en Islandia?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'Se inició una escuela secundaria en Islandia en 1950.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se abrió un hospital en Pakistán?',
        options: ['1950', '1951', '1952', '1953'],
        correct: 1,
        explanation: 'Se abrió un hospital en Pakistán en 1951.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció un orfanatorio en Corea?',
        options: ['1950', '1951', '1952', '1953'],
        correct: 1,
        explanation: 'Se estableció un orfanatorio en Corea en 1951.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue presidente de la Asociación General de 1950 a 1954?',
        options: ['R.R. Figuhr', 'W.H. Branson', 'W.A. Spicer', 'C.H. Watson'],
        correct: 1,
        explanation: 'El pastor W.H. Branson ocupó la presidencia de 1950 a 1954.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué países había trabajado W.H. Branson?',
        options: ['India y Birmania', 'China y África', 'Filipinas y Sudamérica', 'Europa y Australia'],
        correct: 1,
        explanation: 'Branson había trabajado en China y África.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue nombrado presidente R.R. Figuhr?',
        options: ['1953', '1954', '1955', '1956'],
        correct: 1,
        explanation: 'R.R. Figuhr fue nombrado presidente en el congreso de 1954.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué países había trabajado R.R. Figuhr?',
        options: ['China y África', 'India y Birmania', 'Filipinas y América del Sur', 'Europa y Australia'],
        correct: 2,
        explanation: 'Figuhr había trabajado en las Filipinas y América del Sur.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó el programa de televisión "Faith for Today"?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'Faith for Today comenzó en Nueva York en 1950.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién dirigía el programa "Faith for Today"?',
        options: ['George Vandeman', 'W.A. Fagal', 'H.M.S. Richards', 'W.H. Branson'],
        correct: 1,
        explanation: 'El pastor W.A. Fagal dirigía Faith for Today.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde comenzó el programa "Faith for Today"?',
        options: ['Los Ángeles', 'Chicago', 'Nueva York', 'Washington'],
        correct: 2,
        explanation: 'Comenzó en Nueva York.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó la escuela bíblica de "Faith for Today"?',
        options: ['1951', '1952', '1953', '1954'],
        correct: 1,
        explanation: 'La escuela bíblica comenzó en 1952.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se desarrolló el programa "It is Written"?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'It is Written se desarrolló en 1955.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién dirigía el programa "It is Written"?',
        options: ['W.A. Fagal', 'George Vandeman', 'H.M.S. Richards', 'R.R. Figuhr'],
        correct: 1,
        explanation: 'El pastor George Vandeman dirigía It is Written.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué centro de evangelización se abrió en Londres?',
        options: ['Centro Adventista', 'Nueva Galería', 'Times Square', 'Regent Hall'],
        correct: 1,
        explanation: 'La Nueva Galería en la calle Regent de Londres.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué centro de evangelización se abrió en Nueva York?',
        options: ['Nueva Galería', 'Centro Adventista', 'Times Square', 'Broadway Hall'],
        correct: 1,
        explanation: 'El Centro Adventista de Nueva York, junto a Times Square.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó la Asociación Hebrea de las Escrituras?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'Se organizó en 1955.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista trimestral se publica para los judíos?',
        options: ['Israelite', 'Jewish Herald', 'Shalom', 'Israeliete'],
        correct: 0,
        explanation: 'Se publica una revista trimestral llamada Israeliete.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué años se intensificaron las preguntas sobre las creencias adventistas?',
        options: ['1954-1955', '1955-1956', '1956-1957', '1957-1958'],
        correct: 1,
        explanation: 'Se intensificó en 1955 y 1956.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué libro se publicó como resultado de estas discusiones?',
        options: ['Creencias Adventistas', 'Questions on Doctrine', 'Respuestas Bíblicas', 'Fe y Doctrina'],
        correct: 1,
        explanation: 'Se publicó "Seventh-day Adventists Answer Questions on Doctrine".'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año las ofrendas de escuela sabática alcanzaron los 100 millones de dólares?',
        options: ['1954', '1955', '1956', '1957'],
        correct: 1,
        explanation: 'En 1955 alcanzaron y sobrepasaron los cien millones.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿A cuánto llegó la apropiación para misiones extranjeras en 1956?',
        options: ['Más de 11 millones', 'Más de 16 millones', 'Más de 21 millones', 'Más de 26 millones'],
        correct: 2,
        explanation: 'Llegó a más de 21 millones de dólares.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'multiple',
        question: '¿Por cuántas estaciones de radio transmitía la iglesia en 1957?',
        options: ['761', '861', '961', '1,061'],
        correct: 2,
        explanation: 'Transmitía por 961 estaciones de radio.'
    },
    {
        id: 25,
        level: 'facil',
        type: 'multiple',
        question: '¿En cuántos idiomas transmitía la iglesia en 1957?',
        options: ['17', '22', '27', '32'],
        correct: 2,
        explanation: 'En 27 idiomas diferentes.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas instituciones médicas de categoría había en 1958?',
        options: ['82', '92', '102', '112'],
        correct: 2,
        explanation: 'Había 102 instituciones médicas de categoría.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas clínicas y dispensarios había en 1958?',
        options: ['65', '75', '85', '95'],
        correct: 2,
        explanation: '85 clínicas y dispensarios.'
    },
    {
        id: 28,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas lanchas misioneras funcionaban en América del Sur en 1958?',
        options: ['5', '8', '10', '12'],
        correct: 2,
        explanation: 'Funcionaban 10 lanchas médicas misioneras.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de detalles específicos (7 preguntas)
    // ============================================
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuál era la feligresía total de la iglesia en 1959?',
        options: ['1,094,030', '1,194,030', '1,294,030', '1,394,030'],
        correct: 1,
        explanation: 'Alcanzó la cifra de 1,194,030 miembros.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'multiple',
        question: '¿A cuánto ascendieron los diezmos en 1959?',
        options: ['Más de 43 millones', 'Más de 48 millones', 'Más de 53 millones', 'Más de 58 millones'],
        correct: 2,
        explanation: 'Más de 53 y medio millones de dólares.'
    },
    {
        id: 31,
        level: 'medio',
        type: 'fill',
        question: 'En 1946, la iglesia encaró un gran proyecto de rehabilitación y __________.',
        correct: ['reconstrucción'],
        explanation: 'Rehabilitación y reconstrucción.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'fill',
        question: 'Todos los obreros extranjeros tuvieron que salir de __________.',
        correct: ['china'],
        explanation: 'China.'
    },
    {
        id: 33,
        level: 'medio',
        type: 'fill',
        question: 'Se inició una escuela secundaria en Islandia en __________.',
        correct: ['1950'],
        explanation: '1950.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'fill',
        question: 'W.H. __________ fue presidente de la Asociación General de 1950 a 1954.',
        correct: ['branson'],
        explanation: 'W.H. Branson.'
    },
    {
        id: 35,
        level: 'medio',
        type: 'fill',
        question: 'R.R. __________ fue nombrado presidente en 1954.',
        correct: ['figuhr'],
        explanation: 'R.R. Figuhr.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas de conexiones y datos específicos (5 preguntas)
    // ============================================
    {
        id: 36,
        level: 'dificil',
        type: 'fill',
        question: 'El programa "Faith for Today" comenzó en Nueva York en __________.',
        correct: ['1950'],
        explanation: '1950.'
    },
    {
        id: 37,
        level: 'dificil',
        type: 'fill',
        question: 'El programa "It is Written" se desarrolló en __________ con George Vandeman.',
        correct: ['1955'],
        explanation: '1955.'
    },
    {
        id: 38,
        level: 'dificil',
        type: 'fill',
        question: 'La Asociación Hebrea de las Escrituras se organizó en __________.',
        correct: ['1955'],
        explanation: '1955.'
    },
    {
        id: 39,
        level: 'dificil',
        type: 'fill',
        question: 'En 1959 la feligresía alcanzó 1,194,030 miembros y los diezmos fueron más de __________ millones.',
        correct: ['53'],
        explanation: '53 millones y medio.'
    },
    {
        id: 40,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué significó el libro "Questions on Doctrine" para la iglesia adventista?',
        options: ['Un documento doctrinal oficial', 'Una respuesta a críticos evangélicos', 'Un nuevo credo', 'Un libro de historia'],
        correct: 1,
        explanation: 'Fue una respuesta a críticos evangélicos para clarificar las creencias adventistas.'
    }
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentQuestionIndex = 0;
let currentLevel = 'facil';
let shuffledQuestions = [];
let correctCount = 0;
let incorrectCount = 0;
let answered = false;
let selectedOption = null;
let selectedFillOption = null;

const chapters = [
    { number: 1, title: 'La Iglesia Cristiana a Través de las Edades' },
    { number: 2, title: 'Heraldos del Mensaje del Advenimiento' },
    { number: 3, title: 'Surge la Iglesia Remanente' },
    { number: 4, title: 'Se Organiza la Iglesia Remanente' },
    { number: 5, title: 'Expansión y Reforma' },
    { number: 6, title: 'Visión Mundial' },
    { number: 7, title: 'Progresos y Pérdidas' },
    { number: 8, title: 'Continúa la Expansión de las Misiones' },
    { number: 9, title: 'Progreso a pesar de los Reveses' },
    { number: 10, title: 'Confirmación y Expansión' },
    { number: 11, title: 'La Terminación de la Comisión Evangélica' },
    { number: 12, title: 'Los Departamentos de la Iglesia' },
    { number: 13, title: 'Divisiones Mundiales de la Iglesia' }
];

const domElements = {
    questionCounter: document.getElementById('questionCounter'),
    questionText: document.getElementById('questionText'),
    questionType: document.getElementById('questionType'),
    correctCount: document.getElementById('correctCount'),
    incorrectCount: document.getElementById('incorrectCount'),
    progressFill: document.getElementById('progressFill'),
    progressText: document.getElementById('progressText'),
    multipleChoiceContainer: document.getElementById('multipleChoiceContainer'),
    fillBlankContainer: document.getElementById('fillBlankContainer'),
    finalResults: document.getElementById('finalResults'),
    submitBtn: document.getElementById('submitBtn'),
    nextBtn: document.getElementById('nextBtn'),
    resultMessage: document.getElementById('resultMessage'),
    chapterTitle: document.getElementById('chapterTitle'),
    chapterSelector: document.getElementById('chapterSelector')
};

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function backToMenu() {
    window.location.href = '../index.html';
}

function updateScoreDisplay() {
    if (domElements.correctCount) domElements.correctCount.textContent = correctCount;
    if (domElements.incorrectCount) domElements.incorrectCount.textContent = incorrectCount;
    updateMenuStats();
}

// ============================================
// SELECTOR DE CAPÍTULOS
// ============================================
function loadChapterSelector() {
    const selector = domElements.chapterSelector;
    if (!selector) return;
    
    selector.innerHTML = '';
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '10');
    const completedChapters = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
    
    chapters.forEach(chapter => {
        const option = document.createElement('option');
        option.value = chapter.number;
        const isCompleted = completedChapters.includes(chapter.number);
        option.textContent = `Capítulo ${chapter.number}: ${chapter.title.substring(0, 20)}... ${isCompleted ? '✓ COMPLETADO' : ''}`;
        if (chapter.number === currentChapter) {
            option.selected = true;
        }
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', function() {
        const newChapter = parseInt(this.value);
        if (newChapter !== currentChapter) {
            if (confirm('¿Cambiar de capítulo? Se perderá tu progreso actual.')) {
                localStorage.setItem('historiaDenominacional_currentChapter', newChapter);
                window.location.href = `../libros/capitulo${newChapter}.html`;
            } else {
                this.value = currentChapter;
            }
        }
    });
}

// ============================================
// CARGAR CAPÍTULOS EN EL MENÚ LATERAL
// ============================================
function loadChaptersMenu() {
    const chaptersGrid = document.getElementById('chaptersGrid');
    if (!chaptersGrid) return;
    
    chaptersGrid.innerHTML = '';
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '10');
    const completedChapters = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
    
    chapters.forEach(chapter => {
        const button = document.createElement('button');
        button.className = 'chapter-btn';
        if (chapter.number === currentChapter) {
            button.classList.add('active');
        }
        if (completedChapters.includes(chapter.number)) {
            button.classList.add('completed');
            button.innerHTML = `${chapter.number} ✓`;
        } else {
            button.textContent = chapter.number;
        }
        button.onclick = () => goToChapter(chapter.number);
        chaptersGrid.appendChild(button);
    });
}

// ============================================
// FUNCIÓN PARA CAMBIAR DE CAPÍTULO
// ============================================
function goToChapter(chapterNumber) {
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '10');
    if (chapterNumber === currentChapter) {
        toggleMenu();
        return;
    }
    
    if (confirm(`¿Ir al capítulo ${chapterNumber}? Se perderá tu progreso actual.`)) {
        localStorage.setItem('historiaDenominacional_currentChapter', chapterNumber);
        window.location.href = `../libros/capitulo${chapterNumber}.html`;
    }
}

// ============================================
// CAMBIAR NIVEL
// ============================================
function changeLevel(level) {
    if (level === currentLevel) return;
    
    if (confirm(`¿Cambiar a nivel ${level}? Se reiniciará tu progreso actual.`)) {
        currentLevel = level;
        localStorage.setItem('historiaDenominacional_level', level);
        
        const allLevelBtns = document.querySelectorAll('.level-btn');
        allLevelBtns.forEach(btn => {
            if (btn.dataset.level === level) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '10';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Confirmación y Expansión - Nivel ${level}`;
        }
        
        restartChapter();
    }
}

// ============================================
// FILTRAR PREGUNTAS POR NIVEL
// ============================================
function filterQuestionsByLevel(level) {
    return questions.filter(q => q.level === level);
}

// ============================================
// SELECCIÓN MÚLTIPLE
// ============================================
function loadMultipleChoice(question) {
    const container = domElements.multipleChoiceContainer;
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const letters = ['A', 'B', 'C', 'D'];
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.setAttribute('data-letter', letters[index]);
        button.textContent = option;
        button.onclick = () => selectOption(index);
        container.appendChild(button);
    });
}

function selectOption(index) {
    if (answered) return;
    
    const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
    selectedOption = index;
}

// ============================================
// COMPLETACIÓN
// ============================================
function loadFillInTheBlank(question) {
    const container = domElements.fillBlankContainer;
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const allOptions = generateFillOptions(question);
    
    const fillOptionsDiv = document.createElement('div');
    fillOptionsDiv.className = 'fill-options';
    
    allOptions.forEach((option) => {
        const button = document.createElement('button');
        button.className = 'fill-option-btn';
        button.textContent = option;
        button.onclick = () => selectFillOption(button, option);
        fillOptionsDiv.appendChild(button);
    });
    
    container.appendChild(fillOptionsDiv);
}

function generateFillOptions(question) {
    const correctAnswer = question.correct.join(' ').toLowerCase();
    
    const incorrectPool = [
        '1945', '1946', '1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954',
        '1955', '1956', '1957', '1958', '1959',
        'china', 'islandia', 'pakistán', 'corea', 'londres', 'nueva york',
        'branson', 'figuhr', 'fagal', 'vandeman',
        '100', '21', '961', '27', '102', '85', '10', '1194030', '53'
    ];
    
    const shuffled = shuffleArray([...incorrectPool]);
    const selectedIncorrect = shuffled
        .filter(opt => opt !== correctAnswer)
        .filter((opt, index, self) => self.indexOf(opt) === index)
        .slice(0, 3);
    
    let allOptions = [correctAnswer, ...selectedIncorrect];
    allOptions = [...new Set(allOptions)];
    
    while (allOptions.length < 4) {
        allOptions.push('respuesta');
    }
    
    return shuffleArray(allOptions.slice(0, 4));
}

function selectFillOption(button, selectedValue) {
    if (answered) return;
    
    document.querySelectorAll('.fill-option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    button.classList.add('selected');
    selectedFillOption = selectedValue;
}

// ============================================
// CARGA DE PREGUNTA
// ============================================
function loadQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    domElements.questionCounter.textContent = `Pregunta ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    domElements.questionText.textContent = question.question;
    
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    domElements.progressFill.style.width = `${progress}%`;
    domElements.progressText.textContent = `Progreso: ${currentQuestionIndex + 1}/${shuffledQuestions.length}`;
    
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.finalResults.classList.add('hidden');
    
    answered = false;
    domElements.submitBtn.disabled = false;
    domElements.resultMessage.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    
    selectedOption = null;
    selectedFillOption = null;
    
    if (question.type === 'multiple') {
        domElements.questionType.textContent = 'Selección Simple';
        loadMultipleChoice(question);
    } else if (question.type === 'fill') {
        domElements.questionType.textContent = 'Completación';
        loadFillInTheBlank(question);
    }
}

// ============================================
// RESPUESTA
// ============================================
function submitAnswer() {
    if (answered) return;
    
    const question = shuffledQuestions[currentQuestionIndex];
    let isCorrect = false;
    let message = '';
    
    if (question.type === 'multiple') {
        if (selectedOption === null) {
            alert('Por favor selecciona una respuesta');
            return;
        }
        
        isCorrect = selectedOption === question.correct;
        const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
        
        if (buttons[question.correct]) buttons[question.correct].classList.add('correct');
        if (!isCorrect && buttons[selectedOption]) {
            buttons[selectedOption].classList.add('incorrect');
            message = `❌ Incorrecto. La respuesta correcta es: ${question.options[question.correct]}`;
        }
        
    } else if (question.type === 'fill') {
        if (selectedFillOption === null) {
            alert('Por favor selecciona una opción');
            return;
        }
        
        const correctAnswer = question.correct.join(' ').toLowerCase();
        isCorrect = selectedFillOption.toLowerCase() === correctAnswer;
        
        const buttons = document.querySelectorAll('.fill-option-btn');
        buttons.forEach(btn => {
            if (btn.textContent.toLowerCase() === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedFillOption && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        if (!isCorrect) {
            message = `❌ Incorrecto. La respuesta correcta es: ${correctAnswer}`;
        }
    }
    
    if (isCorrect) {
        correctCount++;
        message = `✅ ¡Correcto! ${question.explanation || ''}`;
    } else {
        incorrectCount++;
        if (!message) {
            message = `❌ Incorrecto. ${question.explanation || 'Revisa el texto para aprender más.'}`;
        }
    }
    
    updateScoreDisplay();
    
    domElements.resultMessage.textContent = message;
    domElements.resultMessage.className = `result-message ${isCorrect ? 'correct' : 'incorrect'}`;
    domElements.resultMessage.classList.remove('hidden');
    
    answered = true;
    domElements.submitBtn.disabled = true;
    domElements.nextBtn.classList.remove('hidden');
}

// ============================================
// SIGUIENTE PREGUNTA
// ============================================
function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showFinalResults();
    }
}

// ============================================
// RESULTADOS FINALES
// ============================================
function showFinalResults() {
    domElements.multipleChoiceContainer.classList.add('hidden');
    domElements.fillBlankContainer.classList.add('hidden');
    domElements.submitBtn.classList.add('hidden');
    domElements.nextBtn.classList.add('hidden');
    domElements.resultMessage.classList.add('hidden');
    
    const total = correctCount + incorrectCount;
    const percentage = Math.round((correctCount / total) * 100) || 0;
    
    let message = '';
    let levelMessage = '';
    
    switch(currentLevel) {
        case 'facil':
            levelMessage = 'Nivel Fácil completado. ¡Sigue practicando!';
            break;
        case 'medio':
            levelMessage = 'Nivel Medio superado. ¡Muy bien!';
            break;
        case 'dificil':
            levelMessage = 'Nivel Difícil dominado. ¡Eres un experto!';
            break;
    }
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien la confirmación y expansión.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 10 COMPLETADO! 🎉</h2>
            <div class="level-badge">${levelMessage}</div>
            <div class="final-stats">
                <div class="final-stat-item">
                    <div class="final-stat-value correct">${correctCount}</div>
                    <div class="final-stat-label">Correctas</div>
                </div>
                <div class="final-stat-item">
                    <div class="final-stat-value incorrect">${incorrectCount}</div>
                    <div class="final-stat-label">Incorrectas</div>
                </div>
            </div>
            <div class="final-percentage">${percentage}% de aciertos</div>
            <div class="final-message">"${message}"</div>
            <div class="final-buttons">
                <button class="final-btn" onclick="backToMenu()">📚 Volver al Menú</button>
                <button class="final-btn" onclick="restartChapter()">🔄 Repetir Nivel</button>
                <button class="final-btn" onclick="changeLevelPrompt()">🎮 Cambiar Nivel</button>
            </div>
        </div>
    `;
    
    domElements.finalResults.classList.remove('hidden');
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '10');
    completeChapter(chapterNumber);
    
    loadChapterSelector();
    loadChaptersMenu();
}

function changeLevelPrompt() {
    const newLevel = prompt('Selecciona nivel: facil, medio, dificil');
    if (newLevel && ['facil', 'medio', 'dificil'].includes(newLevel)) {
        changeLevel(newLevel);
    }
}

// ============================================
// REINICIAR CAPÍTULO
// ============================================
function restartChapter() {
    const levelQuestions = filterQuestionsByLevel(currentLevel);
    shuffledQuestions = shuffleArray([...levelQuestions]);
    
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    updateScoreDisplay();
    domElements.finalResults.classList.add('hidden');
    domElements.submitBtn.classList.remove('hidden');
    
    const totalQuestions = shuffledQuestions.length;
    domElements.questionCounter.textContent = `Pregunta 1/${totalQuestions}`;
    domElements.progressText.textContent = `Progreso: 0/${totalQuestions}`;
    
    loadQuestion();
}

// ============================================
// COMPLETAR CAPÍTULO
// ============================================
function completeChapter(chapterNumber) {
    try {
        const progress = JSON.parse(localStorage.getItem('historiaDenominacional_progress') || '[]');
        if (!progress.includes(chapterNumber)) {
            progress.push(chapterNumber);
            localStorage.setItem('historiaDenominacional_progress', JSON.stringify(progress));
        }
    } catch (e) {
        console.log('Error guardando progreso:', e);
    }
}

// ============================================
// MARCAR EL CAPÍTULO ACTUAL EN EL MENÚ
// ============================================
function markCurrentChapter() {
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '10');
    const chapterBtns = document.querySelectorAll('.chapter-btn');
    
    chapterBtns.forEach(btn => {
        btn.classList.remove('active');
        const btnNumber = parseInt(btn.textContent.replace('✓', '').trim());
        if (btnNumber === currentChapter) {
            btn.classList.add('active');
        }
    });
}

// ============================================
// FUNCIONES PARA EL MENÚ HAMBURGUESA
// ============================================
function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('menuOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    
    if (sideMenu && overlay && hamburger) {
        sideMenu.classList.remove('hidden');
        overlay.classList.remove('hidden');
        
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('open');
        hamburger.classList.toggle('open');
        
        if (!sideMenu.classList.contains('open')) {
            setTimeout(() => {
                if (!sideMenu.classList.contains('open')) {
                    sideMenu.classList.add('hidden');
                    overlay.classList.add('hidden');
                }
            }, 300);
        }
        
        markCurrentChapter();
    }
}

function updateMenuStats() {
    const menuCorrect = document.getElementById('menuCorrectCount');
    const menuIncorrect = document.getElementById('menuIncorrectCount');
    const menuProgress = document.getElementById('menuProgress');
    
    if (menuCorrect) menuCorrect.textContent = correctCount;
    if (menuIncorrect) menuIncorrect.textContent = incorrectCount;
    
    const total = correctCount + incorrectCount;
    const totalQuestions = shuffledQuestions.length;
    const progress = Math.round((total / totalQuestions) * 100) || 0;
    
    if (menuProgress) menuProgress.textContent = `${progress}%`;
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Capítulo 10 - Iniciando...');
    
    if (!domElements.correctCount || !domElements.incorrectCount) {
        console.error('No se encontraron los elementos de contador');
        return;
    }
    
    const savedLevel = localStorage.getItem('historiaDenominacional_level') || 'facil';
    currentLevel = savedLevel;
    
    const levelQuestions = filterQuestionsByLevel(currentLevel);
    shuffledQuestions = shuffleArray([...levelQuestions]);
    
    console.log(`Preguntas cargadas: ${shuffledQuestions.length} de nivel ${currentLevel}`);
    
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '10';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Confirmación y Expansión - Nivel ${currentLevel}`;
    }
    
    const allLevelBtns = document.querySelectorAll('.level-btn');
    allLevelBtns.forEach(btn => {
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('active');
        }
    });
    
    loadChapterSelector();
    loadChaptersMenu();
    markCurrentChapter();
    updateScoreDisplay();
    loadQuestion();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sideMenu = document.getElementById('sideMenu');
        if (sideMenu && sideMenu.classList.contains('open')) {
            toggleMenu();
        }
    }
});

window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;
window.changeLevel = changeLevel;
window.changeLevelPrompt = changeLevelPrompt;
window.toggleMenu = toggleMenu;
window.goToChapter = goToChapter;