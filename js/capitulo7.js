// ============================================
// PREGUNTAS DEL CAPÍTULO 7 CON NIVELES DE DIFICULTAD
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
        question: '¿En qué año se organizó la primera sociedad de jóvenes en Hazelton, Michigan?',
        options: ['1878', '1879', '1880', '1881'],
        correct: 1,
        explanation: 'La primera sociedad de jóvenes fue organizada en 1879.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Quiénes organizaron la primera sociedad de jóvenes?',
        options: ['J.N. Andrews y J.N. Loughborough', 'Harry Fenner y Luther Warren', 'Jaime White y José Bates', 'S.N. Haskell y G.I. Butler'],
        correct: 1,
        explanation: 'Harry Fenner y Luther Warren organizaron la primera sociedad de jóvenes.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó oficialmente el Departamento de Jóvenes?',
        options: ['1905', '1906', '1907', '1908'],
        correct: 2,
        explanation: 'En 1907 se organizó oficialmente el Departamento de Jóvenes.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién comenzó la obra de colportaje vendiendo el libro "Daniel y Apocalipsis"?',
        options: ['J.N. Andrews', 'George King', 'Urías Smith', 'S.N. Haskell'],
        correct: 1,
        explanation: 'George King comenzó la obra de colportaje en 1881.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó la obra del colportaje?',
        options: ['1879', '1880', '1881', '1882'],
        correct: 2,
        explanation: 'Comenzó en 1881.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año el sistema de diezmos reemplazó la benevolencia sistemática?',
        options: ['1877', '1878', '1879', '1880'],
        correct: 1,
        explanation: 'En 1878.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué impidió a Stephen Haskell continuar su sermón en un campestre?',
        options: ['Una enfermedad', 'Una tormenta', 'Una multitud', 'Un accidente'],
        correct: 1,
        explanation: 'Una tormenta impidió a Haskell continuar su sermón.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién estuvo presente y animó el plan de estudio bíblico interactivo?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'Urías Smith'],
        correct: 2,
        explanation: 'Elena White estuvo presente y animó el plan.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién visitó Europa y organizó una asociación en 1884?',
        options: ['Jaime White', 'J.N. Andrews', 'George I. Butler', 'S.N. Haskell'],
        correct: 2,
        explanation: 'George I. Butler, presidente de la Asociación General.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue a Europa en 1885 para asesorar a los dirigentes?',
        options: ['Jaime White', 'J.N. Andrews', 'Elena White', 'Urías Smith'],
        correct: 2,
        explanation: 'Elena White fue a Europa en 1885.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año llegó el mensaje a Australia?',
        options: ['1884', '1885', '1886', '1887'],
        correct: 1,
        explanation: 'En 1885 con Haskell, Israel y Corliss.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer misionero a Fidji?',
        options: ['John I. Tay', 'J.E. Fulton', 'S.N. Haskell', 'A.G. Daniells'],
        correct: 1,
        explanation: 'J.E. Fulton fue el primer misionero a Fidji.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo son conocidos los adventistas de Fidji?',
        options: ['El pueblo fiel', 'La gente limpia', 'Los misioneros', 'Los creyentes'],
        correct: 1,
        explanation: '"La gente limpia".'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué ciudad fue el Congreso de la Asociación General de 1888?',
        options: ['Battle Creek', 'Chicago', 'Minneápolis', 'Nueva York'],
        correct: 2,
        explanation: 'En Minneápolis.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué crisis enfrentaba la iglesia en 1888?',
        options: ['Económica', 'De liderazgo', 'Sobre la justificación por la fe', 'Sobre el sábado'],
        correct: 2,
        explanation: 'Habían perdido de vista la justificación por la fe.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año Pieter Wessels se entrevistó con Cecil Rhodes?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: 'En 1894.'
    },
    {
        id: 27,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué pidieron los hermanos a Cecil Rhodes?',
        options: ['Dinero', 'Un terreno para una misión', 'Biblias', 'Protección'],
        correct: 1,
        explanation: 'Un terreno para una misión en Rodesia.'
    },
    {
        id: 28,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue a Hong Kong como colportor en 1888?',
        options: ['Edwin H. Wilbur', 'J.N. Anderson', 'Abram La Rue', 'John I. Tay'],
        correct: 2,
        explanation: 'Abram La Rue.'
    },
    {
        id: 30,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció el primer colegio fuera de EE.UU. en África del Sur?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 1,
        explanation: 'En 1893.'
    },
    {
        id: 31,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció Signs en Australia?',
        options: ['1885', '1886', '1887', '1888'],
        correct: 1,
        explanation: '1886.'
    },
    {
        id: 32,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció Stanborough en Inglaterra?',
        options: ['1887', '1888', '1889', '1890'],
        correct: 2,
        explanation: '1889.'
    },
    {
        id: 33,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se estableció el Colegio de Avondale en Australia?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: '1894.'
    },
    {
        id: 34,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año Elena White se embarcó para Australia?',
        options: ['1890', '1891', '1892', '1893'],
        correct: 1,
        explanation: '1891.'
    },
    {
        id: 35,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos años permaneció Elena White en Australia?',
        options: ['7', '8', '9', '10'],
        correct: 2,
        explanation: 'Nueve años.'
    },
    {
        id: 38,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde se organizó la primera unión adventista del mundo?',
        options: ['EE.UU.', 'Inglaterra', 'Australia', 'Alemania'],
        correct: 2,
        explanation: 'En Australia en 1894.'
    },
    {
        id: 39,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se organizó la primera unión?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 2,
        explanation: '1894.'
    },
    {
        id: 40,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año fue el Congreso que reorganizó la Asociación General?',
        options: ['1900', '1901', '1902', '1903'],
        correct: 1,
        explanation: '1901.'
    },
    {
        id: 43,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió Jaime White?',
        options: ['1880', '1881', '1882', '1883'],
        correct: 1,
        explanation: '1881.'
    },
    {
        id: 44,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió J.N. Andrews?',
        options: ['1881', '1882', '1883', '1884'],
        correct: 2,
        explanation: '1883.'
    },
    {
        id: 45,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió J.H. Waggoner?',
        options: ['1887', '1888', '1889', '1890'],
        correct: 2,
        explanation: '1889.'
    },
    {
        id: 46,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde fueron enterrados Andrews y Waggoner?',
        options: ['Battle Creek', 'Basilea, Suiza', 'Londres', 'Nueva York'],
        correct: 1,
        explanation: 'Basilea, Suiza.'
    },
    {
        id: 47,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió Urías Smith?',
        options: ['1901', '1902', '1903', '1904'],
        correct: 2,
        explanation: '1903.'
    },
    {
        id: 49,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién abandonó la iglesia y se opuso a Elena White?',
        options: ['J.H. Kellogg', 'D.M. Canright', 'Urías Smith', 'J.N. Andrews'],
        correct: 1,
        explanation: 'D.M. Canright.'
    },
    {
        id: 51,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién era el director del Sanatorio de Battle Creek?',
        options: ['D.M. Canright', 'J.H. Kellogg', 'J.N. Loughborough', 'J.H. Waggoner'],
        correct: 1,
        explanation: 'El Dr. J.H. Kellogg.'
    },
    {
        id: 56,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año se mudó la sede a Takoma Park?',
        options: ['1902', '1903', '1904', '1905'],
        correct: 1,
        explanation: '1903.'
    },
    {
        id: 57,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde está Takoma Park?',
        options: ['Maryland', 'Virginia', 'Washington D.C.', 'Nueva York'],
        correct: 2,
        explanation: 'Washington, D.C.'
    },

    // ============================================
    // NIVEL MEDIO - Preguntas de detalles específicos (15 preguntas)
    // ============================================
    {
        id: 3,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué edades tenían los organizadores de la primera sociedad de jóvenes?',
        options: ['15 y 13', '16 y 14', '17 y 14', '18 y 15'],
        correct: 2,
        explanation: 'Harry Fenner tenía 17 años y Luther Warren 14 años.'
    },
    {
        id: 7,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántos colportores había en 1978?',
        options: ['4,459', '5,459', '6,459', '7,459'],
        correct: 2,
        explanation: 'Había 6,459 colportores.'
    },
    {
        id: 8,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuál fue el total de ventas en 1978?',
        options: ['9 millones', '10 millones', '11 millones', '12 millones'],
        correct: 2,
        explanation: 'Casi 11 millones de dólares.'
    },
    {
        id: 10,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántas iglesias había en 1883?',
        options: ['580', '680', '780', '880'],
        correct: 1,
        explanation: '680 iglesias.'
    },
    {
        id: 11,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántos miembros había en 1883?',
        options: ['15,436', '16,436', '17,436', '18,436'],
        correct: 2,
        explanation: '17,436 miembros.'
    },
    {
        id: 12,
        level: 'medio',
        type: 'multiple',
        question: '¿A cuánto ascendieron los diezmos en 1883?',
        options: ['$86,500', '$96,500', '$106,500', '$116,500'],
        correct: 1,
        explanation: '$96,500 dólares.'
    },
    {
        id: 14,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué método de evangelismo nació de la experiencia de Haskell?',
        options: ['Sermones cortos', 'Estudio bíblico interactivo', 'Cantar himnos', 'Orar en grupos'],
        correct: 1,
        explanation: 'Citar textos y hacer preguntas.'
    },
    {
        id: 19,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué se abrió en Melbourne a pesar de la oposición?',
        options: ['Una iglesia y una escuela', 'Una iglesia y una imprenta', 'Una imprenta y un colegio', 'Un sanatorio'],
        correct: 1,
        explanation: 'Una iglesia y una imprenta.'
    },
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿Quiénes fueron los primeros misioneros permanentes en China?',
        options: ['La Rue y Tay', 'Wilbur y Anderson', 'Haskell y Daniells', 'Corliss e Israel'],
        correct: 1,
        explanation: 'Edwin H. Wilbur y J.N. Anderson.'
    },
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué colegio fundó Elena White en Australia?',
        options: ['Sydney', 'Melbourne', 'Avondale', 'Brisbane'],
        correct: 2,
        explanation: 'El Colegio de Avondale.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué tipo de fábricas estimuló Elena White en Australia?',
        options: ['Textiles', 'De alimentos', 'De muebles', 'De imprenta'],
        correct: 1,
        explanation: 'Fábricas de alimentos.'
    },
    {
        id: 41,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué acuerdo se tomó sobre la junta de la Asociación General en 1901?',
        options: ['Reducirla', 'Agrandarla', 'Eliminarla', 'Centralizarla'],
        correct: 1,
        explanation: 'Agrandarla haciéndola más representativa.'
    },
    {
        id: 42,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué debían compartir las asociaciones con el extranjero?',
        options: ['Misioneros', 'Diezmos y ofrendas', 'Literatura', 'Edificios'],
        correct: 1,
        explanation: 'Diezmos y ofrendas.'
    },
    {
        id: 48,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué libro escribió Urías Smith?',
        options: ['Historia del Sábado', 'Daniel y Apocalipsis', 'El Conflicto de los Siglos', 'Patriarcas y Profetas'],
        correct: 1,
        explanation: 'Daniel y Apocalipsis.'
    },
    {
        id: 53,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año fue advertido Battle Creek de que las instituciones serían destruidas?',
        options: ['1892', '1893', '1894', '1895'],
        correct: 1,
        explanation: '1893.'
    },

    // ============================================
    // NIVEL DIFÍCIL - Preguntas de análisis y conexiones (7 preguntas)
    // ============================================
    {
        id: 24,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué década se destacó por reavivamientos sobre la justificación por la fe?',
        options: ['1878-1888', '1888-1898', '1898-1908', '1880-1890'],
        correct: 1,
        explanation: '1888 a 1898 fue una década de reavivamiento sobre la justificación por la fe.'
    },
    {
        id: 25,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué libros de Elena White corrigieron enseñanzas erróneas sobre Cristo?',
        options: ['Patriarcas y Profetas', 'El Deseado de Todas las Gentes y El Camino a Cristo', 'El Conflicto de los Siglos', 'Testimonios'],
        correct: 1,
        explanation: 'El Deseado de Todas las Gentes y El Camino a Cristo corrigieron enseñanzas erróneas.'
    },
    {
        id: 50,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cómo murió D.M. Canright?',
        options: ['En paz', 'En la desesperación', 'Como mártir', 'En el extranjero'],
        correct: 1,
        explanation: 'Murió en la desesperación, como testimonio de su apostasía.'
    },
    {
        id: 52,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué ideas mezcló Kellogg con la religión?',
        options: ['Ateas', 'Panteístas', 'Agnósticas', 'Budistas'],
        correct: 1,
        explanation: 'Ideas panteístas, mezclando a Dios con la naturaleza.'
    },
    {
        id: 54,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuándo se quemó el edificio principal del sanatorio?',
        options: ['Febrero 1902', 'Diciembre 1902', 'Febrero 1903', 'Diciembre 1903'],
        correct: 0,
        explanation: 'Febrero de 1902.'
    },
    {
        id: 55,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuándo se quemó el edificio de la Review and Herald?',
        options: ['Febrero 1902', 'Diciembre 1902', 'Febrero 1903', 'Diciembre 1903'],
        correct: 1,
        explanation: 'Diciembre de 1902, cumpliendo las advertencias de 1893.'
    },
    {
        id: 58,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué relación tenían las advertencias de 1893 con los incendios de 1902?',
        options: ['No tenían relación', 'Fueron advertencias proféticas que se cumplieron', 'Fueron casualidades', 'Fueron accidentes'],
        correct: 1,
        explanation: 'Las advertencias de 1893 fueron proféticas y se cumplieron con los incendios de 1902.'
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '7');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '7');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '7');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '7';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Progresos y Pérdidas - Nivel ${level}`;
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
        '1878', '1879', '1880', '1881', '1882', '1883', '1884', '1885', '1886', '1887', '1888', '1889', '1890',
        '1891', '1892', '1893', '1894', '1895', '1898', '1901', '1902', '1903', '1907',
        'hazelton', 'michigan', 'minneápolis', 'australia', 'fidji', 'china', 'áfrica', 'basilea', 'takoma park',
        'fenner', 'warren', 'king', 'haskell', 'butler', 'fulton', 'la rue', 'wilbur', 'anderson', 'wessels',
        'rhodes', 'canright', 'kellogg', 'andrews', 'waggoner', 'smith',
        '17', '14', '680', '17436', '96500', '6459', '11', '9'
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
    
    if (percentage >= 90) message = '¡Excelente! Conoces bien los progresos y pérdidas de la iglesia.';
    else if (percentage >= 70) message = '¡Muy bien! Tienes un buen conocimiento.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 7 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '7');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '7');
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
    console.log('Capítulo 7 - Iniciando...');
    
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '7';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Progresos y Pérdidas - Nivel ${currentLevel}`;
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