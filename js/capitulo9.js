// ============================================
// PREGUNTAS DEL CAPÍTULO 9 CON NIVELES DE DIFICULTAD
// CLASIFICADAS SEGÚN COMPLEJIDAD APARENTE
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - Preguntas básicas de hechos directos (26 preguntas)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió el pastor J.N. Loughborough?',
        options: ['1922', '1923', '1924', '1925'],
        correct: 2,
        explanation: 'J.N. Loughborough murió en 1924, marcando el fin de la era de los pioneros.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué marcó la muerte de J.N. Loughborough?',
        options: ['El fin de las publicaciones', 'El fin de la era de los pioneros', 'El inicio de una nueva era', 'El fin de las misiones'],
        correct: 1,
        explanation: 'La muerte de Loughborough en 1924 marcó el fin de la era de los pioneros.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos misioneros fueron enviados al extranjero en el Congreso de 1926?',
        options: ['100', '125', '150', '175'],
        correct: 2,
        explanation: 'En el Congreso de 1926 fueron enviados 150 misioneros al extranjero.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó la Gran Depresión financiera mundial?',
        options: ['1928', '1929', '1930', '1931'],
        correct: 1,
        explanation: 'La Gran Depresión comenzó en 1929.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue nombrado presidente de la Asociación General en 1930?',
        options: ['W.A. Spicer', 'C.H. Watson', 'A.G. Daniells', 'J.N. Loughborough'],
        correct: 1,
        explanation: 'C.H. Watson, presidente de la División Australasiana, fue nombrado presidente de la Asociación General en 1930.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Por qué cualidades se destacaba C.H. Watson?',
        options: ['Por su predicación', 'Por su integridad financiera y agudeza en negocios', 'Por sus escritos', 'Por su labor misionera'],
        correct: 1,
        explanation: 'Se destacaba por su integridad financiera y su agudeza en los negocios.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuánto dinero recibió menos la iglesia entre 1931 y 1934?',
        options: ['44 millones', '54 millones', '64 millones', '74 millones'],
        correct: 1,
        explanation: 'La iglesia recibió 54 millones de dólares menos de 1931 a 1934.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos miembros aumentó la feligresía durante la depresión?',
        options: ['70,000', '80,000', '90,000', '100,000'],
        correct: 2,
        explanation: 'La feligresía aumentó en 90,000 miembros.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas misiones se establecieron durante la depresión?',
        options: ['38', '43', '48', '53'],
        correct: 2,
        explanation: 'Se establecieron 48 misiones.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos obreros más se emplearon durante la depresión?',
        options: ['554', '604', '654', '704'],
        correct: 2,
        explanation: 'Se emplearon 654 obreros más.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se puso en servicio la primera lancha misionera?',
        options: ['1930', '1931', '1932', '1933'],
        correct: 1,
        explanation: 'En 1931, Leo B. Halliwell y su esposa Jessie pusieron en servicio la primera lancha misionera.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Quiénes pusieron en servicio la primera lancha misionera?',
        options: ['Los Halliwell', 'Los White', 'Los Andrews', 'Los Haskell'],
        correct: 0,
        explanation: 'Leo B. Halliwell y su esposa Jessie.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde navegan estas lanchas misioneras?',
        options: ['Por el Mississippi', 'Por el Amazonas y otros ríos de Sudamérica', 'Por el Orinoco', 'Por el Río de la Plata'],
        correct: 1,
        explanation: 'Navegan por el Amazonas y otros ríos de América del Sur.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿Por qué se compró una lancha en lugar de un hospital?',
        options: ['Porque era mejor', 'Porque no alcanzaba el dinero para un hospital', 'Porque había muchos ríos', 'Porque Dios lo ordenó'],
        correct: 1,
        explanation: 'No alcanzaba el dinero para un hospital, así que compraron una lancha.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó la Sociedad Americana de Temperancia?',
        options: ['1931', '1932', '1933', '1934'],
        correct: 1,
        explanation: 'La Asociación General organizó la Sociedad Americana de Temperancia en 1932.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó la Asociación Internacional de Temperancia?',
        options: ['1945', '1946', '1947', '1948'],
        correct: 2,
        explanation: 'La Asociación Internacional de Temperancia se organizó en 1947.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué ciudad se fundó la primera sociedad de temperancia en 1826?',
        options: ['Nueva York', 'Filadelfia', 'Boston', 'Washington'],
        correct: 2,
        explanation: 'Se fundó en Boston en 1826, antes del movimiento adventista.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció el Seminario Adventista de Teología?',
        options: ['1935', '1936', '1937', '1938'],
        correct: 1,
        explanation: 'Se estableció en Washington, D.C. en 1936.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde se estableció el Seminario Teológico?',
        options: ['Nueva York', 'Battle Creek', 'Washington, D.C.', 'Chicago'],
        correct: 2,
        explanation: 'En Washington, D.C.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año el Seminario pasó a formar parte de la Universidad Andrews?',
        options: ['1958', '1959', '1960', '1961'],
        correct: 2,
        explanation: 'En 1960 el Seminario pasó a formar parte de la Universidad Andrews.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿En honor de quién se nombró la Universidad Andrews?',
        options: ['J.N. Loughborough', 'J.N. Andrews', 'Jaime White', 'Urías Smith'],
        correct: 1,
        explanation: 'Nombrada en honor de J.N. Andrews, el primer misionero.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año empezaron a surgir las fábricas de alimentos saludables?',
        options: ['1895', '1896', '1897', '1898'],
        correct: 2,
        explanation: 'Desde 1897 empezaron a surgir las fábricas de alimentos saludables.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos beneficios proporciona esta industria?',
        options: ['Uno', 'Dos', 'Tres', 'Cuatro'],
        correct: 2,
        explanation: 'Constituye una triple bendición.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'multiple',
        question: 'Menciona un beneficio de las fábricas de alimentos saludables.',
        options: ['Proporciona alimentos saludables', 'Proporciona viajes', 'Proporciona educación', 'Proporciona vivienda'],
        correct: 0,
        explanation: 'Proporciona alimentos saludables, empleo y dinero para misiones.'
    },
    {
        id: 25,
        level: 'facil',
        type: 'multiple',
        question: '¿Entre qué años ocurrió la Segunda Guerra Mundial?',
        options: ['1938-1944', '1939-1945', '1940-1946', '1941-1947'],
        correct: 1,
        explanation: 'La Segunda Guerra Mundial fue de 1939 a 1945.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué dificultad afectó la producción de materiales?',
        options: ['Falta de trabajadores', 'Disminución de papel', 'Falta de dinero', 'Cierre de fábricas'],
        correct: 1,
        explanation: 'Disminuyó la producción de materiales, como el papel.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de detalles específicos (8 preguntas)
    // ============================================
    {
        id: 27,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año se adoptó la declaración de creencias fundamentales?',
        options: ['1930', '1931', '1932', '1933'],
        correct: 1,
        explanation: 'La declaración de creencias fundamentales fue adoptada en 1931.'
    },
    {
        id: 28,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año se adoptó el certificado bautismal uniforme?',
        options: ['1939', '1940', '1941', '1942'],
        correct: 2,
        explanation: 'El certificado bautismal uniforme fue adoptado en 1941.'
    },
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántas preguntas deben responder los candidatos al bautismo?',
        options: ['10', '11', '12', '13'],
        correct: 3,
        explanation: 'Son trece las preguntas que los candidatos al bautismo deben responder.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue el pionero de la radiodifusión adventista?',
        options: ['H.M.S. Richards', 'W.A. Spicer', 'C.H. Watson', 'J.N. Loughborough'],
        correct: 0,
        explanation: 'El pastor H.M.S. Richards fue el pionero de la radiodifusión.'
    },
    {
        id: 31,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año tuvo H.M.S. Richards la idea de la radio?',
        options: ['1918', '1919', '1920', '1921'],
        correct: 2,
        explanation: 'Tuvo la idea en 1920.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año hizo H.M.S. Richards su primera transmisión?',
        options: ['1924', '1925', '1926', '1927'],
        correct: 2,
        explanation: 'Hizo su primera transmisión en 1926.'
    },
    {
        id: 33,
        level: 'medio',
        type: 'multiple',
        question: '¿Dónde estaba ubicada la primera oficina de H.M.S. Richards?',
        options: ['En una iglesia', 'En una pollería convertida', 'En su casa', 'En una escuela'],
        correct: 1,
        explanation: 'Su oficina estaba situada en una pollería convertida en oficina.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año "The Voice of Prophecy" fue aceptada como proyecto denominacional?',
        options: ['1939', '1940', '1941', '1942'],
        correct: 2,
        explanation: 'No fue hasta 1941 que fue aceptada como proyecto denominacional.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas de conexiones y análisis (7 preguntas)
    // ============================================
    {
        id: 35,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuántas estaciones radiales usan el programa en la División Norteamericana?',
        options: ['500', '600', '700', '800'],
        correct: 3,
        explanation: 'Usa unas 800 estaciones radiales.'
    },
    {
        id: 36,
        level: 'dificil',
        type: 'multiple',
        question: '¿En cuántas estaciones fuera de EE.UU. se escuchan programas afiliados?',
        options: ['Más de 500', 'Más de 800', 'Más de 1,000', 'Más de 1,500'],
        correct: 2,
        explanation: 'Más de 1,000 estaciones fuera de Estados Unidos.'
    },
    {
        id: 37,
        level: 'dificil',
        type: 'fill',
        question: 'J.N. Loughborough murió en __________, marcando el fin de la era de los pioneros.',
        correct: ['1924'],
        explanation: '1924.'
    },
    {
        id: 38,
        level: 'dificil',
        type: 'fill',
        question: 'En el Congreso de 1926 fueron enviados __________ misioneros al extranjero.',
        correct: ['150'],
        explanation: '150 misioneros.'
    },
    {
        id: 39,
        level: 'dificil',
        type: 'fill',
        question: 'La Gran Depresión comenzó en el año __________.',
        correct: ['1929'],
        explanation: '1929.'
    },
    {
        id: 40,
        level: 'dificil',
        type: 'fill',
        question: 'C.H. __________ fue nombrado presidente de la Asociación General en 1930.',
        correct: ['watson'],
        explanation: 'C.H. Watson.'
    },
    {
        id: 41,
        level: 'dificil',
        type: 'fill',
        question: 'La primera lancha misionera fue puesta en servicio en __________ por los Halliwell.',
        correct: ['1931'],
        explanation: '1931.'
    },
    {
        id: 42,
        level: 'dificil',
        type: 'fill',
        question: 'El Seminario Teológico se estableció en Washington, D.C. en __________.',
        correct: ['1936'],
        explanation: '1936.'
    },
    {
        id: 43,
        level: 'dificil',
        type: 'fill',
        question: 'La Segunda Guerra Mundial fue de 1939 a __________.',
        correct: ['1945'],
        explanation: '1945.'
    },
    {
        id: 44,
        level: 'dificil',
        type: 'fill',
        question: 'La declaración de creencias fundamentales fue adoptada en __________.',
        correct: ['1931'],
        explanation: '1931.'
    },
    {
        id: 45,
        level: 'dificil',
        type: 'fill',
        question: 'H.M.S. __________ fue el pionero de la radiodifusión adventista.',
        correct: ['richards'],
        explanation: 'H.M.S. Richards.'
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '9');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '9');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '9');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '9';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Progreso a pesar de los Reveses - Nivel ${level}`;
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
        '1922', '1923', '1924', '1925', '1926', '1928', '1929', '1930', '1931', '1932',
        '1933', '1934', '1935', '1936', '1937', '1938', '1939', '1940', '1941', '1942',
        '1945', '1947', '1960',
        'loughborough', 'watson', 'halliwell', 'richards', 'andrews',
        '100', '125', '150', '175', '54', '90', '48', '654', '800', '1000', '13'
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
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien el progreso a pesar de los reveses.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 9 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '9');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '9');
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
    console.log('Capítulo 9 - Iniciando...');
    
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '9';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Progreso a pesar de los Reveses - Nivel ${currentLevel}`;
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