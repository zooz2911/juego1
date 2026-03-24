// ============================================
// PREGUNTAS DEL CAPÍTULO 3 - SURGE LA IGLESIA REMANENTE
// CON NIVELES DE DIFICULTAD (FÁCIL, MEDIO, DIFÍCIL)
// ============================================
const questions = [
    // ============================================
    // SECCIÓN A: EL MENSAJE DEL SEGUNDO ÁNGEL (IDs 1-5) - NIVEL FÁCIL
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué mensaje proclama el segundo ángel de Apocalipsis 14:8?',
        options: ['Ha llegado la hora del juicio', 'Ha caído Babilonia', 'No recibáis la marca de la bestia', 'Adorad al Creador'],
        correct: 1,
        explanation: 'El segundo ángel declara: "Ha caído, ha caído Babilonia".'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año comenzó Guillermo Miller su ministerio público?',
        options: ['1821', '1831', '1840', '1844'],
        correct: 1,
        explanation: 'Miller comenzó su ministerio público en 1831.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Dónde estaba el punto focal de la enseñanza del advenimiento?',
        options: ['California', 'Nueva Inglaterra', 'Pensilvania', 'Virginia'],
        correct: 1,
        explanation: 'El punto focal estaba en Nueva Inglaterra, nordeste de Estados Unidos.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'fill',
        question: 'El segundo ángel proclama: "Ha caído __________, la gran ciudad".',
        correct: ['babilonia'],
        explanation: 'Babilonia.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'fill',
        question: 'Guillermo Miller comenzó su ministerio público en el año __________.',
        correct: ['1831'],
        explanation: '1831.'
    },

    // ============================================
    // SECCIÓN B: LOS CONGRESOS BÍBLICOS (IDs 6-10) - NIVEL FÁCIL
    // ============================================
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Entre qué años se celebraron los congresos generales de creyentes en el advenimiento?',
        options: ['1831-1835', '1840-1842', '1844-1846', '1848-1850'],
        correct: 1,
        explanation: 'De 1840 a 1842 se celebraron series de congresos generales.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué revista era considerada el órgano oficial del grupo?',
        options: ['The Midnight Cry', 'The Advent Herald', 'Signs of the Times', 'The Review and Herald'],
        correct: 2,
        explanation: 'La revista era Signs of the Times.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué evento profético ocurrió en 1840 confirmando las profecías?',
        options: ['El terremoto de Lisboa', 'Caída del Imperio Otomano', 'La caída de estrellas', 'El Día Oscuro'],
        correct: 1,
        explanation: 'La pérdida de independencia del Imperio Otomano en 1840.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año terminó el período de 1260 años de dominación papal?',
        options: ['1755', '1780', '1798', '1833'],
        correct: 2,
        explanation: 'Los 1260 años terminaron en 1798 con la cautividad del papa.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'fill',
        question: 'Los congresos bíblicos adventistas se celebraron entre 1840 y __________.',
        correct: ['1842'],
        explanation: 'Hasta 1842.'
    },

    // ============================================
    // SECCIÓN C: LA SEPARACIÓN DE LAS IGLESIAS (IDs 11-15) - NIVEL FÁCIL
    // ============================================
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué año Charles Fitch aplicó el término "Babilonia" a las iglesias protestantes?',
        options: ['1840', '1842', '1843', '1844'],
        correct: 2,
        explanation: 'En el verano de 1843.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué familia fue desfraternizada de su iglesia por aceptar el mensaje adventista?',
        options: ['Los Bates', 'Los White', 'Los Harmon', 'Los Andrews'],
        correct: 2,
        explanation: 'La familia Harmon (padres de Elena White) fue desfraternizada.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuántos creyentes se habían separado de sus iglesias para el verano de 1844?',
        options: ['10,000', '25,000', '50,000', '100,000'],
        correct: 2,
        explanation: 'Unos 50,000 creyentes.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'fill',
        question: 'Charles Fitch aplicó el mensaje a las iglesias en el verano de __________.',
        correct: ['1843'],
        explanation: '1843.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'fill',
        question: 'La familia __________ fue desfraternizada de la iglesia metodista.',
        correct: ['harmon'],
        explanation: 'Los Harmon.'
    },

    // ============================================
    // SECCIÓN D: EL CLAMOR DE MEDIANOCHE Y EL GRAN CHASCO (IDs 16-30) - NIVEL MEDIO
    // ============================================
    {
        id: 16,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué fechas se fijaron inicialmente para el fin de los 2300 días?',
        options: ['21 marzo y 18 abril 1844', '22 octubre 1844', '19 mayo 1844', '13 noviembre 1844'],
        correct: 0,
        explanation: '21 de marzo y 18 de abril de 1844.'
    },
    {
        id: 17,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién presentó el mensaje del "clamor de medianoche" en agosto de 1844?',
        options: ['Guillermo Miller', 'José Bates', 'Samuel S. Snow', 'Charles Fitch'],
        correct: 2,
        explanation: 'Samuel S. Snow.'
    },
    {
        id: 18,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué parábola bíblica se aplicó a la experiencia adventista?',
        options: ['El sembrador', 'La oveja perdida', 'Las diez vírgenes', 'El trigo y la cizaña'],
        correct: 2,
        explanation: 'La parábola de las diez vírgenes.'
    },
    {
        id: 19,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué fecha se determinó finalmente para el fin de los 2300 días?',
        options: ['21 marzo 1844', '18 abril 1844', '22 octubre 1844', '13 noviembre 1844'],
        correct: 2,
        explanation: 'El 22 de octubre de 1844.'
    },
    {
        id: 20,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué suceso esperaban los adventistas para el 22 de octubre de 1844?',
        options: ['La purificación de la tierra', 'La segunda venida de Cristo', 'El fin del mundo', 'La marca de la bestia'],
        correct: 1,
        explanation: 'Esperaban la segunda venida de Cristo.'
    },
    {
        id: 21,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién tuvo una visión en el maizal después del chasco?',
        options: ['Elena White', 'José Bates', 'Hiram Edson', 'Jaime White'],
        correct: 2,
        explanation: 'Hiram Edson.'
    },
    {
        id: 22,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué vio Hiram Edson en su visión?',
        options: ['El sábado', 'A Cristo entrando al lugar santísimo', 'La caída de Babilonia', 'El fin del mundo'],
        correct: 1,
        explanation: 'Vio a Cristo como Sumo Sacerdote entrando al lugar santísimo.'
    },
    {
        id: 23,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué doctrina surgió de la visión de Hiram Edson?',
        options: ['El sábado', 'El estado de los muertos', 'El juicio investigador', 'El diezmo'],
        correct: 2,
        explanation: 'El juicio investigador.'
    },
    {
        id: 24,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año murió Guillermo Miller?',
        options: ['1844', '1845', '1849', '1850'],
        correct: 2,
        explanation: 'Miller murió en diciembre de 1849.'
    },
    {
        id: 25,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué fecha se casaron Jaime White y Elena Harmon?',
        options: ['22 octubre 1844', '30 agosto 1846', '19 mayo 1846', '13 noviembre 1846'],
        correct: 1,
        explanation: 'Se casaron el 30 de agosto de 1846.'
    },
    {
        id: 26,
        level: 'medio',
        type: 'fill',
        question: 'El primer chasco ocurrió el 21 de __________ de 1844.',
        correct: ['marzo'],
        explanation: '21 de marzo.'
    },
    {
        id: 27,
        level: 'medio',
        type: 'fill',
        question: 'Samuel S. Snow presentó el "clamor de medianoche" en agosto de __________.',
        correct: ['1844'],
        explanation: 'Agosto de 1844.'
    },
    {
        id: 28,
        level: 'medio',
        type: 'fill',
        question: 'El 22 de octubre de 1844 correspondía al décimo día del __________ mes judío.',
        correct: ['séptimo'],
        explanation: 'Séptimo mes (Día de la Expiación).'
    },
    {
        id: 29,
        level: 'medio',
        type: 'fill',
        question: 'Hiram __________ tuvo una visión en el maizal después del chasco.',
        correct: ['edson'],
        explanation: 'Hiram Edson.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'fill',
        question: 'Jaime White y Elena Harmon se casaron el 30 de agosto de __________.',
        correct: ['1846'],
        explanation: '1846.'
    },

    // ============================================
    // SECCIÓN E: COMIENZOS DEL SÁBADO (IDs 31-40) - NIVEL MEDIO
    // ============================================
    {
        id: 31,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién llevó la verdad del sábado a los adventistas de Washington, New Hampshire?',
        options: ['José Bates', 'Raquel Oakes Preston', 'T.M. Preble', 'Frederick Wheeler'],
        correct: 1,
        explanation: 'Raquel Oakes Preston, una bautista del séptimo día.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año Raquel Oakes visitó Washington, New Hampshire?',
        options: ['1843', '1844', '1845', '1846'],
        correct: 1,
        explanation: 'Durante el clamor de medianoche en 1844.'
    },
    {
        id: 33,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue el primer ministro adventista en aceptar el sábado?',
        options: ['José Bates', 'Jaime White', 'Frederick Wheeler', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Frederick Wheeler, pastor de la iglesia de Washington.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién escribió el primer artículo sobre el sábado en 1845?',
        options: ['José Bates', 'T.M. Preble', 'J.B. Cook', 'Jaime White'],
        correct: 1,
        explanation: 'T.M. Preble.'
    },
    {
        id: 35,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién visitó Washington para estudiar el sábado y lo aceptó?',
        options: ['Jaime White', 'Elena White', 'José Bates', 'J.N. Andrews'],
        correct: 2,
        explanation: 'José Bates visitó el grupo y aceptó el sábado.'
    },
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué grupo preservó la verdad del sábado por siglos?',
        options: ['Los católicos', 'Los luteranos', 'Los bautistas del séptimo día', 'Los metodistas'],
        correct: 2,
        explanation: 'Los Bautistas del Séptimo Día.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién escribió el primer tratado amplio sobre el sábado?',
        options: ['T.M. Preble', 'J.B. Cook', 'José Bates', 'J.N. Andrews'],
        correct: 2,
        explanation: 'José Bates.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuántos congresos sobre el sábado se celebraron en 1848?',
        options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
        correct: 3,
        explanation: 'Seis congresos sobre el sábado.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'fill',
        question: 'Raquel Oakes llevó la verdad del sábado a Washington, New Hampshire en __________.',
        correct: ['1844'],
        explanation: '1844.'
    },
    {
        id: 40,
        level: 'medio',
        type: 'fill',
        question: 'El primer ministro adventista en aceptar el sábado fue Frederick __________.',
        correct: ['wheeler'],
        explanation: 'Frederick Wheeler.'
    },

    // ============================================
    // SECCIÓN F: EL DON DE PROFECÍA - ELENA G. DE WHITE (IDs 41-65) - NIVEL DIFÍCIL
    // ============================================
    {
        id: 41,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué versículo dice que "el testimonio de Jesús es el espíritu de profecía"?',
        options: ['Apocalipsis 12:17', 'Apocalipsis 19:10', 'Apocalipsis 14:12', 'Apocalipsis 22:21'],
        correct: 1,
        explanation: 'Apocalipsis 19:10.'
    },
    {
        id: 42,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién recibió visiones antes que Elena White, pero dejó de proclamarlas?',
        options: ['William Foy', 'Hazen Foss', 'José Bates', 'Jaime White'],
        correct: 1,
        explanation: 'Hazen Foss rechazó el don por temor al ridículo.'
    },
    {
        id: 43,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué edad tenía Elena White cuando recibió su primera visión?',
        options: ['15 años', '17 años', '19 años', '21 años'],
        correct: 1,
        explanation: 'Tenía 17 años.'
    },
    {
        id: 44,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué fecha recibió Elena White su primera visión?',
        options: ['Octubre 1844', 'Noviembre 1844', 'Diciembre 1844', 'Enero 1845'],
        correct: 2,
        explanation: 'Diciembre de 1844, dos meses después del chasco.'
    },
    {
        id: 45,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué vio Elena White en su primera visión?',
        options: ['El sábado', 'El santuario', 'El viaje del pueblo de Dios al cielo', 'La marca de la bestia'],
        correct: 2,
        explanation: 'Vio el viaje del pueblo de Dios en su ruta al reino.'
    },
    {
        id: 46,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál es la primera prueba bíblica de un profeta según Isaías 8:20?',
        options: ['Sus frutos', 'Cumplimiento de profecías', 'Conforme a la ley y al testimonio', 'Confesar a Cristo'],
        correct: 2,
        explanation: 'Isaías 8:20: "¡A la ley y al testimonio!"'
    },
    {
        id: 47,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál es la segunda prueba de un profeta según Mateo 7:20?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 1,
        explanation: 'Mateo 7:20: "Por sus frutos los conoceréis".'
    },
    {
        id: 48,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál es la tercera prueba de un profeta según Jeremías 28:9?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 2,
        explanation: 'Jeremías 28:9: "Cuando se cumpla la palabra del profeta".'
    },
    {
        id: 49,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál es la cuarta prueba de un profeta según 1 Juan 4:2?',
        options: ['Conforme a la ley', 'Por sus frutos', 'Cumplimiento de profecías', 'Confesar a Cristo'],
        correct: 3,
        explanation: '1 Juan 4:2: "Confiesa que Jesucristo ha venido en carne".'
    },
    {
        id: 50,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué predijo Elena White en 1848 acerca de la obra publicadora?',
        options: ['Que sería pequeña', 'Que crecería hasta circuir el globo', 'Que tendría dificultades', 'Que se limitaría a EE.UU.'],
        correct: 1,
        explanation: 'Predijo que crecería hasta "rayos de luz que han de circuir el globo".'
    },
    {
        id: 51,
        level: 'dificil',
        type: 'multiple',
        question: '¿Dónde nació Elena G. de White?',
        options: ['Boston', 'Gorham, Maine', 'Portland', 'Nueva York'],
        correct: 1,
        explanation: 'Nació en Gorham, Maine, el 26 de noviembre de 1827.'
    },
    {
        id: 52,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué accidente sufrió Elena White a los 9 años?',
        options: ['Una caída', 'Golpe en la cara con una piedra', 'Un incendio', 'Una enfermedad'],
        correct: 1,
        explanation: 'Recibió un golpe en la cara con una piedra lanzada por otra niña.'
    },
    {
        id: 53,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año escuchó Elena White las doctrinas de Miller por primera vez?',
        options: ['1838', '1840', '1842', '1844'],
        correct: 1,
        explanation: 'En 1840 y otra vez en 1842.'
    },
    {
        id: 54,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año Elena White entregó su corazón a Dios?',
        options: ['1840', '1842', '1844', '1846'],
        correct: 0,
        explanation: 'En un campamento a fines de 1840.'
    },
    {
        id: 55,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué fecha recibió Elena White la visión del sábado?',
        options: ['Diciembre 1844', 'Abril 1847', 'Agosto 1848', 'Octubre 1844'],
        correct: 1,
        explanation: 'En abril de 1847.'
    },
    {
        id: 56,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué vio Elena White en el templo celestial en la visión del sábado?',
        options: ['El arca del pacto', 'Los Diez Mandamientos con un halo en el cuarto', 'El altar del incienso', 'El candelabro'],
        correct: 1,
        explanation: 'Vio los Diez Mandamientos con un halo alrededor del cuarto.'
    },
    {
        id: 57,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuál es el libro más conocido de Elena White?',
        options: ['Patriarcas y Profetas', 'El Conflicto de los Siglos', 'El Deseado de Todas las Gentes', 'Primeros Escritos'],
        correct: 2,
        explanation: 'El Deseado de Todas las Gentes.'
    },
    {
        id: 58,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué institución ayudó a establecer Elena White en Australia?',
        options: ['Un sanatorio', 'El Colegio de Avondale', 'Una editorial', 'Una iglesia'],
        correct: 1,
        explanation: 'El Colegio de Avondale.'
    },
    {
        id: 59,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué fenómeno ocurría durante las visiones de Elena White?',
        options: ['Perdía el conocimiento', 'Dejaba de respirar pero mantenía el pulso', 'Hablaba en lenguas', 'Tenía convulsiones'],
        correct: 1,
        explanation: 'Cesaba su respiración, pero no perdía el color ni le fallaba el pulso.'
    },
    {
        id: 60,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué fecha murió Elena G. de White?',
        options: ['16 julio 1915', '30 agosto 1915', '22 octubre 1915', '26 noviembre 1915'],
        correct: 0,
        explanation: 'Murió el 16 de julio de 1915.'
    },
    {
        id: 61,
        level: 'dificil',
        type: 'fill',
        question: 'El testimonio de Jesús es el __________ de profecía (Apoc. 19:10).',
        correct: ['espíritu'],
        explanation: 'Espíritu de profecía.'
    },
    {
        id: 62,
        level: 'dificil',
        type: 'fill',
        question: 'Hazen __________ rechazó el don de profecía por temor al ridículo.',
        correct: ['foss'],
        explanation: 'Hazen Foss.'
    },
    {
        id: 63,
        level: 'dificil',
        type: 'fill',
        question: 'Elena White recibió su primera visión en diciembre de __________.',
        correct: ['1844'],
        explanation: '1844.'
    },
    {
        id: 64,
        level: 'dificil',
        type: 'fill',
        question: 'Elena White tenía __________ años en su primera visión.',
        correct: ['17'],
        explanation: '17 años.'
    },
    {
        id: 65,
        level: 'dificil',
        type: 'fill',
        question: 'Elena White nació en Gorham, __________ el 26 de noviembre de 1827.',
        correct: ['maine'],
        explanation: 'Maine.'
    },

    // ============================================
    // SECCIÓN G: PIONEROS PRINCIPALES (IDs 66-85) - NIVEL DIFÍCIL
    // ============================================
    {
        id: 66,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año nació Jaime White?',
        options: ['1821', '1829', '1832', '1792'],
        correct: 0,
        explanation: 'Jaime White nació en 1821 y murió en 1881.'
    },
    {
        id: 67,
        level: 'dificil',
        type: 'multiple',
        question: '¿Cuántos años fue presidente de la Asociación General Jaime White?',
        options: ['5 años', '8 años', '10 años', '12 años'],
        correct: 2,
        explanation: 'Fue presidente 10 años en tres términos.'
    },
    {
        id: 68,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué oficio tenía José Bates antes de jubilarse?',
        options: ['Médico', 'Capitán de barco', 'Abogado', 'Maestro'],
        correct: 1,
        explanation: 'Fue capitán de barco.'
    },
    {
        id: 69,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué vicio abandonó José Bates mientras navegaba?',
        options: ['El juego', 'El alcohol y el tabaco', 'La comida', 'La pereza'],
        correct: 1,
        explanation: 'Abandonó el alcohol y el tabaco.'
    },
    {
        id: 70,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién fue el primer líder en aceptar la verdad del sábado?',
        options: ['Jaime White', 'J.N. Andrews', 'José Bates', 'Frederick Wheeler'],
        correct: 2,
        explanation: 'José Bates fue el primer líder.'
    },
    {
        id: 71,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año nació J.N. Andrews?',
        options: ['1821', '1829', '1832', '1798'],
        correct: 1,
        explanation: 'J.N. Andrews nació en 1829 y murió en 1883.'
    },
    {
        id: 72,
        level: 'dificil',
        type: 'multiple',
        question: '¿A qué edad comenzó a predicar J.N. Andrews?',
        options: ['17 años', '19 años', '21 años', '25 años'],
        correct: 2,
        explanation: 'Comenzó a los 21 años.'
    },
    {
        id: 73,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué libro escribió J.N. Andrews?',
        options: ['El Conflicto de los Siglos', 'Historia del Sábado', 'Daniel y Apocalipsis', 'El Deseado'],
        correct: 1,
        explanation: '"Historia del Sábado".'
    },
    {
        id: 74,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué sistema inició J.N. Andrews para financiar la predicación?',
        options: ['Ofrendas', 'Diezmo', 'Promesas', 'Donaciones'],
        correct: 1,
        explanation: 'Inició el estudio que llevó al sistema del diezmo.'
    },
    {
        id: 75,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año se eligió el nombre "Adventistas del Séptimo Día"?',
        options: ['1848', '1853', '1860', '1874'],
        correct: 2,
        explanation: 'En agosto de 1860.'
    },
    {
        id: 76,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién fue el primer misionero oficial a Europa en 1874?',
        options: ['Jaime White', 'José Bates', 'J.N. Andrews', 'Urías Smith'],
        correct: 2,
        explanation: 'J.N. Andrews.'
    },
    {
        id: 77,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién fue el primer presidente de la Asociación General?',
        options: ['Jaime White', 'José Bates', 'Juan Byington', 'J.N. Andrews'],
        correct: 2,
        explanation: 'Juan Byington.'
    },
    {
        id: 78,
        level: 'dificil',
        type: 'multiple',
        question: '¿Dónde funcionó la primera escuela de iglesia en 1853?',
        options: ['En casa de Bates', 'En casa de Byington', 'En casa de White', 'En casa de Andrews'],
        correct: 1,
        explanation: 'En casa de Juan Byington en Buck\'s Bridge, Nueva York.'
    },
    {
        id: 79,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién fue el primer maestro de la primera escuela de iglesia en casa de Byington?',
        options: ['Elena White', 'Marta Byington', 'Ana Smith', 'Raquel Oakes'],
        correct: 1,
        explanation: 'Marta Byington, hija de Juan Byington.'
    },
    {
        id: 80,
        level: 'dificil',
        type: 'multiple',
        question: '¿Para qué revista trabajó J.H. Waggoner?',
        options: ['Review and Herald', 'Signs of the Times', 'The Midnight Cry', 'The Advent Herald'],
        correct: 1,
        explanation: 'Trabajó para Signs of the Times.'
    },
    {
        id: 81,
        level: 'dificil',
        type: 'multiple',
        question: '¿Por qué es recordada Ana Smith?',
        options: ['Por sus libros', 'Por sus poesías e himnos', 'Por sus sermones', 'Por sus enseñanzas'],
        correct: 1,
        explanation: 'Por sus poesías, muchas usadas como himnos.'
    },
    {
        id: 82,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué libro escribió Urías Smith?',
        options: ['Historia del Sábado', 'Daniel y Apocalipsis', 'El Conflicto de los Siglos', 'Patriarcas y Profetas'],
        correct: 1,
        explanation: 'Daniel y Apocalipsis.'
    },
    {
        id: 83,
        level: 'dificil',
        type: 'multiple',
        question: '¿En qué año fue líder Urías Smith en discusiones sobre justificación por la fe?',
        options: ['1855', '1874', '1888', '1893'],
        correct: 2,
        explanation: 'En 1888.'
    },
    {
        id: 84,
        level: 'dificil',
        type: 'fill',
        question: 'Jaime White fue presidente de la Asociación General por __________ años.',
        correct: ['10'],
        explanation: '10 años.'
    },
    {
        id: 85,
        level: 'dificil',
        type: 'fill',
        question: 'El primer maestro de la primera escuela de iglesia en casa de Byington fue Marta __________.',
        correct: ['byington'],
        explanation: 'Marta Byington, hija de Juan Byington.'
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
        localStorage.setItem(`historiaDenominacional_capitulo3_level_${level}_progress`, JSON.stringify(progress));
        
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
        const saved = localStorage.getItem(`historiaDenominacional_capitulo3_level_${level}_progress`);
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
        const savedUnlocked = localStorage.getItem('historiaDenominacional_capitulo3_unlocked_levels');
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
        localStorage.setItem('historiaDenominacional_capitulo3_unlocked_levels', JSON.stringify({
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '3');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '3');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '3');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '3';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Surge la Iglesia Remanente (1844-1852) - Nivel ${level}`;
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
        'babilonia', 'jerusalén', 'roma', 'galilea', 'fariseos',
        'bautismo', 'oración', 'ayuno', 'diezmo', 'ofrenda',
        'templo', 'sinagoga', 'altar', 'incienso', 'pascua',
        'apóstoles', 'discípulos', 'profetas', 'reyes',
        '1843', '1845', '1847', '1848', '1850', '1860',
        'marzo', 'abril', 'mayo', 'junio', 'agosto', 'octubre',
        'miller', 'himes', 'fitch', 'snow', 'edson', 'bates',
        'white', 'harmon', 'foss', 'preble', 'cook', 'wheeler',
        'andrews', 'byington', 'waggoner', 'smith', 'avondale'
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
// RESULTADOS FINALES CON BOTONES DE SIGUIENTE NIVEL/CAPÍTULO
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
    
    // Variables para botones
    let showNextLevelBtn = false;
    let nextLevelTarget = '';
    let nextLevelDisplayName = '';
    let showNextChapterBtn = false;
    let nextChapterNumber = 0;
    
    // Procesar según el nivel completado
    if (levelCompleted) {
        // Guardar progreso
        saveLevelProgress(currentLevel, correctCount, incorrectCount);
        
        if (currentLevel === 'facil') {
            // Desbloquear nivel medio si no está desbloqueado
            if (!levelUnlocked.medio) {
                levelUnlocked.medio = true;
                saveUnlockedLevels();
                audioManager.play('levelUp');
                showConfetti();
                levelMessage = `✨ ¡Nivel Fácil Superado! Nivel Medio Desbloqueado ✨ (${percentage}% - Mínimo ${REQUIRED_PERCENTAGE}%)`;
            } else {
                levelMessage = `✅ ¡Nivel Fácil Completado! (${percentage}%)`;
            }
            // Mostrar botón de siguiente nivel
            showNextLevelBtn = true;
            nextLevelTarget = 'medio';
            nextLevelDisplayName = 'Medio';
            
        } else if (currentLevel === 'medio') {
            // Desbloquear nivel difícil si no está desbloqueado
            if (!levelUnlocked.dificil) {
                levelUnlocked.dificil = true;
                saveUnlockedLevels();
                audioManager.play('levelUp');
                showConfetti();
                levelMessage = `🏆 ¡Nivel Medio Superado! Nivel Difícil Desbloqueado 🏆 (${percentage}% - Mínimo ${REQUIRED_PERCENTAGE}%)`;
            } else {
                levelMessage = `✅ ¡Nivel Medio Completado! (${percentage}%)`;
            }
            // Mostrar botón de siguiente nivel
            showNextLevelBtn = true;
            nextLevelTarget = 'dificil';
            nextLevelDisplayName = 'Difícil';
            
        } else if (currentLevel === 'dificil') {
            // Completar capítulo - ir al siguiente capítulo
            audioManager.play('complete');
            showConfetti();
            levelMessage = `👑 ¡Nivel Difícil Dominado! ¡Has completado el Capítulo 3! 👑 (${percentage}%)`;
            // Mostrar botón de siguiente capítulo
            showNextChapterBtn = true;
            nextChapterNumber = 4;
        }
        
        // Actualizar botones de nivel
        updateLevelButtons();
        
    } else if (allQuestionsAnswered && percentage < REQUIRED_PERCENTAGE) {
        levelMessage = `⚠️ Necesitas ${REQUIRED_PERCENTAGE}% para desbloquear el siguiente nivel. Obtuviste ${percentage}% ⚠️`;
    } else {
        levelMessage = `📖 Completa todas las preguntas para desbloquear el siguiente nivel (requiere ${REQUIRED_PERCENTAGE}%)`;
    }
    
    // Mensaje según porcentaje
    if (percentage >= 90) message = '¡Excelente! Conoces bien el surgimiento de la Iglesia Remanente.';
    else if (percentage >= REQUIRED_PERCENTAGE) message = '¡Muy bien! Has superado el nivel.';
    else if (percentage >= 50) message = 'Bien, pero puedes repasar algunos conceptos.';
    else message = 'Sigue estudiando, la historia de la iglesia es fascinante.';
    
    // Construir botones de acción - SIEMPRE mostrar los botones base
    let actionButtons = `
        <button class="final-btn" onclick="backToMenu()">📚 Volver al Menú</button>
        <button class="final-btn" onclick="restartChapter()">🔄 Repetir Nivel</button>
    `;
    
    // Botón para siguiente nivel (si aplica)
    if (showNextLevelBtn) {
        actionButtons += `<button class="final-btn next-level-btn" onclick="goToNextLevel('${nextLevelTarget}')">🎯 Siguiente Nivel: ${nextLevelDisplayName} →</button>`;
    }
    
    // Botón para siguiente capítulo (si aplica)
    if (showNextChapterBtn) {
        actionButtons += `<button class="final-btn next-chapter-btn" onclick="goToNextChapter(${nextChapterNumber})">📖 Siguiente Capítulo: ${nextChapterNumber} →</button>`;
    }
    
    // Botón para cambiar nivel manualmente
    actionButtons += `<button class="final-btn" onclick="changeLevelPrompt()">🎮 Cambiar Nivel</button>`;
    
    // Mostrar resultados
    domElements.finalResults.innerHTML = `
        <div class="final-results-content">
            <h2>🎉 ${currentLevel === 'dificil' && levelCompleted ? '¡CAPÍTULO 3 COMPLETADO!' : '¡NIVEL COMPLETADO!'} 🎉</h2>
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
                ${actionButtons}
            </div>
        </div>
    `;
    
    domElements.finalResults.classList.remove('hidden');
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '3');
    completeChapter(chapterNumber);
    
    loadChapterSelector();
    loadChaptersMenu();
}

// ============================================
// FUNCIÓN PARA IR AL SIGUIENTE NIVEL
// ============================================
function goToNextLevel(level) {
    if (confirm(`¿Ir al nivel ${level}? Se reiniciará tu progreso en este nivel.`)) {
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '3';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Surge la Iglesia Remanente (1844-1852) - Nivel ${level}`;
        }
        
        restartChapter();
    }
}

// ============================================
// FUNCIÓN PARA IR AL SIGUIENTE CAPÍTULO
// ============================================
function goToNextChapter(chapterNumber) {
    if (confirm(`¿Ir al Capítulo ${chapterNumber}? Se perderá tu progreso actual.`)) {
        localStorage.setItem('historiaDenominacional_currentChapter', chapterNumber);
        // Reiniciar nivel guardado para el nuevo capítulo
        localStorage.setItem('historiaDenominacional_level', 'facil');
        window.location.href = `../libros/capitulo${chapterNumber}.html`;
    }
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '3');
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
    console.log('Capítulo 3 - Iniciando...');
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '3';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: Surge la Iglesia Remanente (1844-1852) - Nivel ${currentLevel}`;
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

// ============================================
// HACER FUNCIONES GLOBALES
// ============================================
window.backToMenu = backToMenu;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.restartChapter = restartChapter;
window.changeLevel = changeLevel;
window.changeLevelPrompt = changeLevelPrompt;
window.toggleMenu = toggleMenu;
window.goToChapter = goToChapter;
window.goToNextLevel = goToNextLevel;
window.goToNextChapter = goToNextChapter;
