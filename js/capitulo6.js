// ============================================
// PREGUNTAS DEL CAPÍTULO 6 CON NIVELES DE DIFICULTAD
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - Preguntas de opción múltiple (28 preguntas)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿Desde qué país llegaban llamados macedónicos a la Asociación General?',
        options: ['Francia', 'Suiza', 'Inglaterra', 'Alemania'],
        correct: 1,
        explanation: 'Llegaban llamados desde Suiza pidiendo luz acerca del sábado.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué Congreso de la Asociación General se nombró al primer misionero oficial al extranjero?',
        options: ['1872', '1874', '1876', '1878'],
        correct: 1,
        explanation: 'En el Congreso de la Asociación General de 1874.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer misionero oficial de la iglesia al extranjero?',
        options: ['J.N. Loughborough', 'J.N. Andrews', 'John G. Matteson', 'D.T. Bourdeau'],
        correct: 1,
        explanation: 'Juan Nevins Andrews fue el primer misionero oficial.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿A qué país fue enviado J.N. Andrews como primer misionero oficial?',
        options: ['Francia', 'Inglaterra', 'Suiza', 'Alemania'],
        correct: 2,
        explanation: 'Fue enviado a Suiza.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué edad tenía Charles, el hijo de J.N. Andrews, cuando viajó con él?',
        options: ['13 años', '15 años', '17 años', '19 años'],
        correct: 2,
        explanation: 'Su hijo Charles tenía 17 años.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué edad tenía Mary, la hija de J.N. Andrews, cuando viajó con él?',
        options: ['11 años', '13 años', '15 años', '17 años'],
        correct: 1,
        explanation: 'Su hija Mary tenía 13 años.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió la esposa de J.N. Andrews?',
        options: ['1870', '1871', '1872', '1873'],
        correct: 2,
        explanation: 'Su esposa había muerto en 1872.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién era M.B. Czechowski?',
        options: ['Un pastor luterano', 'Un sacerdote católico convertido', 'Un misionero bautista', 'Un laico adventista'],
        correct: 1,
        explanation: 'Era un sacerdote católico convertido que regresó a Europa.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué había hecho M.B. Czechowski antes de la llegada de Andrews?',
        options: ['Traducir la Biblia', 'Convencer a varios de la verdad del sábado', 'Abrir una iglesia', 'Escribir libros'],
        correct: 1,
        explanation: 'Había convencido a varios de la verdad del sábado, aunque sin patrocinio de la iglesia.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué se organizó tan pronto llegó Andrews a Suiza?',
        options: ['La primera iglesia', 'La Misión Europea', 'Una casa publicadora', 'Una escuela'],
        correct: 1,
        explanation: 'Se organizó la Misión Europea.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿A qué país fue Andrews después de Suiza?',
        options: ['Francia', 'Italia', 'Prusia', 'Inglaterra'],
        correct: 2,
        explanation: 'El pastor Andrews fue a Prusia.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Con cuántos observadores del sábado se puso en contacto en Prusia?',
        options: ['23', '36', '46', '56'],
        correct: 2,
        explanation: 'Se puso en contacto con 46 observadores del sábado.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció una casa publicadora en Basilea?',
        options: ['1874', '1875', '1876', '1877'],
        correct: 2,
        explanation: 'En 1876 se estableció una casa publicadora en Basilea.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué ciudad suiza se estableció la primera casa publicadora europea?',
        options: ['Ginebra', 'Berna', 'Basilea', 'Zúrich'],
        correct: 2,
        explanation: 'En Basilea.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llamó la primera revista adventista europea?',
        options: ['Review and Herald', 'Signs of the Times', 'The Present Truth', 'The Advent Review'],
        correct: 1,
        explanation: 'Signs of the Times.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué idioma se publicó la primera revista adventista europea?',
        options: ['Alemán', 'Francés', 'Italiano', 'Inglés'],
        correct: 1,
        explanation: 'Se publicó en francés.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién llevó el mensaje a Escandinavia en 1877?',
        options: ['J.N. Andrews', 'D.T. Bourdeau', 'John G. Matteson', 'A.C. Bourdeau'],
        correct: 2,
        explanation: 'John G. Matteson llevó el mensaje a Escandinavia en 1877.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se abrió una casa publicadora en Escandinavia?',
        options: ['1877', '1878', '1879', '1880'],
        correct: 2,
        explanation: 'Dos años más tarde, en 1879, se abrió una casa publicadora.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue asignado para confirmar la obra en Francia?',
        options: ['J.N. Andrews', 'D.T. Bourdeau', 'A.C. Bourdeau', 'John G. Matteson'],
        correct: 1,
        explanation: 'D.T. Bourdeau fue asignado a Francia.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué hermano de D.T. Bourdeau trabajó en Italia, Alemania, Francia, Suiza y Rumania?',
        options: ['J.N. Andrews', 'A.C. Bourdeau', 'John G. Matteson', 'Philipp Reiswig'],
        correct: 1,
        explanation: 'A.C. Bourdeau trabajó en múltiples países europeos.'
    },
    {
        id: 25,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primero en llevar la verdad a Rusia?',
        options: ['J.N. Andrews', 'A.C. Bourdeau', 'Philipp Reiswig', 'John G. Matteson'],
        correct: 2,
        explanation: 'Philipp Reiswig fue el primero que llevó la verdad a Rusia.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué característica física tenía Philipp Reiswig?',
        options: ['Era ciego', 'Era sordo', 'Era tartamudo', 'Era cojo'],
        correct: 2,
        explanation: 'Era tartamudo.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué nivel de cultura tenía Philipp Reiswig?',
        options: ['Alta cultura', 'Cultura media', 'No tenía mucha cultura', 'Era académico'],
        correct: 2,
        explanation: 'No tenía mucha cultura, pero Dios hizo de él un obrero excelente.'
    },
    {
        id: 31,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primero en llevar el mensaje a Inglaterra en 1878?',
        options: ['J.N. Andrews', 'William Ings', 'J.N. Loughborough', 'John G. Matteson'],
        correct: 1,
        explanation: 'William Ings fue a Inglaterra en 1878.'
    },
    {
        id: 32,
        level: 'facil',
        type: 'multiple',
        question: '¿En cuántas semanas tenía William Ings a diez personas guardando el sábado?',
        options: ['8 semanas', '12 semanas', '16 semanas', '20 semanas'],
        correct: 2,
        explanation: 'En 16 semanas tenía a diez personas guardando el sábado.'
    },
    {
        id: 33,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué pastor llegó más tarde a Inglaterra para hacerse cargo de la obra?',
        options: ['J.N. Andrews', 'J.N. Loughborough', 'D.T. Bourdeau', 'A.C. Bourdeau'],
        correct: 1,
        explanation: 'El pastor Loughborough llegó más tarde y se hizo cargo del trabajo.'
    },
    {
        id: 34,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué casa publicadora se estableció en Inglaterra?',
        options: ['Stanborough', 'Bristol', 'Londres', 'Manchester'],
        correct: 0,
        explanation: 'Se estableció la casa publicadora de Stanborough.'
    },
    {
        id: 35,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué colegio se estableció en Inglaterra?',
        options: ['Stanborough College', 'Newbold College', 'London College', 'Oxford College'],
        correct: 1,
        explanation: 'El Colegio de Newbold.'
    },
    {
        id: 36,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué se convirtió Gran Bretaña para la obra misionera?',
        options: ['En destino final', 'En sede de misioneros', 'En centro de publicaciones', 'En escuela principal'],
        correct: 1,
        explanation: 'Gran Bretaña llegó a ser sede de misioneros, enviando misioneros a otras tierras.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de completación (12 preguntas)
    // ============================================
    {
        id: 13,
        level: 'medio',
        type: 'fill',
        question: 'Los llamados macedónicos llegaban desde __________ pidiendo luz sobre el sábado.',
        correct: ['suiza'],
        explanation: 'Suiza.'
    },
    {
        id: 14,
        level: 'medio',
        type: 'fill',
        question: 'El primer misionero oficial fue J.N. __________ en 1874.',
        correct: ['andrews'],
        explanation: 'J.N. Andrews.'
    },
    {
        id: 15,
        level: 'medio',
        type: 'fill',
        question: 'Andrews viajó con sus hijos Charles (17) y Mary (__________).',
        correct: ['13'],
        explanation: 'Mary tenía 13 años.'
    },
    {
        id: 20,
        level: 'medio',
        type: 'fill',
        question: 'La casa publicadora en Basilea se estableció en __________.',
        correct: ['1876'],
        explanation: '1876.'
    },
    {
        id: 28,
        level: 'medio',
        type: 'fill',
        question: 'John G. __________ llevó el mensaje a Escandinavia en 1877.',
        correct: ['matteson'],
        explanation: 'John G. Matteson.'
    },
    {
        id: 29,
        level: 'medio',
        type: 'fill',
        question: 'A.C. Bourdeau trabajó en Italia, Alemania, Francia, Suiza y __________.',
        correct: ['rumania'],
        explanation: 'Rumania.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'fill',
        question: 'Philipp __________ fue el primero en llevar la verdad a Rusia.',
        correct: ['reiswig'],
        explanation: 'Philipp Reiswig.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'fill',
        question: 'William __________ fue el primero en llevar el mensaje a Inglaterra en 1878.',
        correct: ['ings'],
        explanation: 'William Ings.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'fill',
        question: 'En 16 semanas, Ings tenía a __________ personas guardando el sábado.',
        correct: ['10'],
        explanation: 'Diez personas.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'fill',
        question: 'El pastor J.N. Loughborough se hizo cargo de la obra en Inglaterra en __________.',
        correct: ['1878'],
        explanation: '1878.'
    },
    {
        id: 40,
        level: 'medio',
        type: 'fill',
        question: 'El Colegio de Newbold se estableció en __________.',
        correct: ['inglaterra'],
        explanation: 'Inglaterra.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas avanzadas (10 preguntas)
    // ============================================
    {
        id: 41,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué significado tenía que J.N. Andrews llevara a sus hijos a Suiza siendo viudo?',
        options: ['Demostraba su irresponsabilidad', 'Mostraba su completo compromiso con la misión', 'Era por necesidad económica', 'No tenía quien los cuidara'],
        correct: 1,
        explanation: 'Mostraba su completo compromiso con la misión, sacrificando la comodidad familiar por la obra.'
    },
    {
        id: 42,
        level: 'dificil',
        type: 'multiple',
        question: '¿Por qué era significativo que M.B. Czechowski predicara el sábado sin patrocinio oficial?',
        options: ['Creó confusión', 'Preparó el camino para Andrews', 'Fue un error', 'No tuvo importancia'],
        correct: 1,
        explanation: 'Aunque no tenía patrocinio, preparó el camino para Andrews al despertar interés en el sábado.'
    },
    {
        id: 43,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué estrategia misionera demostró la obra de Philipp Reiswig en Rusia?',
        options: ['Que se necesita cultura para servir', 'Que Dios usa a los humildes para grandes obras', 'Que el dinero es esencial', 'Que los líderes deben ir primero'],
        correct: 1,
        explanation: 'Demostró que Dios usa a los humildes y de poca cultura para hacer grandes obras.'
    },
    {
        id: 44,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué patrón geográfico siguió la expansión adventista en Europa?',
        options: ['De norte a sur', 'De oeste a este', 'De Suiza a los países vecinos', 'De Inglaterra al continente'],
        correct: 2,
        explanation: 'Comenzó en Suiza y se expandió a países vecinos como Francia, Alemania, Italia y Rumania.'
    },
    {
        id: 45,
        level: 'dificil',
        type: 'multiple',
        question: '¿Por qué fue estratégica la elección de Basilea para la primera casa publicadora?',
        options: ['Por ser la capital', 'Por su ubicación central en Europa', 'Por tener muchos adventistas', 'Por el idioma'],
        correct: 1,
        explanation: 'Basilea tenía una ubicación central en Europa, facilitando la distribución a múltiples países.'
    },
    {
        id: 46,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué transformación ocurrió con Gran Bretaña en el plan misionero adventista?',
        options: ['Pasó de ser campo a ser base de misiones', 'Siempre fue solo campo', 'Siempre fue solo base', 'Perdió importancia'],
        correct: 0,
        explanation: 'Gran Bretaña pasó de ser campo misionero a convertirse en sede que enviaba misioneros.'
    },
    {
        id: 47,
        level: 'dificil',
        type: 'fill',
        question: 'J.N. Andrews, siendo viudo, llevó a sus hijos Charles y Mary a Suiza en __________.',
        correct: ['1874'],
        explanation: '1874.'
    },
    {
        id: 48,
        level: 'dificil',
        type: 'fill',
        question: 'M.B. Czechowski era un sacerdote __________ convertido que predicó el sábado en Europa.',
        correct: ['católico'],
        explanation: 'Sacerdote católico convertido.'
    },
    {
        id: 49,
        level: 'dificil',
        type: 'fill',
        question: 'La primera casa publicadora europea se estableció en __________, Suiza, en 1876.',
        correct: ['basilea'],
        explanation: 'Basilea.'
    },
    {
        id: 50,
        level: 'dificil',
        type: 'fill',
        question: 'William Ings estableció un grupo de __________ creyentes en Inglaterra en solo 16 semanas.',
        correct: ['10'],
        explanation: 'Diez creyentes.'
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
    { number: 7, title: 'Progreso y Pérdidas de Importancia' },
    { number: 8, title: 'Continúa la Expansión de las Misiones' },
    { number: 9, title: 'Progreso a Pesar de los Reveses' },
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '6');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '6');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '6');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '6';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Visión Mundial - Nivel ${level}`;
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
        '1872', '1873', '1874', '1875', '1876', '1877', '1878', '1879', '1880',
        'suiza', 'francia', 'inglaterra', 'alemania', 'prusia', 'rusia', 'rumania', 'escandinavia',
        'basilea', 'stanborough', 'newbold',
        'andrews', 'loughborough', 'bourdeau', 'matteson', 'ings', 'reiswig', 'czechowski',
        '13', '17', '46', '10', '16', 'católico'
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
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien la expansión mundial de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 6 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '6');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '6');
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
    console.log('Capítulo 6 - Iniciando...');
    
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '6';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Visión Mundial - Nivel ${currentLevel}`;
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