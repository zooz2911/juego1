// ============================================
// PREGUNTAS DEL CAPÍTULO 1 CON NIVELES DE DIFICULTAD
// LA IGLESIA CRISTIANA A TRAVÉS DE LAS EDADES
// ============================================
const questions = [
    // ============================================
    // NIVEL FÁCIL - 24 preguntas (IDs 1-24)
    // ============================================
    {
        id: 1,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo se extiende la iglesia de Dios según el texto?',
        options: ['De Jerusalén a Roma', 'De Edén a Edén', 'De Sinaí a Sion', 'De Galilea al Mundo'],
        correct: 1,
        explanation: 'La iglesia de Dios se extiende de Edén a Edén.'
    },
    {
        id: 2,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué nombre NO recibió el pueblo de Dios según el texto?',
        options: ['Hijos de Dios', 'La semilla de Abraham', 'Los hijos de Israel', 'Los fariseos'],
        correct: 3,
        explanation: 'Los fariseos eran una secta judía, no un nombre del pueblo de Dios.'
    },
    {
        id: 3,
        level: 'facil',
        type: 'multiple',
        question: '¿Por qué la ley de los Diez Mandamientos no se puede cambiar?',
        options: ['Porque Moisés la escribió en piedra', 'Porque es una expresión del carácter de Dios', 'Porque es muy antigua', 'Porque es la ley de Israel'],
        correct: 1,
        explanation: 'La ley expresa el carácter inmutable de Dios.'
    },
    {
        id: 4,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué dijo Dios acerca de Abraham en Génesis 26:5?',
        options: ['Ofreció a su hijo Isaac', 'Oyó mi voz y guardó mis mandamientos', 'Construyó un altar', 'Dejó su tierra'],
        correct: 1,
        explanation: 'Abraham guardó los mandamientos de Dios.'
    },
    {
        id: 5,
        level: 'facil',
        type: 'multiple',
        question: 'Según Salmos 105:8-11, ¿con quiénes hizo Dios un pacto sempiterno?',
        options: ['Con Moisés y Aarón', 'Con Abraham, Isaac, Jacob y los hijos de Israel', 'Con David y Salomón', 'Con Noé y su familia'],
        correct: 1,
        explanation: 'El pacto fue con Abraham, Isaac, Jacob e Israel.'
    },
    {
        id: 6,
        level: 'facil',
        type: 'multiple',
        question: '¿Cómo mostraban su fe los miembros de la iglesia del Antiguo Testamento?',
        options: ['Con peregrinaciones', 'Con sacrificios', 'Con ayunos', 'Con ofrendas de oro'],
        correct: 1,
        explanation: 'Mediante sacrificios que simbolizaban al Cordero de Dios.'
    },
    {
        id: 7,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer escritor usado por Dios para dejar instrucciones permanentes?',
        options: ['Abraham', 'Moisés', 'Isaías', 'David'],
        correct: 1,
        explanation: 'Moisés fue el primer escritor inspirado.'
    },
    {
        id: 8,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuándo se leían las Escrituras en el Antiguo Testamento?',
        options: ['Cada día', 'En el séptimo día sábado', 'Solo en las fiestas', 'Cada mes'],
        correct: 1,
        explanation: 'Se leían en sábado y ocasiones especiales.'
    },
    {
        id: 9,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué dijo Jesús en Mateo 5:17 acerca de la ley?',
        options: ['He venido a abrogar la ley', 'He venido para cumplir', 'La ley terminó conmigo', 'La ley es solo para judíos'],
        correct: 1,
        explanation: 'Jesús vino a cumplir, no a abrogar.'
    },
    {
        id: 10,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué declaró Pablo en Romanos 7:22?',
        options: ['La ley es difícil de guardar', 'Me deleito en la ley de Dios', 'La ley es para los gentiles', 'La ley nos condena'],
        correct: 1,
        explanation: 'Pablo se deleitaba en la ley.'
    },
    {
        id: 11,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién llegó a ser el primer presidente general de la iglesia apostólica?',
        options: ['Pedro', 'Pablo', 'Santiago', 'Juan'],
        correct: 2,
        explanation: 'Santiago fue el primer presidente.'
    },
    {
        id: 12,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el primer mártir cristiano?',
        options: ['Pedro', 'Pablo', 'Esteban', 'Santiago'],
        correct: 2,
        explanation: 'Esteban fue el primer mártir.'
    },
    {
        id: 13,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué evangelista es considerado quizás el más grande de todos los tiempos?',
        options: ['Pedro', 'Pablo', 'Juan', 'Santiago'],
        correct: 1,
        explanation: 'Pablo fue el evangelista más grande.'
    },
    {
        id: 14,
        level: 'facil',
        type: 'multiple',
        question: '¿Cuál de los siguientes NO fue un colaborador de Pablo mencionado en el texto?',
        options: ['Bernabé', 'Silas', 'Juan Marcos', 'Lucas'],
        correct: 3,
        explanation: 'Lucas no está en esa lista.'
    },
    {
        id: 15,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué grupo de creyentes sobresalió entre los que resistieron al poder papal, conservando la fe por mil años?',
        options: ['Los hugonotes', 'Los valdenses', 'Los luteranos', 'Los calvinistas'],
        correct: 1,
        explanation: 'Los valdenses.'
    },
    {
        id: 16,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue llamado "el heraldo de la Reforma" para Inglaterra y toda la cristiandad?',
        options: ['Martín Lutero', 'Juan Calvino', 'Juan Wiclef', 'Juan Huss'],
        correct: 2,
        explanation: 'Juan Wiclef.'
    },
    {
        id: 17,
        level: 'facil',
        type: 'multiple',
        question: '¿Qué reformador checo fue quemado vivo por su fe después de leer los escritos de Wiclef?',
        options: ['Jerónimo', 'Juan Huss', 'Valdenses', 'Juan Knox'],
        correct: 1,
        explanation: 'Juan Huss.'
    },
    {
        id: 18,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fue el compañero de Juan Huss que también fue quemado vivo?',
        options: ['Jerónimo', 'Wiclef', 'Lutero', 'Calvino'],
        correct: 0,
        explanation: 'Jerónimo.'
    },
    {
        id: 19,
        level: 'facil',
        type: 'multiple',
        question: '¿En qué fecha zarparon los peregrinos en el Mayflower?',
        options: ['16 de septiembre de 1620', '21 de noviembre de 1620', '1 de octubre de 1620', '25 de diciembre de 1620'],
        correct: 0,
        explanation: '16 de septiembre de 1620.'
    },
    {
        id: 20,
        level: 'facil',
        type: 'multiple',
        question: '¿Quién fundó la colonia de Rhode Island con libertad religiosa completa?',
        options: ['Juan Knox', 'Roger Williams', 'Guillermo Penn', 'Juan Wesley'],
        correct: 1,
        explanation: 'Roger Williams.'
    },
    {
        id: 21,
        level: 'facil',
        type: 'fill',
        question: 'Los __________ fueron los que más sobresalieron entre los que resistieron al papado.',
        correct: ['valdenses'],
        explanation: 'Valdenses.'
    },
    {
        id: 22,
        level: 'facil',
        type: 'fill',
        question: 'Juan __________ fue el heraldo de la Reforma.',
        correct: ['wiclef'],
        explanation: 'Juan Wiclef.'
    },
    {
        id: 23,
        level: 'facil',
        type: 'fill',
        question: 'Juan __________ fue quemado vivo, como lo fuera también __________, su compañero.',
        correct: ['huss', 'jerónimo'],
        explanation: 'Juan Huss y Jerónimo.'
    },
    {
        id: 24,
        level: 'facil',
        type: 'fill',
        question: 'El 16 de septiembre de __________, los peregrinos se embarcaron en el Mayflower.',
        correct: ['1620'],
        explanation: '1620.'
    },

    // ============================================
    // NIVEL MEDIO - 24 preguntas (IDs 25-48)
    // ============================================
    {
        id: 25,
        level: 'medio',
        type: 'multiple',
        question: '¿Cuál fue la época más negra de persecución para la iglesia primitiva?',
        options: ['50-100 d.C.', '100-300 d.C.', '300-500 d.C.', '500-700 d.C.'],
        correct: 1,
        explanation: '100-300 d.C.'
    },
    {
        id: 26,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año derribaron las tribus bárbaras del norte el imperio romano?',
        options: ['376 d.C.', '410 d.C.', '476 d.C.', '500 d.C.'],
        correct: 2,
        explanation: '476 d.C.'
    },
    {
        id: 27,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué período profético de supremacía papal menciona el texto?',
        options: ['1000 años', '1260 años', '2000 años', '500 años'],
        correct: 1,
        explanation: '1260 años.'
    },
    {
        id: 28,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año comenzó el período de supremacía papal de 1260 años?',
        options: ['476 d.C.', '538 d.C.', '600 d.C.', '800 d.C.'],
        correct: 1,
        explanation: '538 d.C.'
    },
    {
        id: 29,
        level: 'medio',
        type: 'multiple',
        question: '¿En qué año terminó el período de supremacía papal?',
        options: ['1517', '1798', '1844', '1888'],
        correct: 1,
        explanation: '1798.'
    },
    {
        id: 30,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué líder de la iglesia de Roma se convirtió en cabeza general de la iglesia en el año 476?',
        options: ['El Papa', 'El Obispo de Roma', 'El Cardenal', 'El Arzobispo'],
        correct: 1,
        explanation: 'El obispo de Roma.'
    },
    {
        id: 31,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué reformador alemán clavó 95 tesis en Wittenberg el 1 de noviembre de 1517?',
        options: ['Juan Calvino', 'Martín Lutero', 'Felipe Melanchton', 'Ulrico Zuinglio'],
        correct: 1,
        explanation: 'Martín Lutero.'
    },
    {
        id: 32,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué frase famosa dijo Lutero cuando le pidieron que se retractara?',
        options: ['"Solo la fe"', '"Aquí estoy, no puedo hacer otra cosa"', '"Dios me ayude"', '"La Biblia sola"'],
        correct: 1,
        explanation: '"Aquí estoy, no puedo hacer otra cosa".'
    },
    {
        id: 33,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue el amigo íntimo de Lutero que ayudó a escribir la Confesión de Augsburgo?',
        options: ['Juan Calvino', 'Felipe Melanchton', 'Ulrico Zuinglio', 'Juan Knox'],
        correct: 1,
        explanation: 'Felipe Melanchton.'
    },
    {
        id: 34,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué reformador francés fortaleció a los hugonotes?',
        options: ['Martín Lutero', 'Juan Calvino', 'Ulrico Zuinglio', 'Juan Knox'],
        correct: 1,
        explanation: 'Juan Calvino.'
    },
    {
        id: 35,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué reformador escocés conmovió los fundamentos de la apostasía en Escocia?',
        options: ['Juan Knox', 'Juan Calvino', 'Ulrico Zuinglio', 'Juan Wesley'],
        correct: 0,
        explanation: 'Juan Knox.'
    },
    {
        id: 36,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién fue el reformador en Suiza, pastor de la catedral de Zurich?',
        options: ['Juan Calvino', 'Ulrico Zuinglio', 'Felipe Melanchton', 'Juan Knox'],
        correct: 1,
        explanation: 'Ulrico Zuinglio.'
    },
    {
        id: 37,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué traductor dio a Inglaterra la Biblia en su propio idioma?',
        options: ['Juan Wiclef', 'Guillermo Tyndale', 'Juan Knox', 'Juan Wesley'],
        correct: 1,
        explanation: 'Guillermo Tyndale.'
    },
    {
        id: 38,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué reformador posterior llevó las verdades del Evangelio a lugares prominentes?',
        options: ['Juan Knox', 'Juan Calvino', 'Juan Wesley', 'Ulrico Zuinglio'],
        correct: 2,
        explanation: 'Juan Wesley.'
    },
    {
        id: 39,
        level: 'medio',
        type: 'multiple',
        question: '¿Quién es considerado el "padre de las misiones modernas"?',
        options: ['David Livingstone', 'Guillermo Carey', 'Robert Morrison', 'Adoniram Judson'],
        correct: 1,
        explanation: 'Guillermo Carey.'
    },
    {
        id: 40,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué misionero preparó un diccionario inglés-chino y publicó la Biblia?',
        options: ['Guillermo Carey', 'Robert Morrison', 'Adoniram Judson', 'David Livingstone'],
        correct: 1,
        explanation: 'Robert Morrison.'
    },
    {
        id: 41,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué misionero tradujo la Biblia al birmano?',
        options: ['Guillermo Carey', 'Robert Morrison', 'Adoniram Judson', 'David Livingstone'],
        correct: 2,
        explanation: 'Adoniram Judson.'
    },
    {
        id: 42,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué misionero abrió el continente africano al cristianismo?',
        options: ['Robert Moffat', 'David Livingstone', 'John Williams', 'John G. Patón'],
        correct: 1,
        explanation: 'David Livingstone.'
    },
    {
        id: 43,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué misionero trabajó con un vapor llamado "El Mensajero de la Paz"?',
        options: ['John Williams', 'John G. Patón', 'Robert Moffat', 'David Livingstone'],
        correct: 0,
        explanation: 'John Williams.'
    },
    {
        id: 44,
        level: 'medio',
        type: 'multiple',
        question: '¿Qué misionero fue amenazado por caníbales 53 veces?',
        options: ['John Williams', 'John G. Patón', 'Robert Moffat', 'David Livingstone'],
        correct: 1,
        explanation: 'John G. Patón.'
    },
    {
        id: 45,
        level: 'medio',
        type: 'fill',
        question: 'La época más negra de persecución fue entre los años __________ y __________ d.C.',
        correct: ['100', '300'],
        explanation: '100-300 d.C.'
    },
    {
        id: 46,
        level: 'medio',
        type: 'fill',
        question: 'En el año __________, las tribus bárbaras derribaron el imperio romano.',
        correct: ['476'],
        explanation: '476 d.C.'
    },
    {
        id: 47,
        level: 'medio',
        type: 'fill',
        question: 'El período de supremacía papal duró __________ años, desde 538 hasta 1798.',
        correct: ['1260'],
        explanation: '1260 años.'
    },
    {
        id: 48,
        level: 'medio',
        type: 'fill',
        question: 'El padre de las misiones modernas fue __________ __________.',
        correct: ['guillermo', 'carey'],
        explanation: 'Guillermo Carey.'
    },

    // ============================================
    // NIVEL DIFÍCIL - 24 preguntas (IDs 49-72)
    // ============================================
    {
        id: 49,
        level: 'dificil',
        type: 'fill',
        question: 'La iglesia de Dios se extiende de __________ a __________.',
        correct: ['edén', 'edén'],
        explanation: 'De Edén a Edén.'
    },
    {
        id: 50,
        level: 'dificil',
        type: 'fill',
        question: 'La ley de los Diez Mandamientos es una expresión del __________ de Dios.',
        correct: ['carácter'],
        explanation: 'Expresa el carácter de Dios.'
    },
    {
        id: 51,
        level: 'dificil',
        type: 'fill',
        question: 'Dios dijo: "... oyó Abraham mi voz, y guardó mi precepto, mis mandamientos, mis __________ y mis leyes" (Génesis 26:5).',
        correct: ['estatutos'],
        explanation: 'Abraham guardó los estatutos.'
    },
    {
        id: 52,
        level: 'dificil',
        type: 'fill',
        question: 'Los sacrificios eran un símbolo del __________ de Dios que quitaría los pecados del mundo.',
        correct: ['cordero'],
        explanation: 'Simbolizaban al Cordero de Dios.'
    },
    {
        id: 53,
        level: 'dificil',
        type: 'fill',
        question: '__________ fue el primer escritor a quien usó Dios para dejar instrucciones permanentes.',
        correct: ['moisés'],
        explanation: 'Moisés.'
    },
    {
        id: 54,
        level: 'dificil',
        type: 'fill',
        question: 'Las escrituras se leían ante las congregaciones en el séptimo día __________.',
        correct: ['sábado'],
        explanation: 'En sábado.'
    },
    {
        id: 55,
        level: 'dificil',
        type: 'fill',
        question: 'Jesús dijo: "No penséis que he venido para __________ la ley o los profetas".',
        correct: ['abrogar'],
        explanation: 'No vino a abrogar.'
    },
    {
        id: 56,
        level: 'dificil',
        type: 'fill',
        question: 'Pablo declaró: "Porque según el hombre interior, me __________ en la ley de Dios" (Romanos 7:22).',
        correct: ['deleito'],
        explanation: 'Se deleitaba.'
    },
    {
        id: 57,
        level: 'dificil',
        type: 'fill',
        question: '__________ llegó a ser el primer presidente general de la iglesia apostólica.',
        correct: ['santiago'],
        explanation: 'Santiago.'
    },
    {
        id: 58,
        level: 'dificil',
        type: 'fill',
        question: '__________ fue el primer mártir cristiano.',
        correct: ['esteban'],
        explanation: 'Esteban.'
    },
    {
        id: 59,
        level: 'dificil',
        type: 'fill',
        question: 'El 1 de noviembre de __________, Lutero clavó sus 95 tesis en Wittenberg.',
        correct: ['1517'],
        explanation: '1517.'
    },
    {
        id: 60,
        level: 'dificil',
        type: 'fill',
        question: '__________ __________ ayudó a escribir la Confesión de Augsburgo.',
        correct: ['felipe', 'melanchton'],
        explanation: 'Felipe Melanchton.'
    },
    {
        id: 61,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué hermanos tradujeron la Biblia al sueco?',
        options: ['Hermanos Luther', 'Hermanos Petri', 'Hermanos Knox', 'Hermanos Calvin'],
        correct: 1,
        explanation: 'Hermanos Petri.'
    },
    {
        id: 62,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué reformador predicó en Dinamarca?',
        options: ['Juan Tausen', 'Olaus Petri', 'Laurentius Petri', 'Christiern Pedersen'],
        correct: 0,
        explanation: 'Juan Tausen.'
    },
    {
        id: 63,
        level: 'dificil',
        type: 'fill',
        question: 'Los hermanos __________ tradujeron la Biblia al sueco.',
        correct: ['petri'],
        explanation: 'Petri.'
    },
    {
        id: 64,
        level: 'dificil',
        type: 'fill',
        question: 'Juan __________ predicó la reforma en Dinamarca.',
        correct: ['tausen'],
        explanation: 'Juan Tausen.'
    },
    {
        id: 65,
        level: 'dificil',
        type: 'multiple',
        question: '¿Qué profeta, junto con Juan, predijo el período de 1260 años?',
        options: ['Isaías', 'Jeremías', 'Daniel', 'Ezequiel'],
        correct: 2,
        explanation: 'Daniel.'
    },
    {
        id: 66,
        level: 'dificil',
        type: 'multiple',
        question: '¿Quién fue el heraldo del primer advenimiento de Cristo?',
        options: ['Isaías', 'Juan el Bautista', 'Elías', 'Moisés'],
        correct: 1,
        explanation: 'Juan el Bautista.'
    },
    {
        id: 67,
        level: 'dificil',
        type: 'multiple',
        question: 'Según Apocalipsis 12:17, ¿qué característica tiene la iglesia remanente?',
        options: ['Habla en lenguas', 'Guarda los mandamientos de Dios', 'Hace milagros', 'Es rica y poderosa'],
        correct: 1,
        explanation: 'Guarda los mandamientos.'
    },
    {
        id: 68,
        level: 'dificil',
        type: 'fill',
        question: 'La iglesia remanente guarda los __________ de Dios y tiene el __________ de Jesús.',
        correct: ['mandamientos', 'testimonio'],
        explanation: 'Mandamientos y testimonio.'
    },
    {
        id: 69,
        level: 'dificil',
        type: 'fill',
        question: 'El período de supremacía papal terminó en __________ cuando el Papa fue tomado prisionero.',
        correct: ['1798'],
        explanation: '1798.'
    },
    {
        id: 70,
        level: 'dificil',
        type: 'fill',
        question: 'Roger __________ fundó la colonia de Rhode Island.',
        correct: ['williams'],
        explanation: 'Roger Williams.'
    },
    {
        id: 71,
        level: 'dificil',
        type: 'fill',
        question: 'La vida de John G. __________ fue amenazada __________ veces por caníbales.',
        correct: ['patón', '53'],
        explanation: 'Patón, 53 veces.'
    },
    {
        id: 72,
        level: 'dificil',
        type: 'fill',
        question: '__________ __________ fundó la colonia de Rhode Island.',
        correct: ['roger', 'williams'],
        explanation: 'Roger Williams.'
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
        localStorage.setItem(`historiaDenominacional_capitulo1_level_${level}_progress`, JSON.stringify(progress));
        
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
        const saved = localStorage.getItem(`historiaDenominacional_capitulo1_level_${level}_progress`);
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
        const savedUnlocked = localStorage.getItem('historiaDenominacional_capitulo1_unlocked_levels');
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
        localStorage.setItem('historiaDenominacional_capitulo1_unlocked_levels', JSON.stringify({
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '1');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '1');
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '1');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '1';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: La Iglesia Cristiana a Través de las Edades - Nivel ${level}`;
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
        'jerusalén', 'roma', 'sinaí', 'galilea', 'fariseos', 'sacerdotes',
        'levitas', 'escribas', 'herodes', 'pilato', 'caifás', 'ananías',
        'bautismo', 'oración', 'ayuno', 'limosna', 'diezmo', 'ofrenda',
        'templo', 'sinagoga', 'altar', 'incienso', 'pascua', 'pentecostés',
        'apóstoles', 'discípulos', 'evangelistas', 'profetas', 'reyes',
        'valdenses', 'hugonotes', 'luteranos', 'calvinistas', 'wiclef', 'huss',
        'jerónimo', 'lutero', 'calvino', 'knox', 'wesley', 'tyndale',
        'carey', 'morrison', 'judson', 'livingstone', 'williams', 'patón',
        '1620', '1517', '1798', '476', '538', '1260', '1844'
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
// RESULTADOS FINALES CON BOTONES CORREGIDOS
// ============================================
function showFinalResults() {
    // Ocultar elementos del juego
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
            // Completar capítulo
            audioManager.play('complete');
            showConfetti();
            levelMessage = `👑 ¡Nivel Difícil Dominado! ¡Has completado el Capítulo 1! 👑 (${percentage}%)`;
            // Mostrar botón de siguiente capítulo
            showNextChapterBtn = true;
            nextChapterNumber = 2;
        }
        
        // Actualizar botones de nivel
        updateLevelButtons();
        
    } else if (allQuestionsAnswered && percentage < REQUIRED_PERCENTAGE) {
        levelMessage = `⚠️ Necesitas ${REQUIRED_PERCENTAGE}% para desbloquear el siguiente nivel. Obtuviste ${percentage}% ⚠️`;
    } else {
        levelMessage = `📖 Completa todas las preguntas para desbloquear el siguiente nivel (requiere ${REQUIRED_PERCENTAGE}%)`;
    }
    
    // Mensaje según porcentaje
    if (percentage >= 90) message = '¡Excelente! Eres un experto en Historia Denominacional.';
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
            <h2>🎉 ${currentLevel === 'dificil' && levelCompleted ? '¡CAPÍTULO 1 COMPLETADO!' : '¡NIVEL COMPLETADO!'} 🎉</h2>
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
    
    const chapterNumber = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '1');
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
        
        const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '1';
        if (domElements.chapterTitle) {
            domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: La Iglesia Cristiana a Través de las Edades - Nivel ${level}`;
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
    const currentChapter = parseInt(localStorage.getItem('historiaDenominacional_currentChapter') || '1');
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
    console.log('Capítulo 1 - Iniciando...');
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
    
    const chapterNumber = localStorage.getItem('historiaDenominacional_currentChapter') || '1';
    if (domElements.chapterTitle) {
        domElements.chapterTitle.textContent = `Capítulo ${chapterNumber}: La Iglesia Cristiana a Través de las Edades - Nivel ${currentLevel}`;
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
