// ============================================
// PREGUNTAS DEL CAPÍTULO 8 CON NIVELES DE DIFICULTAD
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
        question: '¿En qué año R.A. Caldwell fue a las Filipinas?',
        options: ['1904', '1905', '1906', '1907'],
        correct: 1,
        explanation: 'R.A. Caldwell fue a las Filipinas en 1905.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año J.L. McElhany fue a las Filipinas?',
        options: ['1905', '1906', '1907', '1908'],
        correct: 1,
        explanation: 'J.L. McElhany fue a las Filipinas en 1906.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue a Grecia en 1907?',
        options: ['R.A. Caldwell', 'J.L. McElhany', 'W.E. Howell', 'C.H. Parker'],
        correct: 2,
        explanation: 'W.E. Howell fue a Grecia en 1907.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año C.H. Parker llegó a Nuevas Hébridas?',
        options: ['1910', '1911', '1912', '1913'],
        correct: 2,
        explanation: 'C.H. Parker llegó a Nuevas Hébridas en 1912.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién comenzó la obra en las Islas Salomón en 1914?',
        options: ['C.H. Parker', 'G.F. Jones', 'F.A. Stahl', 'W.E. Howell'],
        correct: 1,
        explanation: 'G.F. Jones comenzó en las Islas Salomón en 1914.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién inició la obra entre los incas de América del Sur en 1909?',
        options: ['R.A. Caldwell', 'J.L. McElhany', 'F.A. Stahl', 'W.E. Howell'],
        correct: 2,
        explanation: 'F.A. Stahl inició la obra entre los incas en 1909.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año F.A. Stahl inició la obra entre los incas?',
        options: ['1907', '1908', '1909', '1910'],
        correct: 2,
        explanation: 'En 1909.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año Jasper Wayne comenzó el plan de recolección?',
        options: ['1902', '1903', '1904', '1905'],
        correct: 1,
        explanation: 'En 1903, Jasper Wayne empezó a obsequiar Signs of the Times y a recolectar dinero.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién expresó su aprobación y promovió el plan de recolección?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'Urías Smith'],
        correct: 2,
        explanation: 'Elena White expresó su aprobación y promovió la idea.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista obsequiaba Jasper Wayne?',
        options: ['Review and Herald', 'Signs of the Times', 'Youth\'s Instructor', 'The Present Truth'],
        correct: 1,
        explanation: 'Obsequiaba la revista Signs of the Times.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué oportunidad da la campaña de recolección a los miembros?',
        options: ['Viajar', 'Comunicar el mensaje de los tres ángeles', 'Conocer líderes', 'Recibir dinero'],
        correct: 1,
        explanation: 'La oportunidad de comunicar al público el mensaje de los tres ángeles.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde se estableció la primera escuela de medicina?',
        options: ['Loma Linda', 'Battle Creek', 'Washington', 'Los Ángeles'],
        correct: 1,
        explanation: 'La primera escuela de medicina se estableció en Battle Creek.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué pasó con la escuela de medicina de Battle Creek?',
        options: ['Creció', 'Dejó de pertenecer a la denominación', 'Se mudó', 'Cerró temporalmente'],
        correct: 1,
        explanation: 'Junto con el Dr. Kellogg, dejó de pertenecer a la denominación y fue clausurada.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció el Colegio de Médicos Evangelistas en Loma Linda?',
        options: ['1909', '1910', '1911', '1912'],
        correct: 1,
        explanation: 'En 1910 se estableció sobre bases firmes en Loma Linda, California.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se abrió una clínica en Los Ángeles?',
        options: ['1912', '1913', '1914', '1915'],
        correct: 1,
        explanation: 'En 1913 se abrió una clínica en Los Ángeles.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llamó la clínica de Los Ángeles?',
        options: ['Hospital Loma Linda', 'Hospital White Memorial', 'Hospital Battle Creek', 'Hospital Adventista'],
        correct: 1,
        explanation: 'Luego se convirtió en el Hospital White Memorial.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué nombre recibió después el Colegio de Médicos Evangelistas?',
        options: ['Universidad de Loma Linda', 'Universidad de California', 'Universidad Adventista', 'Instituto Médico'],
        correct: 0,
        explanation: 'Recibió el nombre de Universidad de Loma Linda.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó el campo mundial en divisiones?',
        options: ['1912', '1913', '1914', '1915'],
        correct: 1,
        explanation: 'En 1913 se organizó el campo mundial en divisiones.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué cargo tienen los presidentes de división en la Asociación General?',
        options: ['Tesoreros', 'Secretarios', 'Vicepresidentes', 'Directores'],
        correct: 2,
        explanation: 'Son vicepresidentes de la Asociación General.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se alargó el tiempo entre congresos de 2 a 4 años?',
        options: ['1903', '1904', '1905', '1906'],
        correct: 2,
        explanation: 'En 1905 se alargó a cuatro años.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se alargó a cinco años (quinquenio)?',
        options: ['1968', '1969', '1970', '1971'],
        correct: 2,
        explanation: 'En 1970, a cinco años de intervalo.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué publicación contiene la lista completa de oficiales?',
        options: ['Review and Herald', 'Anuario Adventista (Year Book)', 'Signs of the Times', 'Ministry'],
        correct: 1,
        explanation: 'El Anuario Adventista (Year Book) se publica anualmente.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió Elena G. de White?',
        options: ['1914', '1915', '1916', '1917'],
        correct: 1,
        explanation: 'Elena White murió el 16 de julio de 1915.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué edad tenía Elena White cuando murió?',
        options: ['84 años', '85 años', '86 años', '87 años'],
        correct: 3,
        explanation: 'Murió a la edad de 87 años.'
    },
    {
        id: 25,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos años de ministerio tuvo Elena White?',
        options: ['50 años', '60 años', '70 años', '80 años'],
        correct: 2,
        explanation: 'Setenta años de ministerio.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántas páginas escribió Elena White aproximadamente?',
        options: ['50,000', '75,000', '100,000', '125,000'],
        correct: 2,
        explanation: 'Escribió más de 100,000 páginas.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos artículos en revistas escribió?',
        options: ['Más de 2,000', 'Más de 3,000', 'Más de 4,000', 'Más de 5,000'],
        correct: 2,
        explanation: 'Más de 4,000 artículos en revistas.'
    },
    {
        id: 28,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos manuscritos y cartas escribió?',
        options: ['4,000', '6,000', '8,000', '10,000'],
        correct: 2,
        explanation: 'Por lo menos 8,000 manuscritos y cartas.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de detalles específicos (10 preguntas)
    // ============================================
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántos libros escribió Elena White?',
        options: ['45', '55', '65', '75'],
        correct: 2,
        explanation: 'El total de sus libros alcanza la cifra de 65.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año Elena White declaró que sus escritos seguirían hablando?',
        options: ['1905', '1906', '1907', '1908'],
        correct: 2,
        explanation: 'En 1907 ella declaró: "Mis escritos hablarán constantemente".'
    },
    {
        id: 31,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año fue el último congreso al que asistió Elena White?',
        options: ['1907', '1908', '1909', '1910'],
        correct: 2,
        explanation: 'En 1909, el último congreso al que asistió.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué dijo Elena White sosteniendo la Biblia en 1909?',
        options: ['Lean este libro', 'Estudien este libro', 'Hermanos, les recomiendo este libro', 'Este es el libro'],
        correct: 2,
        explanation: '"Hermanos, les recomiendo este libro".'
    },
    {
        id: 33,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué dijo Elena White acerca de la Biblia en relación con la regla de fe?',
        options: ['Es un libro más', 'Es la única regla de fe y práctica', 'Es importante', 'Es inspirada'],
        correct: 1,
        explanation: 'La Biblia era "la única regla de fe y práctica".'
    },
    {
        id: 34,
        level: 'medio',
        type: 'multiple',
        question: '¿Cómo llamó Elena White a sus escritos en relación con la Biblia?',
        options: ['Luz mayor', 'Luz más pequeña', 'Luz igual', 'Luz adicional'],
        correct: 1,
        explanation: '"El Señor ha dado una luz más pequeña para dirigir a hombres y mujeres a una luz mayor".'
    },
    {
        id: 35,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuáles fueron las últimas palabras de Elena White?',
        options: ['Hasta pronto', 'Yo sé en quién he creído', 'Viene el Señor', 'En paz descanso'],
        correct: 1,
        explanation: '"Yo sé en quién he creído".'
    },
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Entre qué años ocurrió la Primera Guerra Mundial?',
        options: ['1913-1917', '1914-1918', '1915-1919', '1916-1920'],
        correct: 1,
        explanation: 'La Primera Guerra Mundial fue de 1914 a 1918.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año A.G. Daniells dejó la presidencia de la Asociación General?',
        options: ['1920', '1921', '1922', '1923'],
        correct: 2,
        explanation: 'En 1922, A.G. Daniells dejó la presidencia.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue el sucesor de A.G. Daniells como presidente?',
        options: ['W.A. Spicer', 'J.N. Andrews', 'G.I. Butler', 'S.N. Haskell'],
        correct: 0,
        explanation: 'W.A. Spicer fue el nuevo presidente.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas de conexiones y análisis (7 preguntas)
    // ============================================
    {
        id: 39,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué cargo había ocupado W.A. Spicer por veinte años que lo preparó para la presidencia?',
        options: ['Tesorero', 'Presidente', 'Secretario', 'Director'],
        correct: 2,
        explanation: 'Había sido secretario de la Asociación General por veinte años, dándole visión internacional.'
    },
    {
        id: 40,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué tipo de líder se necesitaba en 1922 y por qué?',
        options: ['Joven', 'Con visión internacional', 'Local', 'Con dinero'],
        correct: 1,
        explanation: 'Se necesitaba un líder con visión internacional porque la iglesia ya era mundial.'
    },
    {
        id: 41,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué significado tenía la expansión misionera en Filipinas con Caldwell y McElhany?',
        options: ['Fue un fracaso', 'Estableció la base para el crecimiento en Asia', 'Fue temporal', 'Solo fue un intento'],
        correct: 1,
        explanation: 'Estableció la base para el crecimiento adventista en el sudeste asiático.'
    },
    {
        id: 42,
        level: 'dificil',
        type: 'multiple',
        question: '¿Por qué fue significativa la obra de F.A. Stahl entre los incas?',
        options: ['Porque aprendió su idioma', 'Porque llevó el evangelio a culturas indígenas', 'Porque construyó hospitales', 'Porque fue mártir'],
        correct: 1,
        explanation: 'Fue significativo porque llevó el evangelio a culturas indígenas de América del Sur.'
    },
    {
        id: 43,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué relación había entre el plan de recolección de Wayne y el mensaje de los tres ángeles?',
        options: ['Ninguna', 'Permitía financiar la distribución de literatura', 'Era solo para niños', 'Era para viajes'],
        correct: 1,
        explanation: 'Permitía financiar la distribución de literatura que contenía el mensaje de los tres ángeles.'
    },
    {
        id: 44,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué conexión había entre la pérdida de la escuela de Battle Creek y el establecimiento de Loma Linda?',
        options: ['Fue casualidad', 'Dios redirigió la obra médica a la costa oeste', 'Fue un fracaso', 'No hay relación'],
        correct: 1,
        explanation: 'Dios redirigió la obra médica de Battle Creek a Loma Linda para preservarla.'
    },
    {
        id: 45,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué patrón se observa en la expansión misionera de este período?',
        options: ['Solo en Europa', 'Expansión global a todos los continentes', 'Solo en América', 'Solo en islas'],
        correct: 1,
        explanation: 'Se observa una expansión global: Filipinas (Asia), Grecia (Europa), Islas Salomón (Pacífico), Incas (Sudamérica).'
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '8');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '8');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '8');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '8';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Continúa la Expansión de las Misiones - Nivel ${level}`;
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
        '1904', '1905', '1906', '1907', '1908', '1909', '1910', '1911', '1912', '1913', '1914', '1915',
        '1916', '1917', '1918', '1922', '1970',
        'filipinas', 'grecia', 'salomón', 'incas', 'battle creek', 'loma linda', 'los ángeles',
        'caldwell', 'mcelhany', 'howell', 'parker', 'jones', 'stahl', 'wayne', 'kellogg',
        'daniells', 'spicer', 'white',
        '87', '70', '100000', '4000', '8000', '65'
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
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien la expansión misionera.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 8 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '8');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '8');
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
    console.log('Capítulo 8 - Iniciando...');
    
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '8';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Continúa la Expansión de las Misiones - Nivel ${currentLevel}`;
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