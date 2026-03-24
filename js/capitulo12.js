// ============================================
// PREGUNTAS DEL CAPÍTULO 12 CON NIVELES DE DIFICULTAD
// CLASIFICADAS SEGÚN COMPLEJIDAD APARENTE
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - Preguntas básicas de hechos directos (35 preguntas)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuál es el objetivo de cada departamento de la iglesia?',
        options: ['Administrar la iglesia', 'Ganar almas para el Señor Jesús', 'Recaudar fondos', 'Organizar eventos'],
        correct: 1,
        explanation: 'El objetivo de cada departamento es ganar almas para el Señor Jesús.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué tipo de trabajo realizan los departamentos?',
        options: ['Administrativo', 'Asesor', 'Ejecutivo', 'Directivo'],
        correct: 1,
        explanation: 'El trabajo departamental es de naturaleza asesora, más bien que administrativo.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué niveles hay directores departamentales?',
        options: ['Solo a nivel mundial', 'Solo a nivel local', 'En todos los niveles', 'Solo en divisiones'],
        correct: 2,
        explanation: 'Hay directores en iglesia local, asociación/misión, unión, división y Asociación General.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Actividades Laicas de la Asociación General?',
        options: ['Ve y Haz', 'The Adventist Layman', 'Tell', 'Renovación'],
        correct: 1,
        explanation: 'Publica trimestralmente "The Adventist Layman".'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Actividades Laicas de la División Interamericana?',
        options: ['The Adventist Layman', 'Ve y Haz', 'Tell', 'Renovación'],
        correct: 1,
        explanation: 'Publica trimestralmente la revista "Ve y Haz".'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció el Departamento de Comunicación?',
        options: ['1970', '1971', '1972', '1973'],
        correct: 2,
        explanation: 'En 1972 la Asociación General estableció el Departamento de Comunicación.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué departamentos antiguos fueron incorporados al Departamento de Comunicación?',
        options: ['Jóvenes y Escuela Sabática', 'Relaciones Públicas y Radio y Televisión', 'Salud y Temperancia', 'Publicaciones y Mayordomía'],
        correct: 1,
        explanation: 'Incorporó al Buró de Relaciones Públicas y al Departamento de Radio y Televisión.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista oficial publica el Departamento de Comunicación?',
        options: ['Tell', 'The Adventist Layman', 'Liberty', 'Listen'],
        correct: 0,
        explanation: 'La revista oficial se llama "Tell".'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se empezó la primera escuela adventista en Battle Creek?',
        options: ['1870', '1871', '1872', '1873'],
        correct: 2,
        explanation: 'Los pioneros empezaron una pequeña escuela en 1872 en Battle Creek.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer maestro de la escuela de Battle Creek?',
        options: ['Jaime White', 'G.H. Bell', 'J.N. Andrews', 'José Bates'],
        correct: 1,
        explanation: 'El primer maestro fue G.H. Bell.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué énfasis coloca el sistema de educación adventista?',
        options: ['Solo lo académico', 'Desarrollo cuádruple: físico, mental, cultural y social', 'Solo lo espiritual', 'Solo lo físico'],
        correct: 1,
        explanation: 'Coloca el énfasis en el desarrollo cuádruple del hombre.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llama la escuela por correspondencia en inglés?',
        options: ['Home Study Institute', 'Instituto de Estudios en el Hogar', 'Escuela Radio Postal', 'Correspondence School'],
        correct: 0,
        explanation: 'El Home Study Institute (Instituto de Estudios en el Hogar).'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde está la base de la escuela por correspondencia en castellano?',
        options: ['México', 'Chile', 'Buenos Aires, Argentina', 'Colombia'],
        correct: 2,
        explanation: 'En Buenos Aires, Argentina.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Educación de la Asociación General?',
        options: ['Renovación', 'Journal of Adventist Education', 'The Ministry', 'Worker'],
        correct: 1,
        explanation: 'El "Journal of Adventist Education".'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo ha sido llamada la Escuela Sabática?',
        options: ['La iglesia en acción', 'La iglesia en estudio', 'La iglesia en oración', 'La iglesia en misiones'],
        correct: 1,
        explanation: 'La escuela sabática ha sido llamada "la iglesia en estudio".'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista oficial publica el Departamento de Escuela Sabática?',
        options: ['Worker', 'El Promotor', 'Renovación', 'The Ministry'],
        correct: 0,
        explanation: 'La revista oficial se llama "Worker".'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica la División Interamericana para Escuela Sabática?',
        options: ['Worker', 'El Promotor', 'Renovación', 'Ve y Haz'],
        correct: 1,
        explanation: 'Publica trimestralmente "El Promotor".'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue adoptado el Club de Conquistadores por la Asociación General?',
        options: ['1948', '1949', '1950', '1951'],
        correct: 2,
        explanation: 'El Club de Conquistadores fue adoptado en 1950.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año cambió el nombre a Departamento de Jóvenes Adventistas?',
        options: ['1976', '1977', '1978', '1979'],
        correct: 2,
        explanation: 'Cambió en 1978 de Jóvenes Misioneros Voluntarios a Jóvenes Adventistas.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica la Asociación General para dirigentes de jóvenes?',
        options: ['Perspectiva', 'Youth Ministry Accent', 'Guide', 'Insight'],
        correct: 1,
        explanation: 'Publica "Youth Ministry Accent".'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica la División Interamericana para dirigentes de jóvenes?',
        options: ['Youth Ministry Accent', 'Perspectiva', 'El Promotor', 'Ve y Haz'],
        correct: 1,
        explanation: 'Publica "Perspectiva".'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué programa para jóvenes introdujo el Departamento de Jóvenes en 1978?',
        options: ['Comparte tu fe', 'Festival de la Palabra', 'Voz de la Juventud', 'Misión 72'],
        correct: 1,
        explanation: 'Introdujo el Festival de la Palabra en 1978.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer director del Departamento de Jóvenes (1907-1930)?',
        options: ['H.T. Elliott', 'M.E. Kern', 'A.W. Peterson', 'E.W. Dunbar'],
        correct: 1,
        explanation: 'M.E. Kern fue director de 1907 a 1930.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Libertad Religiosa?',
        options: ['The Ministry', 'Liberty', 'Listen', 'Tell'],
        correct: 1,
        explanation: 'Publica la revista "Liberty".'
    },
    {
        id: 25,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llama el programa radial más conocido en América Latina?',
        options: ['La Voz de la Profecía', 'La Voz de la Esperanza', 'It is Written', 'Faith for Today'],
        correct: 1,
        explanation: 'El programa es "La Voz de la Esperanza".'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién inició "La Voz de la Esperanza" en Cuba?',
        options: ['H.M.S. Richards', 'George Vandeman', 'Braulio Pérez Marcio', 'W.A. Fagal'],
        correct: 2,
        explanation: 'Fue iniciado por el pastor Braulio Pérez Marcio.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue organizado el Departamento de Mayordomía y Desarrollo?',
        options: ['1965', '1966', '1967', '1968'],
        correct: 2,
        explanation: 'Fue organizado en 1967.'
    },
    {
        id: 28,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista publica la Asociación Ministerial?',
        options: ['The Ministry', 'El Ministerio Adventista', 'Ambas', 'Ninguna'],
        correct: 2,
        explanation: 'Publica "The Ministry" en inglés y "El Ministerio Adventista" en castellano.'
    },
    {
        id: 29,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año data la obra de publicaciones?',
        options: ['1847', '1848', '1849', '1850'],
        correct: 2,
        explanation: 'La obra de publicaciones data de 1849.'
    },
    {
        id: 30,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer colportor?',
        options: ['J.N. Andrews', 'George King', 'Jaime White', 'José Bates'],
        correct: 1,
        explanation: 'El primer colportor fue George King.'
    },
    {
        id: 31,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año empezó a trabajar el primer colportor?',
        options: ['1876', '1877', '1878', '1879'],
        correct: 2,
        explanation: 'George King empezó a trabajar en 1878.'
    },
    {
        id: 32,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista de salud se publica en castellano?',
        options: ['Life and Health', 'Viva Mejor', 'Health', 'Listen'],
        correct: 1,
        explanation: 'En castellano tenemos la revista "Viva Mejor".'
    },
    {
        id: 33,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista de salud se publica en inglés?',
        options: ['Viva Mejor', 'Life and Health', 'Health Today', 'Listen'],
        correct: 1,
        explanation: 'La revista "Life and Health".'
    },
    {
        id: 34,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó el Departamento de Servicios Fiduciarios?',
        options: ['1966', '1967', '1968', '1969'],
        correct: 2,
        explanation: 'Se organizó en 1968.'
    },
    {
        id: 35,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó el Servicio Mundial de Alimentos?',
        options: ['1966', '1967', '1968', '1969'],
        correct: 2,
        explanation: 'Fue organizado en 1968.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de detalles específicos (6 preguntas)
    // ============================================
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue director de 1955 a 1970 del Departamento de Jóvenes?',
        options: ['Theodore Lucas', 'John Hancock', 'Leo Ranzolin', 'E.W. Dunbar'],
        correct: 0,
        explanation: 'Theodore Lucas fue director de 1955 a 1970.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue director de 1970 a 1980 del Departamento de Jóvenes?',
        options: ['Theodore Lucas', 'Leo Ranzolin', 'John Hancock', 'M.E. Kern'],
        correct: 2,
        explanation: 'John Hancock fue director de 1970 a 1980.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue director del Departamento de Jóvenes desde 1980?',
        options: ['John Hancock', 'Leo Ranzolin', 'Theodore Lucas', 'H.T. Elliott'],
        correct: 1,
        explanation: 'Leo Ranzolin fue director desde 1980.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué revista publica el Departamento de Temperancia?',
        options: ['Liberty', 'Listen', 'Life and Health', 'The Ministry'],
        correct: 1,
        explanation: 'La principal publicación es la revista "Listen".'
    },
    {
        id: 40,
        level: 'medio',
        type: 'fill',
        question: 'El Departamento de Comunicación se estableció en __________.',
        correct: ['1972'],
        explanation: '1972.'
    },
    {
        id: 41,
        level: 'medio',
        type: 'fill',
        question: 'El primer maestro de la escuela de Battle Creek fue G.H. __________.',
        correct: ['bell'],
        explanation: 'G.H. Bell.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas de conexiones y datos específicos (4 preguntas)
    // ============================================
    {
        id: 42,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién sirvió como secretario de Publicaciones E.G. White de 1915 a 1937?',
        options: ['Arthur L. White', 'William C. White', 'Robert Olson', 'Jaime White'],
        correct: 1,
        explanation: 'William C. White, hijo de Elena White.'
    },
    {
        id: 43,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién sirvió como secretario de Publicaciones E.G. White de 1937 a 1978?',
        options: ['William C. White', 'Arthur L. White', 'Robert Olson', 'James White'],
        correct: 1,
        explanation: 'Arthur L. White, nieto de Elena White.'
    },
    {
        id: 44,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién es secretario de Publicaciones E.G. White desde 1978?',
        options: ['Arthur L. White', 'William C. White', 'Robert Olson', 'Neal C. Wilson'],
        correct: 2,
        explanation: 'Robert Olson es secretario desde 1978.'
    },
    {
        id: 45,
        level: 'dificil',
        type: 'fill',
        question: 'El programa radial "La Voz de la Esperanza" fue iniciado por Braulio Pérez __________.',
        correct: ['marcio'],
        explanation: 'Braulio Pérez Marcio.'
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '12');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '12');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '12');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '12';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Los Departamentos de la Iglesia - Nivel ${level}`;
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
        '1849', '1872', '1878', '1907', '1950', '1967', '1968', '1972', '1978', '1980',
        'the adventist layman', 've y haz', 'tell', 'worker', 'el promotor', 'perspectiva',
        'youth ministry accent', 'liberty', 'listen', 'the ministry', 'viva mejor', 'life and health',
        'kern', 'lucas', 'hancock', 'ranzolin', 'bell', 'perez marcio',
        'william white', 'arthur white', 'olson'
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
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien los departamentos de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 12 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '12');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '12');
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
    console.log('Capítulo 12 - Iniciando...');
    
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '12';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Los Departamentos de la Iglesia - Nivel ${currentLevel}`;
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