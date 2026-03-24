// ============================================
// PREGUNTAS DEL CAPÍTULO 2 - HERALDOS DEL MENSAJE DEL ADVENIMIENTO
// CON NIVELES DE DIFICULTAD
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - 26 preguntas
    // ============================================
    // SEÑALES BÁSICAS - FÁCIL
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año ocurrió el gran terremoto conocido como el terremoto de Lisboa?',
        options: ['1755', '1780', '1833', '1798'],
        correct: 0,
        explanation: 'El terremoto de Lisboa ocurrió en 1755 y se extendió por más de cuatro millones de millas cuadradas.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué fecha ocurrió el Día Oscuro, cuando el sol se oscureció?',
        options: ['1 de noviembre de 1755', '19 de mayo de 1780', '13 de noviembre de 1833', '22 de octubre de 1844'],
        correct: 1,
        explanation: 'El Día Oscuro tuvo lugar el 19 de mayo de 1780, cumpliendo la profecía de Jesús en Marcos 13:24.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué fenómeno natural ocurrió el 13 de noviembre de 1833?',
        options: ['Un terremoto', 'Un eclipse solar', 'Una caída de estrellas', 'Una inundación'],
        correct: 2,
        explanation: 'El 13 de noviembre de 1833 ocurrió una gran caída de estrellas, cumpliendo Apocalipsis 6:13.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año terminó el período profético de 1260 años?',
        options: ['1755', '1780', '1798', '1833'],
        correct: 2,
        explanation: 'El período de 1260 años terminó en 1798.'
    },
    
    // ÁNGELES DE APOCALIPSIS - FÁCIL
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué mensaje proclama el primer ángel de Apocalipsis 14?',
        options: ['Babilonia ha caído', 'No recibáis la marca de la bestia', 'Temed a Dios y dadle gloria', 'Cristo viene pronto'],
        correct: 2,
        explanation: 'El primer ángel proclama: "Temed a Dios y dadle gloria, porque la hora de su juicio ha llegado".'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué mensaje proclama el segundo ángel de Apocalipsis 14?',
        options: ['Ha llegado la hora del juicio', 'Babilonia ha caído', 'No recibáis la marca de la bestia', 'Adorad al Creador'],
        correct: 1,
        explanation: 'El segundo ángel declara: "Ha caído, ha caído Babilonia".'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿Contra qué advierte el tercer ángel de Apocalipsis 14?',
        options: ['Contra la adoración de imágenes', 'Contra recibir la marca de la bestia', 'Contra el falso profeta', 'Contra el anticristo'],
        correct: 1,
        explanation: 'El tercer ángel advierte contra recibir la marca de la bestia.'
    },
    
    // GUILLERMO MILLER - FÁCIL
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año nació Guillermo Miller?',
        options: ['1782', '1780', '1798', '1776'],
        correct: 0,
        explanation: 'Guillermo Miller nació en 1782 y murió en 1849.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año murió Guillermo Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 2,
        explanation: 'Miller murió en 1849.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué mes y año Miller comenzó a predicar públicamente?',
        options: ['Agosto de 1831', 'Enero de 1843', 'Marzo de 1843', 'Octubre de 1844'],
        correct: 0,
        explanation: 'En agosto de 1831, Miller predicó por primera vez en una iglesia bautista.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué profecía estudió Miller para llegar a su conclusión sobre la venida de Cristo?',
        options: ['Las 70 semanas', 'Los 1260 días', 'Los 2300 días', 'Las 7 trompetas'],
        correct: 2,
        explanation: 'Miller estudió la profecía de los 2300 días de Daniel 8 y 9.'
    },
    
    // JOSUÉ V. HIMES - FÁCIL
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué importante revista fundó Himes en Boston en 1840?',
        options: ['The Midnight Cry', 'The Advent Herald', 'Signs of the Times', 'The Review and Herald'],
        correct: 2,
        explanation: 'Himes fundó la revista "Signs of the Times" (Señales de los Tiempos).'
    },
    
    // CHARLES FITCH - FÁCIL
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿De qué iglesia era pastor Charles Fitch en Boston?',
        options: ['Metodista', 'Bautista', 'Congregacionalista', 'Presbiteriana'],
        correct: 2,
        explanation: 'Charles Fitch era pastor de la Iglesia Congregacionalista de Boston.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué famoso diagrama diseñó Charles Fitch en 1842?',
        options: ['El diagrama de las bestias', 'El diagrama profético de 1843', 'El diagrama del santuario', 'El diagrama de los 2300 días'],
        correct: 1,
        explanation: 'Fitch diseñó el famoso diagrama profético de 1843.'
    },
    
    // JOSÉ WOLFF - FÁCIL
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos idiomas hablaba José Wolff?',
        options: ['7', '10', '12', '14'],
        correct: 3,
        explanation: 'Wolff hablaba 14 idiomas.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se llegó a conocer a José Wolff?',
        options: ['El predicador de Europa', 'El misionero a todo el mundo', 'El apóstol de los gentiles', 'El heraldo del rey'],
        correct: 1,
        explanation: 'Se le conocía como "el misionero a todo el mundo".'
    },
    
    // OTROS PAÍSES - FÁCIL
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿De qué país era Johann A. Bengel?',
        options: ['Inglaterra', 'Alemania', 'Suiza', 'Francia'],
        correct: 1,
        explanation: 'Bengel era ministro luterano alemán.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿De qué país era Eduardo Irving?',
        options: ['Inglaterra', 'Escocia', 'Irlanda', 'Gales'],
        correct: 1,
        explanation: 'Eduardo Irving era un destacado predicador escocés.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué profesión tenía Enrique Drummond además de ser predicador?',
        options: ['Médico', 'Abogado', 'Banquero', 'Profesor'],
        correct: 2,
        explanation: 'Enrique Drummond era banquero y miembro del Parlamento inglés.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué país Dios usó especialmente a niños para predicar el advenimiento?',
        options: ['Noruega', 'Suecia', 'Dinamarca', 'Finlandia'],
        correct: 1,
        explanation: 'En Suecia, Dios usó niños para predicar.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'multiple',
        question: '¿De qué país era originario Manuel de Lacunza?',
        options: ['España', 'Chile', 'Italia', 'Argentina'],
        correct: 1,
        explanation: 'Manuel de Lacunza nació en Chile.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué países predicó Luis Gaussen?',
        options: ['Francia y Suiza', 'Alemania y Austria', 'Italia y España', 'Inglaterra y Escocia'],
        correct: 0,
        explanation: 'Luis Gaussen predicó en Francia y Suiza, específicamente en Ginebra.'
    },
    
    // COMPLETACIÓN FÁCIL (selección simple)
    {
        id: 23,
        level: 'facil',
        type: 'fill',
        question: 'La primera de las tres señales espectaculares fue el terremoto de __________ en el año 1755.',
        correct: ['lisboa'],
        explanation: 'El terremoto de Lisboa fue la primera señal.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'fill',
        question: 'El Día Oscuro ocurrió el __________ de mayo de 1780.',
        correct: ['19'],
        explanation: 'El Día Oscuro fue el 19 de mayo de 1780.'
    },
    {
        id: 25,
        level: 'facil',
        type: 'fill',
        question: 'La caída de las estrellas ocurrió el 13 de noviembre del año __________.',
        correct: ['1833'],
        explanation: 'La caída de las estrellas fue en 1833.'
    },
    {
        id: 26,
        level: 'facil',
        type: 'fill',
        question: 'El período de 1260 años de persecución terminó en el año __________.',
        correct: ['1798'],
        explanation: 'El período terminó en 1798.'
    },

    // ============================================
    // NIVEL MEDIO - 26 preguntas
    // ============================================
    {
        id: 27,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué profecía del Apocalipsis cumplió el terremoto de 1755?',
        options: ['El quinto sello', 'El sexto sello', 'El séptimo sello', 'La primera trompeta'],
        correct: 1,
        explanation: 'El terremoto de 1755 cumplió la profecía de la apertura del sexto sello registrada en Apocalipsis 6:12, 13.'
    },
    {
        id: 28,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué amigo de Miller le abrió las puertas para predicar en las ciudades?',
        options: ['Josías Litch', 'Charles Fitch', 'Josué V. Himes', 'S.S. Snow'],
        correct: 2,
        explanation: 'Josué V. Himes, de Boston, invitó a Miller a predicar en las ciudades.'
    },
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año Miller comenzó a predicar en Nueva York?',
        options: ['1831', '1833', '1840', '1843'],
        correct: 2,
        explanation: 'Miller comenzó a predicar en Nueva York en 1840.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'multiple',
        question: '¿Aproximadamente cuántas personas aceptaron las enseñanzas de Miller?',
        options: ['10,000', '25,000', '50,000', '100,000'],
        correct: 2,
        explanation: 'Se estima que unas 50,000 personas aceptaron sus enseñanzas.'
    },
    {
        id: 31,
        level: 'medio',
        type: 'multiple',
        question: '¿Entre qué fechas predijo Miller que Cristo vendría?',
        options: ['1843-1844', '1844-1845', '1840-1841', '1845-1846'],
        correct: 0,
        explanation: 'Miller predijo que Cristo vendría entre marzo de 1843 y marzo de 1844.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año terminó el ministerio público de Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 1,
        explanation: 'Su ministerio público terminó en 1845.'
    },
    {
        id: 33,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántos sermones predicó Miller en aproximadamente 10 años?',
        options: ['1,000', '2,000', '3,000', '4,000'],
        correct: 2,
        explanation: 'Miller predicó más de 3,000 sermones en cerca de mil lugares diferentes.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué verdad no alcanzó a ver Miller?',
        options: ['El santuario', 'El juicio investigador', 'El sábado', 'El estado de los muertos'],
        correct: 2,
        explanation: 'Miller no alcanzó a ver la verdad del sábado.'
    },
    {
        id: 35,
        level: 'medio',
        type: 'multiple',
        question: '¿A qué edad se convirtió Josías Litch al cristianismo?',
        options: ['15 años', '17 años', '20 años', '22 años'],
        correct: 1,
        explanation: 'Josías Litch se convirtió a los 17 años.'
    },
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuál era el tema central de la predicación de Charles Fitch?',
        options: ['Arrepentíos', 'Prepárate para encontrarte con tu Dios', 'Velad', 'El reino de los cielos'],
        correct: 1,
        explanation: 'Su tema central era "Prepárate para encontrarte con tu Dios".'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué fecha murió Charles Fitch?',
        options: ['13 de noviembre de 1833', '22 de octubre de 1844', '14 de octubre de 1844', '19 de mayo de 1844'],
        correct: 2,
        explanation: 'Charles Fitch murió el 14 de octubre de 1844, pocos días antes del 22 de octubre.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién escribió las memorias de Guillermo Miller?',
        options: ['George Storrs', 'Sylvester Bliss', 'S.S. Snow', 'Josué Himes'],
        correct: 1,
        explanation: 'Sylvester Bliss escribió las memorias de Miller.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué líder milerista declaró que los 2300 años terminarían en el otoño de 1844?',
        options: ['George Storrs', 'Sylvester Bliss', 'S.S. Snow', 'Josué Himes'],
        correct: 2,
        explanation: 'S.S. Snow declaró desde el principio que los 2300 años terminarían en el otoño de 1844.'
    },
    {
        id: 40,
        level: 'medio',
        type: 'multiple',
        question: '¿Entre qué años viajó José Wolff por el mundo predicando el advenimiento?',
        options: ['1816-1831', '1821-1845', '1831-1844', '1840-1849'],
        correct: 1,
        explanation: 'Wolff viajó de 1821 a 1845.'
    },
    {
        id: 41,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año regresó Roberto Winter a Inglaterra después de visitar Estados Unidos?',
        options: ['1831', '1840', '1842', '1844'],
        correct: 2,
        explanation: 'Winter regresó a Inglaterra en 1842.'
    },
    {
        id: 42,
        level: 'medio',
        type: 'multiple',
        question: '¿Por qué es conocido Horacio Bonar?',
        options: ['Predicador', 'Autor de himnos', 'Misionero', 'Editor'],
        correct: 1,
        explanation: 'Horacio Bonar es conocido como autor de himnos.'
    },
    {
        id: 43,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué obra dirigía George Muller?',
        options: ['Una iglesia', 'Un seminario', 'Un orfanato', 'Una editorial'],
        correct: 2,
        explanation: 'George Muller dirigía el orfanato de Bristol.'
    },
    {
        id: 44,
        level: 'medio',
        type: 'multiple',
        question: '¿Bajo qué seudónimo publicó Lacunza su libro "La Venida del Mesías en Gloria y Majestad"?',
        options: ['Rabí Juan Ben-Ezra', 'Juan el Revelador', 'El Testigo Fiel', 'El Peregrino'],
        correct: 0,
        explanation: 'Publicó su libro bajo el seudónimo de Rabí Juan Ben-Ezra.'
    },
    {
        id: 45,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué país predicó H. Heintzpeter?',
        options: ['Alemania', 'Holanda', 'Bélgica', 'Suiza'],
        correct: 1,
        explanation: 'Heintzpeter predicó en Holanda y era director del museo real.'
    },
    {
        id: 46,
        level: 'medio',
        type: 'multiple',
        question: '¿A quiénes enseñaba Luis Gaussen para esparcir el mensaje?',
        options: ['A los adultos', 'A los niños', 'A los pastores', 'A los estudiantes'],
        correct: 1,
        explanation: 'Gaussen enseñaba a los niños para atraer también a los adultos.'
    },
    
    // COMPLETACIÓN MEDIO
    {
        id: 47,
        level: 'medio',
        type: 'fill',
        question: 'El terremoto de Lisboa cumplió la profecía del __________ sello de Apocalipsis.',
        correct: ['sexto'],
        explanation: 'Cumplió el sexto sello (Apocalipsis 6:12, 13).'
    },
    {
        id: 48,
        level: 'medio',
        type: 'fill',
        question: 'El Día Oscuro cumplió la profecía de Jesús en Marcos __________:24.',
        correct: ['13'],
        explanation: 'Marcos 13:24: "El sol se oscurecerá".'
    },
    {
        id: 49,
        level: 'medio',
        type: 'fill',
        question: 'Guillermo Miller nació en el año __________ y murió en el año __________.',
        correct: ['1782', '1849'],
        explanation: 'Miller vivió de 1782 a 1849.'
    },
    {
        id: 50,
        level: 'medio',
        type: 'fill',
        question: 'Miller estudió las profecías durante __________ años, de 1816 a 1831.',
        correct: ['15'],
        explanation: 'Estudió 15 años.'
    },
    {
        id: 51,
        level: 'medio',
        type: 'fill',
        question: 'Josué V. __________ invitó a Miller a predicar en Boston.',
        correct: ['himes'],
        explanation: 'Josué V. Himes.'
    },
    {
        id: 52,
        level: 'medio',
        type: 'fill',
        question: 'Miller estudió la profecía de los __________ días de Daniel 8 y 9.',
        correct: ['2300'],
        explanation: 'Los 2300 días.'
    },

    // ============================================
    // NIVEL DIFÍCIL - 26 preguntas
    // ============================================
    {
        id: 53,
        level: 'dificil',
        type: 'fill',
        question: 'La caída de las estrellas cumplió Apocalipsis 6:13: "Como la __________ deja caer sus higos".',
        correct: ['higuera'],
        explanation: 'La higuera deja caer sus higos.'
    },
    {
        id: 54,
        level: 'dificil',
        type: 'fill',
        question: 'El mensaje del primer ángel anuncia que la hora del __________ ha llegado.',
        correct: ['juicio'],
        explanation: 'La hora del juicio.'
    },
    {
        id: 55,
        level: 'dificil',
        type: 'fill',
        question: 'El mensaje del segundo ángel declara que la Babilonia __________ ha caído.',
        correct: ['espiritual'],
        explanation: 'Babilonia espiritual.'
    },
    {
        id: 56,
        level: 'dificil',
        type: 'fill',
        question: 'El tercer ángel advierte contra recibir la __________ de la bestia.',
        correct: ['marca'],
        explanation: 'La marca de la bestia.'
    },
    {
        id: 57,
        level: 'dificil',
        type: 'fill',
        question: 'Josías Litch se unió a la Iglesia __________ antes de unirse al movimiento adventista.',
        correct: ['metodista'],
        explanation: 'Se unió a la Iglesia Metodista.'
    },
    {
        id: 58,
        level: 'dificil',
        type: 'fill',
        question: 'Charles Fitch diseñó el diagrama profético de __________.',
        correct: ['1843'],
        explanation: 'El diagrama de 1843.'
    },
    {
        id: 59,
        level: 'dificil',
        type: 'fill',
        question: 'Charles Fitch murió el __________ de octubre de 1844.',
        correct: ['14'],
        explanation: 'Murió el 14 de octubre de 1844.'
    },
    {
        id: 60,
        level: 'dificil',
        type: 'fill',
        question: 'S.S. __________ predijo que los 2300 años terminarían en el otoño de 1844.',
        correct: ['snow'],
        explanation: 'S.S. Snow.'
    },
    {
        id: 61,
        level: 'dificil',
        type: 'fill',
        question: 'Sylvester Bliss es recordado por sus __________ de Guillermo Miller.',
        correct: ['memorias'],
        explanation: 'Escribió las memorias de Miller.'
    },
    {
        id: 62,
        level: 'dificil',
        type: 'fill',
        question: 'José Wolff hablaba __________ idiomas.',
        correct: ['14'],
        explanation: 'Hablaba 14 idiomas.'
    },
    {
        id: 63,
        level: 'dificil',
        type: 'fill',
        question: 'Wolff fue conocido como "el misionero a todo el __________".',
        correct: ['mundo'],
        explanation: 'El misionero a todo el mundo.'
    },
    {
        id: 64,
        level: 'dificil',
        type: 'fill',
        question: 'José Wolff viajó extensamente entre los años 1821 y __________.',
        correct: ['1845'],
        explanation: 'Viajó hasta 1845.'
    },
    {
        id: 65,
        level: 'dificil',
        type: 'fill',
        question: 'Eduardo Irving fue un destacado predicador adventista en las Islas __________.',
        correct: ['británicas'],
        explanation: 'Predicó en las Islas Británicas.'
    },
    {
        id: 66,
        level: 'dificil',
        type: 'fill',
        question: 'Enrique Drummond organizaba conferencias __________ anuales.',
        correct: ['proféticas'],
        explanation: 'Conferencias proféticas anuales.'
    },
    {
        id: 67,
        level: 'dificil',
        type: 'fill',
        question: 'Roberto Winter regresó a Inglaterra en el año __________.',
        correct: ['1842'],
        explanation: 'Regresó en 1842.'
    },
    {
        id: 68,
        level: 'dificil',
        type: 'fill',
        question: 'En Suecia, __________ y jóvenes predicaron el mensaje del advenimiento.',
        correct: ['niños'],
        explanation: 'Los niños predicaron.'
    },
    {
        id: 69,
        level: 'dificil',
        type: 'fill',
        question: 'Dos jóvenes predicadores suecos fueron Ole Boquist y Erik __________.',
        correct: ['walbon'],
        explanation: 'Erik Walbon.'
    },
    {
        id: 70,
        level: 'dificil',
        type: 'fill',
        question: 'Manuel de Lacunza publicó el libro "La Venida del Mesías en Gloria y Majestad" bajo el seudónimo de Rabí Juan __________.',
        correct: ['ben-ezra'],
        explanation: 'Rabí Juan Ben-Ezra.'
    },
    {
        id: 71,
        level: 'dificil',
        type: 'fill',
        question: 'Luis Gaussen predicó en Francia y __________.',
        correct: ['suiza'],
        explanation: 'Predicó en Suiza, en Ginebra.'
    },
    
    // Preguntas difíciles múltiples (números exactos)
    {
        id: 72,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año nació Josué V. Himes?',
        options: ['1805', '1782', '1810', '1798'],
        correct: 0,
        explanation: 'Josué V. Himes nació en 1805 y murió en 1895.'
    },
    {
        id: 73,
        level: 'dificil',
        type: 'fill',
        question: 'Josué V. Himes fundó la revista __________ en Boston en 1840.',
        correct: ['signs of the times'],
        explanation: 'Signs of the Times.'
    },
    {
        id: 74,
        level: 'dificil',
        type: 'fill',
        question: 'Himes murió en el año __________.',
        correct: ['1895'],
        explanation: 'Himes murió en 1895.'
    },
    {
        id: 75,
        level: 'dificil',
        type: 'multiple',
        question: '¿De qué país era originario José Wolff?',
        options: ['Inglaterra', 'Alemania (Baviera)', 'Francia', 'Suiza'],
        correct: 1,
        explanation: 'Wolff nació en Baviera, Alemania.'
    },
    {
        id: 76,
        level: 'dificil',
        type: 'fill',
        question: 'Miller predicó más de __________ sermones en su ministerio.',
        correct: ['3000'],
        explanation: 'Más de 3,000 sermones.'
    },
    {
        id: 77,
        level: 'dificil',
        type: 'multiple',
        question: 'Josías Litch se unió al movimiento adventista después de leer un libro escrito por:',
        options: ['Miller', 'Fitch', 'Himes', 'Snow'],
        correct: 0,
        explanation: 'Se unió después de leer un libro de Miller.'
    },
    {
        id: 78,
        level: 'dificil',
        type: 'fill',
        question: 'Charles Fitch dijo: "Prepárate para encontrarte con tu __________".',
        correct: ['dios'],
        explanation: 'Prepárate para encontrarte con tu Dios.'
    }
];

// ============================================
// SISTEMA DE AUDIO
// ============================================
class AudioManager {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.init();
    }
    
    init() {
        if (typeof window !== 'undefined') {
            try {
                this.createBeepSounds();
            } catch(e) {
                console.log('Audio no disponible:', e);
                this.enabled = false;
            }
        }
    }
    
    createBeepSounds() {
        const createBeep = (frequency, duration, type = 'sine') => {
            return () => {
                if (!this.enabled) return;
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = frequency;
                    oscillator.type = type;
                    
                    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + duration);
                    
                    oscillator.start();
                    oscillator.stop(audioContext.currentTime + duration);
                    
                    setTimeout(() => audioContext.close(), duration * 1000);
                } catch(e) {
                    this.playFallbackSound(frequency);
                }
            };
        };
        
        this.sounds = {
            correct: createBeep(880, 0.3, 'sine'),
            incorrect: createBeep(440, 0.5, 'sawtooth'),
            levelUp: createBeep(523.25, 0.2, 'sine'),
            complete: createBeep(659.25, 0.15, 'sine')
        };
        
        this.sounds.complete = () => {
            if (!this.enabled) return;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    const beep = createBeep(freq, 0.2, 'sine');
                    beep();
                }, i * 150);
            });
        };
    }
    
    playFallbackSound(frequency) {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.00001, audioContext.currentTime + 0.3);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
            
            setTimeout(() => audioContext.close(), 400);
        } catch(e) {}
    }
    
    play(soundName) {
        if (this.enabled && this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

const audioManager = new AudioManager();

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
let selectedOptionText = null;

// REQUISITO: 75% PARA DESBLOQUEAR NIVELES
const REQUIRED_PERCENTAGE = 75;

// Estado de niveles desbloqueados
let levelUnlocked = {
    facil: true,
    medio: false,
    dificil: false
};

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
// FUNCIONES DE PROGRESO Y DESBLOQUEO
// ============================================

function getTotalQuestionsForLevel(level) {
    return filterQuestionsByLevel(level).length;
}

function saveLevelProgress(level, correct, incorrect) {
    try {
        const totalQuestions = getTotalQuestionsForLevel(level);
        const totalAnswered = correct + incorrect;
        const percentage = totalAnswered > 0 ? Math.round((correct / totalAnswered) * 100) : 0;
        const isCompleted = totalAnswered === totalQuestions && percentage >= REQUIRED_PERCENTAGE;
        
        const progress = {
            correct: correct,
            incorrect: incorrect,
            totalAnswered: totalAnswered,
            totalQuestions: totalQuestions,
            percentage: percentage,
            isCompleted: isCompleted,
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(`historiaDenominacional_capitulo2_level_${level}_progress`, JSON.stringify(progress));
        
        // Si el nivel está completado, desbloquear el siguiente
        if (isCompleted) {
            if (level === 'facil' && !levelUnlocked.medio) {
                levelUnlocked.medio = true;
                saveUnlockedLevels();
                showNotification('🎉 ¡Nivel Fácil completado! Nivel Medio desbloqueado. 🎉');
                audioManager.play('levelUp');
                updateLevelButtons();
            } else if (level === 'medio' && !levelUnlocked.dificil) {
                levelUnlocked.dificil = true;
                saveUnlockedLevels();
                showNotification('🏆 ¡Nivel Medio completado! Nivel Difícil desbloqueado. 🏆');
                audioManager.play('levelUp');
                updateLevelButtons();
            }
        }
        
        return progress;
    } catch(e) {
        console.log('Error guardando progreso:', e);
        return null;
    }
}

function loadLevelProgress(level) {
    try {
        const saved = localStorage.getItem(`historiaDenominacional_capitulo2_level_${level}_progress`);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch(e) {
        console.log('Error cargando progreso:', e);
    }
    return {
        correct: 0,
        incorrect: 0,
        totalAnswered: 0,
        totalQuestions: getTotalQuestionsForLevel(level),
        percentage: 0,
        isCompleted: false
    };
}

function loadUnlockedLevels() {
    try {
        const savedUnlocked = localStorage.getItem('historiaDenominacional_capitulo2_unlocked_levels');
        if (savedUnlocked) {
            const unlocked = JSON.parse(savedUnlocked);
            levelUnlocked.medio = unlocked.medio || false;
            levelUnlocked.dificil = unlocked.dificil || false;
        }
        
        // Verificar nuevamente con el progreso guardado
        const facilProgress = loadLevelProgress('facil');
        if (facilProgress.isCompleted) {
            levelUnlocked.medio = true;
        }
        
        const medioProgress = loadLevelProgress('medio');
        if (medioProgress.isCompleted) {
            levelUnlocked.dificil = true;
        }
        
        saveUnlockedLevels();
        updateLevelButtons();
    } catch(e) {
        console.log('Error cargando niveles desbloqueados:', e);
    }
}

function saveUnlockedLevels() {
    try {
        localStorage.setItem('historiaDenominacional_capitulo2_unlocked_levels', JSON.stringify({
            medio: levelUnlocked.medio,
            dificil: levelUnlocked.dificil
        }));
    } catch(e) {
        console.log('Error guardando niveles desbloqueados:', e);
    }
}

function updateLevelButtons() {
    const levelBtns = document.querySelectorAll('.level-btn');
    levelBtns.forEach(btn => {
        const level = btn.dataset.level;
        if (!levelUnlocked[level] && level !== currentLevel) {
            btn.disabled = true;
            btn.classList.add('locked');
            btn.title = `🔒 Completa el nivel ${level === 'medio' ? 'Fácil' : 'Medio'} con ${REQUIRED_PERCENTAGE}% para desbloquear`;
        } else {
            btn.disabled = false;
            btn.classList.remove('locked');
            btn.title = '';
        }
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// MODAL PARA NIVEL BLOQUEADO
// ============================================
function showLockedModal(targetLevel) {
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();
    
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const requiredLevel = targetLevel === 'medio' ? 'Fácil' : 'Medio';
    
    let requiredProgress;
    if (targetLevel === 'medio') {
        requiredProgress = loadLevelProgress('facil');
    } else {
        requiredProgress = loadLevelProgress('medio');
    }
    
    const currentPercent = requiredProgress.percentage;
    const answeredQuestions = requiredProgress.totalAnswered;
    const totalQuestions = requiredProgress.totalQuestions;
    
    modalContent.innerHTML = `
        <div class="modal-icon">🔒</div>
        <h3 class="modal-title">Nivel Bloqueado</h3>
        <p class="modal-message">
            Para acceder al nivel <strong>${targetLevel === 'medio' ? 'Medio' : 'Difícil'}</strong>,<br>
            primero debes completar el nivel <strong>${requiredLevel}</strong> con al menos <strong>${REQUIRED_PERCENTAGE}%</strong> de aciertos.
        </p>
        <div class="modal-progress-info">
            <div class="modal-progress-item">
                <span class="modal-progress-label">Nivel Requerido:</span>
                <span class="modal-progress-value">${requiredLevel}</span>
            </div>
            <div class="modal-progress-item">
                <span class="modal-progress-label">Preguntas totales:</span>
                <span class="modal-progress-value">${totalQuestions}</span>
            </div>
            <div class="modal-progress-item">
                <span class="modal-progress-label">Preguntas respondidas:</span>
                <span class="modal-progress-value">${answeredQuestions}/${totalQuestions}</span>
            </div>
            <div class="modal-progress-item">
                <span class="modal-progress-label">Tu porcentaje:</span>
                <span class="modal-progress-value ${currentPercent >= REQUIRED_PERCENTAGE ? 'success' : 'warning'}">${currentPercent}%</span>
            </div>
            <div class="modal-progress-item">
                <span class="modal-progress-label">Mínimo requerido:</span>
                <span class="modal-progress-value">${REQUIRED_PERCENTAGE}%</span>
            </div>
        </div>
        <div class="modal-requirement-info">
            <div class="requirement-icon">📚</div>
            <p>Completa todas las ${totalQuestions} preguntas del nivel ${requiredLevel} y alcanza al menos ${REQUIRED_PERCENTAGE}% de respuestas correctas para desbloquear este nivel.</p>
        </div>
        <button class="modal-close-btn" id="modalCloseBtn">Entendido</button>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    const closeBtn = modalContent.querySelector('#modalCloseBtn');
    closeBtn.onclick = () => {
        modalOverlay.classList.add('fade-out');
        setTimeout(() => modalOverlay.remove(), 300);
    };
    
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('fade-out');
            setTimeout(() => modalOverlay.remove(), 300);
        }
    };
}

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
    
    // Guardar progreso automáticamente
    saveLevelProgress(currentLevel, correctCount, incorrectCount);
}

function filterQuestionsByLevel(level) {
    return questions.filter(q => q.level === level);
}

// ============================================
// SELECTOR DE CAPÍTULOS
// ============================================
function loadChapterSelector() {
    const selector = domElements.chapterSelector;
    if (!selector) return;
    
    selector.innerHTML = '';
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '2');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '2');
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

function goToChapter(chapterNumber) {
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '2');
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
// CAMBIAR NIVEL CON VERIFICACIÓN ESTRICTA
// ============================================
function changeLevel(level) {
    if (level === currentLevel) return;
    
    // VERIFICACIÓN ESTRICTA - NO PERMITE CAMBIAR SI NO ESTÁ DESBLOQUEADO
    if (!levelUnlocked[level]) {
        showLockedModal(level);
        audioManager.play('incorrect');
        
        const btn = document.querySelector(`.level-btn[data-level="${level}"]`);
        if (btn) {
            btn.classList.add('shake');
            setTimeout(() => btn.classList.remove('shake'), 500);
        }
        return;
    }
    
    if (confirm(`¿Cambiar a nivel ${level}? Se reiniciará tu progreso actual en este nivel.`)) {
        // Guardar progreso del nivel actual antes de cambiar
        saveLevelProgress(currentLevel, correctCount, incorrectCount);
        
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '2';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Heraldos del Mensaje del Advenimiento - Nivel ${level}`;
        }
        
        restartChapter();
    }
}

// ============================================
// SELECCIÓN MÚLTIPLE CON OPCIONES ALEATORIAS
// ============================================
function loadMultipleChoice(question) {
    const container = domElements.multipleChoiceContainer;
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const letters = ['A', 'B', 'C', 'D'];
    
    // Crear array de opciones con índices originales y mezclarlos
    const optionsWithIndex = question.options.map((option, idx) => ({
        text: option,
        originalIndex: idx,
        isCorrect: idx === question.correct
    }));
    
    const shuffledOptions = shuffleArray([...optionsWithIndex]);
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.setAttribute('data-letter', letters[index]);
        button.innerHTML = `<span class="option-letter">${letters[index]}</span><span class="option-text">${option.text}</span>`;
        button.onclick = () => selectOption(index, option.text);
        container.appendChild(button);
    });
}

function selectOption(index, optionText) {
    if (answered) return;
    
    const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
    selectedOption = index;
    selectedOptionText = optionText;
}

// ============================================
// COMPLETACIÓN CON OPCIONES ALEATORIAS
// ============================================
function loadFillInTheBlank(question) {
    const container = domElements.fillBlankContainer;
    
    container.innerHTML = '';
    container.classList.remove('hidden');
    
    const allOptions = generateFillOptions(question);
    const shuffledOptions = shuffleArray([...allOptions]);
    
    const fillOptionsDiv = document.createElement('div');
    fillOptionsDiv.className = 'fill-options';
    
    shuffledOptions.forEach((option) => {
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
        'lisboa', 'lisbon', 'terremoto', 'señal', 'profecía',
        'séptimo', 'octavo', 'noveno', 'décimo',
        'juicio', 'condenación', 'salvación', 'redención',
        'babilonia', 'jerusalén', 'roma', 'sinaí',
        'marca', 'sello', 'imagen', 'nombre',
        'metodista', 'bautista', 'presbiteriana', 'católica',
        '1843', '1844', '1845', '1850',
        'himes', 'fitch', 'litch', 'snow', 'wolff', 'bengel',
        'irving', 'drummond', 'winter', 'bonar', 'muller',
        'lacunza', 'gaussen', 'heintzpeter', 'walbon', 'boquist',
        '14', '12', '10', '7', '3000', '4000', '5000'
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
    
    return allOptions.slice(0, 4);
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
    selectedOptionText = null;
    
    if (question.type === 'multiple') {
        domElements.questionType.textContent = 'Selección Simple';
        loadMultipleChoice(question);
    } else if (question.type === 'fill') {
        domElements.questionType.textContent = 'Completación';
        loadFillInTheBlank(question);
    }
    
    domElements.questionText.classList.add('fade-in');
    setTimeout(() => domElements.questionText.classList.remove('fade-in'), 500);
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
        if (selectedOption === null || selectedOptionText === null) {
            alert('Por favor selecciona una respuesta');
            return;
        }
        
        const buttons = document.querySelectorAll('#multipleChoiceContainer .option-btn');
        const correctText = question.options[question.correct];
        
        let correctButtonIndex = -1;
        buttons.forEach((btn, idx) => {
            const btnText = btn.querySelector('.option-text').textContent;
            if (btnText === correctText) {
                correctButtonIndex = idx;
            }
        });
        
        isCorrect = selectedOptionText === correctText;
        
        if (buttons[correctButtonIndex]) {
            buttons[correctButtonIndex].classList.add('correct');
        }
        if (!isCorrect && buttons[selectedOption]) {
            buttons[selectedOption].classList.add('incorrect');
            message = `❌ Incorrecto. La respuesta correcta es: ${correctText}`;
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
        audioManager.play('correct');
        
        const questionDiv = document.getElementById('questionText');
        questionDiv.classList.add('correct-answer-pulse');
        setTimeout(() => questionDiv.classList.remove('correct-answer-pulse'), 500);
        
    } else {
        incorrectCount++;
        if (!message) {
            message = `❌ Incorrecto. ${question.explanation || 'Revisa el texto para aprender más.'}`;
        }
        audioManager.play('incorrect');
        
        const questionDiv = document.getElementById('questionText');
        questionDiv.classList.add('incorrect-answer-shake');
        setTimeout(() => questionDiv.classList.remove('incorrect-answer-shake'), 500);
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
// ANIMACIÓN DE CONFETI
// ============================================
function showConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const colors = ['#FFD700', '#FFC107', '#FFB347', '#FFA500', '#FF8C00'];
    
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: (Math.random() - 0.5) * 3,
            speedY: Math.random() * 5 + 3,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }
    
    let animationId;
    let startTime = Date.now();
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let allFallen = true;
        
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            
            if (p.y < canvas.height + 50) {
                allFallen = false;
            }
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
            ctx.restore();
        }
        
        if (allFallen || Date.now() - startTime > 3000) {
            cancelAnimationFrame(animationId);
            canvas.remove();
        } else {
            animationId = requestAnimationFrame(animate);
        }
    }
    
    animate();
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
    const totalQuestionsInLevel = shuffledQuestions.length;
    const allQuestionsAnswered = total === totalQuestionsInLevel;
    
    let message = '';
    let levelMessage = '';
    
    // Verificar si se completó el nivel (todas las preguntas respondidas Y 75% o más)
    const levelCompleted = allQuestionsAnswered && percentage >= REQUIRED_PERCENTAGE;
    
    if (levelCompleted) {
        // Guardar progreso y desbloquear siguiente nivel
        saveLevelProgress(currentLevel, correctCount, incorrectCount);
        
        if (currentLevel === 'facil') {
            levelMessage = `✨ ¡Nivel Fácil Superado! Nivel Medio Desbloqueado ✨ (${percentage}% - Mínimo ${REQUIRED_PERCENTAGE}%)`;
            audioManager.play('complete');
            showConfetti();
        } else if (currentLevel === 'medio') {
            levelMessage = `🏆 ¡Nivel Medio Superado! Nivel Difícil Desbloqueado 🏆 (${percentage}% - Mínimo ${REQUIRED_PERCENTAGE}%)`;
            audioManager.play('complete');
            showConfetti();
        } else if (currentLevel === 'dificil') {
            levelMessage = `👑 ¡Nivel Difícil Dominado! ¡Eres un Experto en los Heraldos del Advenimiento! 👑 (${percentage}%)`;
            audioManager.play('complete');
            showConfetti();
        }
    } else if (allQuestionsAnswered && percentage < REQUIRED_PERCENTAGE) {
        levelMessage = `⚠️ Necesitas ${REQUIRED_PERCENTAGE}% para desbloquear el siguiente nivel. Obtuviste ${percentage}% ⚠️`;
    } else {
        levelMessage = `📖 Completa todas las preguntas para desbloquear el siguiente nivel (requiere ${REQUIRED_PERCENTAGE}%)`;
    }
    
    if (percentage >= 90) message = '¡Excelente! Conoces perfectamente a los Heraldos del Advenimiento.';
    else if (percentage >= REQUIRED_PERCENTAGE) message = '¡Muy bien! Has superado el nivel.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar los nombres y fechas importantes.';
    else message = 'Sigue estudiando, la historia del advenimiento es fascinante.';
    
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ¡CAPÍTULO 2 COMPLETADO! 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '2');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '2');
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
    console.log('Capítulo 2 - Iniciando...');
    console.log(`Requisito para desbloquear niveles: ${REQUIRED_PERCENTAGE}%`);
    
    if (!domElements.correctCount || !domElements.incorrectCount) {
        console.error('No se encontraron los elementos de contador');
        return;
    }
    
    // Cargar niveles desbloqueados
    loadUnlockedLevels();
    
    const savedLevel = localStorage.getItem('historiaDenominacional_level') || 'facil';
    currentLevel = savedLevel;
    
    // Cargar progreso guardado del nivel actual
    const savedProgress = loadLevelProgress(currentLevel);
    correctCount = savedProgress.correct;
    incorrectCount = savedProgress.incorrect;
    
    const levelQuestions = filterQuestionsByLevel(currentLevel);
    shuffledQuestions = shuffleArray([...levelQuestions]);
    
    console.log(`Preguntas cargadas: ${shuffledQuestions.length} de nivel ${currentLevel}`);
    console.log(`Progreso cargado: ${correctCount} correctas, ${incorrectCount} incorrectas`);
    console.log(`Niveles desbloqueados: Fácil: true, Medio: ${levelUnlocked.medio}, Difícil: ${levelUnlocked.dificil}`);
    
    currentQuestionIndex = 0;
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '2';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Heraldos del Mensaje del Advenimiento - Nivel ${currentLevel}`;
    }
    
    const allLevelBtns = document.querySelectorAll('.level-btn');
    allLevelBtns.forEach(btn => {
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('active');
        }
    });
    
    updateLevelButtons();
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