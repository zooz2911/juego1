// Configuración de los capítulos - CON TÍTULOS CORREGIDOS
const chapters = [
    { number: 1, title: 'La Iglesia Cristiana a Través de las Edades', completed: false },
    { number: 2, title: 'Heraldos del Mensaje del Advenimiento', completed: false },
    { number: 3, title: 'Surge la Iglesia Remanente', completed: false },
    { number: 4, title: 'Se Organiza la Iglesia Remanente', completed: false },
    { number: 5, title: 'Expansión y Reforma', completed: false },
    { number: 6, title: 'Visión Mundial', completed: false },
    { number: 7, title: 'Progreso y Pérdidas de Importancia', completed: false },
    { number: 8, title: 'Continúa la Expansión de las Misiones', completed: false },
    { number: 9, title: 'Progreso a Pesar de los Reveses', completed: false },
    { number: 10, title: 'Confirmación y Expansión', completed: false },
    { number: 11, title: 'La Terminación de la Comisión Evangélica', completed: false },
    { number: 12, title: 'Los Departamentos de la Iglesia', completed: false },
    { number: 13, title: 'Divisiones Mundiales de la Iglesia', completed: false }
];

// Cargar progreso guardado
function loadProgress() {
    const savedProgress = localStorage.getItem('historiaDenominacional_progress');
    if (savedProgress) {
        const completed = JSON.parse(savedProgress);
        chapters.forEach(chapter => {
            if (completed.includes(chapter.number)) {
                chapter.completed = true;
            }
        });
    }
    updateStats();
}

// Guardar progreso
function saveProgress() {
    const completed = chapters.filter(ch => ch.completed).map(ch => ch.number);
    localStorage.setItem('historiaDenominacional_progress', JSON.stringify(completed));
}

// Actualizar estadísticas
function updateStats() {
    const completedCount = chapters.filter(ch => ch.completed).length;
    document.getElementById('completedChapters').textContent = completedCount;
}

// Función para iniciar el juego desde el intro
function startGame() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    loadChapters();
}

// Cargar los capítulos en el grid
function loadChapters() {
    const grid = document.getElementById('chaptersGrid');
    grid.innerHTML = '';
    
    chapters.forEach(chapter => {
        const button = document.createElement('button');
        button.className = `chapter-btn ${chapter.completed ? 'completed' : ''}`;
        button.onclick = () => selectChapter(chapter.number);
        
        button.innerHTML = `
            <span class="chapter-number">${chapter.number}</span>
            <span class="chapter-title">Capítulo ${chapter.number}<br>${chapter.title}</span>
            ${chapter.completed ? '<span class="chapter-status">✓ Completado</span>' : ''}
        `;
        
        grid.appendChild(button);
    });
}

// Seleccionar un capítulo
function selectChapter(chapterNumber) {
    // Guardar el capítulo seleccionado en localStorage
    localStorage.setItem('historiaDenominacional_currentChapter', chapterNumber);
    
    // Redirigir al capítulo correspondiente (nombres de archivos simplificados)
    window.location.href = `libros/capitulo${chapterNumber}.html`;
}

// Marcar capítulo como completado (esta función será llamada desde los capítulos)
function completeChapter(chapterNumber) {
    const chapter = chapters.find(ch => ch.number === chapterNumber);
    if (chapter) {
        chapter.completed = true;
        saveProgress();
        
        // Actualizar la vista si estamos en el menú
        if (!document.getElementById('intro').classList.contains('hidden')) {
            loadChapters();
        }
    }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    
    // Verificar si hay un parámetro de capítulo completado
    const urlParams = new URLSearchParams(window.location.search);
    const completed = urlParams.get('completed');
    if (completed) {
        completeChapter(parseInt(completed));
        
        // Limpiar el parámetro de la URL sin recargar
        const url = new URL(window.location);
        url.searchParams.delete('completed');
        window.history.replaceState({}, '', url);
    }
});