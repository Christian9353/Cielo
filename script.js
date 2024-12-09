const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

const userNameInput = document.getElementById('userName');
const gradeSelect = document.getElementById('grade');
const subjectSelect = document.createElement('select');

const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const resultSummary = document.getElementById('result-summary');


const questionsData = {
    "1": {
        "Matemáticas": [
            {
                question: "¿Cuánto es 1 + 1?",
                options: ["1", "2", "3", "4"],
                correct: "2"
            },
            {
                question: "¿Cuál número es mayor?",
                options: ["5", "3", "1", "0"],
                correct: "5"
            },
            {
                question: "¿Qué forma tiene una pelota de fútbol?",
                options: ["Cuadrada", "Triangular", "Redonda", "Rectangular"],
                correct: "Redonda"
            },
            {
                question: "¿Cuántos lados tiene un triángulo?",
                options: ["2", "3", "4", "5"],
                correct: "3"
            },
            {
                question: "¿Cuánto es 5 - 2?",
                options: ["1", "4", "3", "2"],
                correct: "3"
            },
            {
                question: "¿Cuál es el número que sigue después del 9?",
                options: ["8", "10", "11", "12"],
                correct: "10"
            },
            {
                question: "¿Cuánto es 3 + 4?",
                options: ["6", "7", "8", "9"],
                correct: "7"
            },
            {
                question: "¿Cuál de estos números es par?",
                options: ["1", "2", "3", "5"],
                correct: "2"
            },
            {
                question: "¿Cuántos lados tiene un cuadrado?",
                options: ["3", "4", "5", "6"],
                correct: "4"
            },
            {
                question: "Si tienes 5 manzanas y das 2, ¿cuántas te quedan?",
                options: ["1", "2", "3", "4"],
                correct: "3"
            },


        ],
        "Comunicación": [
            {
                question: "¿Cuál de estas palabras es una vocal?",
                options: ["B", "C", "A", "Z"],
                correct: "A"
            },
            {
                question: "¿Cuál de las siguientes es una palabra?",
                options: ["Rojo", "XYZ", "123", "9A9"],
                correct: "Rojo"
            },
            {
                question: "¿Cuál es el plural de 'gato'?",
                options: ["Gatos", "Gatitos", "Gatones", "Gatónes"],
                correct: "Gatos"
            },
            {
                question: "¿Qué sonido hace la letra 'S'?",
                options: ["/B/", "/S/", "/M/", "/T/"],
                correct: "/S/"
            },
            {
                question: "¿Cuál es una letra?",
                options: ["3", "G", "+", "&"],
                correct: "G"
            }
        ],
        "Ciencia y Ambiente": [
            {
                question: "¿Qué parte del cuerpo usamos para oler?",
                options: ["Ojos", "Nariz", "Boca", "Manos"],
                correct: "Nariz"
            },
            {
                question: "¿De qué están hechas las nubes?",
                options: ["Algodón", "Agua", "Polvo", "Fuego"],
                correct: "Agua"
            },
            {
                question: "¿Cuál de estos animales vive en el agua?",
                options: ["Pez", "Gato", "León", "Conejo"],
                correct: "Pez"
            },
            {
                question: "¿Qué necesita una planta para crecer?",
                options: ["Luz solar", "Juguetes", "Cama", "Televisión"],
                correct: "Luz solar"
            },
            {
                question: "¿Qué es más grande, el sol o la luna?",
                options: ["Sol", "Luna", "Ambos", "Ninguno"],
                correct: "Sol"
            }
        ],
        "Personal Social": [
            {
                question: "¿Qué debemos decir cuando pedimos algo?",
                options: ["Por favor", "Gracias", "De nada", "Hola"],
                correct: "Por favor"
            },
            {
                question: "¿Qué debemos hacer antes de cruzar la calle?",
                options: ["Correr rápido", "Mirar a ambos lados", "Saltar", "Cerrar los ojos"],
                correct: "Mirar a ambos lados"
            },
            {
                question: "¿Cuál es el nombre del país en que vivimos?",
                options: ["Perú", "España", "Francia", "Brasil"],
                correct: "Perú"
            },
            {
                question: "¿Qué debemos hacer cuando alguien nos habla?",
                options: ["Ignorar", "Escuchar", "Gritar", "Reír"],
                correct: "Escuchar"
            },
            {
                question: "¿Qué es importante para vivir en paz con los demás?",
                options: ["Compartir", "Gritar", "Correr", "Llorar"],
                correct: "Compartir"
            }
        ],
        "Educación Religiosa": [
            {
                question: "¿Quién creó el mundo según la religión cristiana?",
                options: ["Dios", "Los hombres", "Los animales", "Las estrellas"],
                correct: "Dios"
            },
            {
                question: "¿Qué hacemos cuando rezamos?",
                options: ["Dormimos", "Hablamos con Dios", "Comemos", "Jugamos"],
                correct: "Hablamos con Dios"
            },
            {
                question: "¿Cómo se llama el libro sagrado de los cristianos?",
                options: ["La Biblia", "El Corán", "El libro de historia", "El diccionario"],
                correct: "La Biblia"
            },
            {
                question: "¿Qué día celebramos el nacimiento de Jesús?",
                options: ["Navidad", "Año Nuevo", "Pascua", "Halloween"],
                correct: "Navidad"
            },
            {
                question: "¿Qué nos enseña Jesús sobre los demás?",
                options: ["Amar", "Gritar", "Ignorar", "Pelear"],
                correct: "Amar"
            }
        ],
        "Arte y Cultura": [
            {
                question: "¿Con qué pintamos en una hoja de papel?",
                options: ["Lápices de color", "Cucharas", "Pelotas", "Pinceles"],
                correct: "Lápices de color"
            },
            {
                question: "¿Qué usamos para hacer una escultura?",
                options: ["Arena", "Plástico", "Papel", "Arcilla"],
                correct: "Arcilla"
            },
            {
                question: "¿Qué color se obtiene al mezclar azul y amarillo?",
                options: ["Verde", "Rojo", "Naranja", "Marrón"],
                correct: "Verde"
            },
            {
                question: "¿Cuál de estos es un instrumento musical?",
                options: ["Lápiz", "Guitarra", "Mesa", "Televisor"],
                correct: "Guitarra"
            },
            {
                question: "¿Cómo se llama una canción muy corta y simple?",
                options: ["Poema", "Cuento", "Rima", "Nana"],
                correct: "Nana"
            }
        ],
        "Educación Física": [
            {
                question: "¿Qué parte del cuerpo usamos para correr?",
                options: ["Cabeza", "Pies", "Manos", "Orejas"],
                correct: "Pies"
            },
            {
                question: "¿Qué deporte se juega con una pelota y un arco?",
                options: ["Natación", "Fútbol", "Básquet", "Ajedrez"],
                correct: "Fútbol"
            },
            {
                question: "¿Qué hacemos antes de hacer ejercicio para evitar lesiones?",
                options: ["Saltar", "Estirarnos", "Comer", "Dormir"],
                correct: "Estirarnos"
            },
            {
                question: "¿Qué necesitamos para nadar?",
                options: ["Bicicleta", "Casco", "Agua", "Balón"],
                correct: "Agua"
            },
            {
                question: "¿Qué deporte se juega con una raqueta?",
                options: ["Tenis", "Fútbol", "Rugby", "Natación"],
                correct: "Tenis"
            }
        ],
        "Inglés": [
            {
                question: "¿Cómo se dice 'gato' en inglés?",
                options: ["Dog", "Bird", "Cat", "Fish"],
                correct: "Cat"
            },
            {
                question: "¿Cómo se dice 'rojo' en inglés?",
                options: ["Red", "Blue", "Green", "Yellow"],
                correct: "Red"
            },
            {
                question: "¿Cuál es el plural de 'apple'?",
                options: ["Apples", "Applis", "Applos", "Applux"],
                correct: "Apples"
            },
            {
                question: "¿Cómo se dice 'adiós' en inglés?",
                options: ["Bye", "Hello", "Thanks", "Please"],
                correct: "Bye"
            },
            {
                question: "¿Cómo se dice 'libro' en inglés?",
                options: ["Pen", "Table", "Book", "Chair"],
                correct: "Book"
            }
        ]
    },

    "2": {
     "Matemáticas": [
            {
                question: "¿Cuánto es 15 + 7?",
                options: ["22", "23", "20", "21"],
                correct: "22"
            },
            {
                question: "¿Cuál es el número que sigue después de 49?",
                options: ["50", "51", "48", "52"],
                correct: "50"
            },
            {
                question: "Si tienes 10 manzanas y das 4, ¿cuántas te quedan?",
                options: ["6", "5", "4", "7"],
                correct: "6"
            },
            {
                question: "¿Cuántos lados tiene un triángulo?",
                options: ["2", "3", "4", "5"],
                correct: "3"
            },
            {
                question: "Si tienes 5 soles y compras algo que cuesta 3 soles, ¿cuánto dinero te queda?",
                options: ["2 soles", "3 soles", "4 soles", "1 sol"],
                correct: "2 soles"
            }
        ],
        "Comunicación": [
            {
                question: "¿Qué palabra es un sustantivo?",
                options: ["Correr", "Perro", "Alto", "Rápido"],
                correct: "Perro"
            },
            {
                question: "¿Qué palabra rima con 'flor'?",
                options: ["Corazón", "Amor", "Luna", "Gato"],
                correct: "Amor"
            },
            {
                question: "¿Cuál es el plural de 'niño'?",
                options: ["Niñas", "Niño", "Niños", "Niñes"],
                correct: "Niños"
            },
            {
                question: "¿Cómo se llama el lugar donde vivimos?",
                options: ["Casa", "Mesa", "Libro", "Gato"],
                correct: "Casa"
            },
            {
                question: "¿Qué palabra empieza con la letra 'M'?",
                options: ["Casa", "Gato", "Mesa", "Silla"],
                correct: "Mesa"
            }
        ],
        "Ciencia y Ambiente": [
            {
                question: "¿Qué animal vive en el mar?",
                options: ["Pez", "Gato", "Perro", "Elefante"],
                correct: "Pez"
            },
            {
                question: "¿Qué necesitamos para respirar?",
                options: ["Agua", "Comida", "Oxígeno", "Leche"],
                correct: "Oxígeno"
            },
            {
                question: "¿Qué parte del cuerpo nos ayuda a caminar?",
                options: ["Manos", "Piernas", "Ojos", "Nariz"],
                correct: "Piernas"
            },
            {
                question: "¿Qué parte de la planta absorbe el agua?",
                options: ["Las hojas", "El tallo", "Las raíces", "Las flores"],
                correct: "Las raíces"
            },
            {
                question: "¿Qué necesitamos para que una planta crezca?",
                options: ["Ropa", "Luz y agua", "Juguetes", "Comida"],
                correct: "Luz y agua"
            }
        ],
        "Personal Social": [
            {
                question: "¿Qué debemos hacer cuando alguien nos ayuda?",
                options: ["Gritar", "Decir gracias", "Reír", "Llorar"],
                correct: "Decir gracias"
            },
            {
                question: "¿Qué hacemos para convivir en paz con los demás?",
                options: ["Compartir", "Pelear", "Gritar", "Correr"],
                correct: "Compartir"
            },
            {
                question: "¿Qué colores tiene la bandera de Perú?",
                options: ["Rojo y blanco", "Azul y blanco", "Verde y amarillo", "Rojo y negro"],
                correct: "Rojo y blanco"
            },
            {
                question: "¿Cómo se llama el lugar donde aprendemos?",
                options: ["Parque", "Escuela", "Teatro", "Tienda"],
                correct: "Escuela"
            },
            {
                question: "¿Qué debemos hacer cuando cruzamos la calle?",
                options: ["Correr rápido", "Mirar a ambos lados", "Saltar", "Dormir"],
                correct: "Mirar a ambos lados"
            }
        ],
        "Educación Religiosa": [
            {
                question: "¿Quién creó a los seres humanos según la religión cristiana?",
                options: ["Los animales", "Dios", "El sol", "Las estrellas"],
                correct: "Dios"
            },
            {
                question: "¿Qué debemos hacer para llevarnos bien con los demás según la religión cristiana?",
                options: ["Amar y respetar", "Gritar", "Luchar", "Dormir"],
                correct: "Amar y respetar"
            },
            {
                question: "¿Cómo se llama el hijo de Dios según la religión cristiana?",
                options: ["Moisés", "Jesús", "Pedro", "Abraham"],
                correct: "Jesús"
            },
            {
                question: "¿Qué celebramos en Navidad?",
                options: ["El nacimiento de Jesús", "El año nuevo", "La creación del mundo", "La Semana Santa"],
                correct: "El nacimiento de Jesús"
            },
            {
                question: "¿Qué libro es importante para los cristianos?",
                options: ["El Corán", "La Biblia", "El diccionario", "La enciclopedia"],
                correct: "La Biblia"
            }
        ],
        "Arte y Cultura": [
            {
                question: "¿Con qué podemos pintar en un papel?",
                options: ["Cucharas", "Lápices de colores", "Juguetes", "Pelotas"],
                correct: "Lápices de colores"
            },
            {
                question: "¿Qué usamos para hacer una escultura?",
                options: ["Arcilla", "Papel", "Lápiz", "Tijeras"],
                correct: "Arcilla"
            },
            {
                question: "¿Qué instrumento musical tiene cuerdas?",
                options: ["Tambor", "Guitarra", "Flauta", "Trompeta"],
                correct: "Guitarra"
            },
            {
                question: "¿Cuál de estos colores es primario?",
                options: ["Verde", "Rojo", "Naranja", "Marrón"],
                correct: "Rojo"
            },
            {
                question: "¿Qué hacemos cuando escuchamos música?",
                options: ["Dormimos", "Dibujamos", "Bailamos", "Cocinamos"],
                correct: "Bailamos"
            }
        ],
        "Educación Física": [
            {
                question: "¿Qué deporte se juega con una pelota grande y se golpea con las manos?",
                options: ["Básquet", "Vóley", "Fútbol", "Natación"],
                correct: "Vóley"
            },
            {
                question: "¿Qué parte del cuerpo usamos para saltar?",
                options: ["Manos", "Cabeza", "Pies", "Ojos"],
                correct: "Pies"
            },
            {
                question: "¿Qué hacemos antes de jugar para evitar lastimarnos?",
                options: ["Dormir", "Estirarnos", "Comer", "Correr"],
                correct: "Estirarnos"
            },
            {
                question: "¿Qué deporte se practica en una piscina?",
                options: ["Correr", "Natación", "Tenis", "Fútbol"],
                correct: "Natación"
            },
            {
                question: "¿Con qué jugamos al fútbol?",
                options: ["Con una raqueta", "Con una pelota", "Con un libro", "Con una cuerda"],
                correct: "Con una pelota"
            }
        ],
        "Inglés": [
            {
                question: "¿Cómo se dice 'perro' en inglés?",
                options: ["Cat", "Dog", "Bird", "Fish"],
                correct: "Dog"
            },
            {
                question: "¿Cómo se dice 'verde' en inglés?",
                options: ["Green", "Red", "Blue", "Yellow"],
                correct: "Green"
            },
            {
                question: "¿Cómo se dice 'hola' en inglés?",
                options: ["Goodbye", "Please", "Hello", "Thanks"],
                correct: "Hello"
            },
            {
                question: "¿Cómo se dice 'gracias' en inglés?",
                options: ["Please", "Sorry", "Goodbye", "Thanks"],
                correct: "Thanks"
            },
            {
                question: "¿Cómo se dice 'libro' en inglés?",
                options: ["Chair", "Book", "Table", "Pen"],
                correct: "Book"
            }
        ]
    },
    "3":{
"matematicas": [
        {
            question: "¿Cuánto es 56 + 34?",
            options: ["80", "90", "70", "100"],
            correct: "90"
        },
        {
            question: "Si tienes 45 caramelos y regalas 17, ¿cuántos te quedan?",
            options: ["28", "30", "32", "25"],
            correct: "28"
        },
        {
            question: "¿Cuál es el doble de 15?",
            options: ["25", "30", "35", "20"],
            correct: "30"
        },
        {
            question: "¿Qué número es menor que 72?",
            options: ["60", "80", "90", "100"],
            correct: "60"
        },
        {
            question: "¿Cuántos lados tiene un hexágono?",
            options: ["5", "6", "7", "8"],
            correct: "6"
        }
    ],
    "Comunicacion": [
        {
            question: "¿Qué palabra es un adjetivo?",
            options: ["Correr", "Alegre", "Casa", "Saltar"],
            correct: "Alegre"
        },
        {
            question: "¿Qué tipo de palabra es 'mesa'?",
            options: ["Sustantivo", "Verbo", "Adjetivo", "Pronombre"],
            correct: "Sustantivo"
        },
        {
            question: "¿Cuál de las siguientes palabras es una acción?",
            options: ["Gato", "Saltar", "Amarillo", "Hermoso"],
            correct: "Saltar"
        },
        {
            question: "¿Qué tipo de texto nos enseña cómo hacer algo?",
            options: ["Cuento", "Manual de instrucciones", "Poema", "Carta"],
            correct: "Manual de instrucciones"
        },
        {
            question: "¿Qué signo usamos al final de una pregunta?",
            options: [". (Punto)", "! (Signo de exclamación)", ", (Coma)", "? (Signo de interrogación)"],
            correct: "? (Signo de interrogación)"
        }
    ],
    "Ciencia y Ambiente": [
        {
            question: "¿Qué parte de la planta se encarga de producir semillas?",
            options: ["Las raíces", "El tallo", "Las flores", "Las hojas"],
            correct: "Las flores"
        },
        {
            question: "¿Qué necesitamos para que una planta crezca saludable?",
            options: ["Luz, agua y aire", "Juguetes", "Tierra seca", "Cama"],
            correct: "Luz, agua y aire"
        },
        {
            question: "¿Qué animal es un mamífero?",
            options: ["Tiburón", "León", "Loro", "Pez"],
            correct: "León"
        },
        {
            question: "¿Qué parte del cuerpo nos ayuda a ver?",
            options: ["Las manos", "Los ojos", "Las orejas", "La boca"],
            correct: "Los ojos"
        },
        {
            question: "¿Cómo se llama el ciclo en el que el agua sube como vapor y baja en forma de lluvia?",
            options: ["Ciclo del viento", "Ciclo del agua", "Ciclo de la tierra", "Ciclo del sol"],
            correct: "Ciclo del agua"
        }
    ],
    "Personal Social": [
        {
            question: "¿Qué debemos hacer antes de tomar una decisión importante?",
            options: ["Gritar", "Pensar bien", "Ignorar", "Correr"],
            correct: "Pensar bien"
        },
        {
            question: "¿Cómo se llama el presidente del Perú?",
            options: ["Ministro", "Gobernador", "Alcalde", "Presidente"],
            correct: "Presidente"
        },
        {
            question: "¿Qué debemos hacer cuando alguien nos habla?",
            options: ["Escuchar con atención", "Cantar", "Ignorar", "Gritar"],
            correct: "Escuchar con atención"
        },
        {
            question: "¿Qué es una comunidad?",
            options: ["Un grupo de personas que viven juntas", "Una persona sola", "Un animal salvaje", "Un grupo de juguetes"],
            correct: "Un grupo de personas que viven juntas"
        },
        {
            question: "¿Qué debemos hacer para cuidar el medio ambiente?",
            options: ["Tirar basura en las calles", "Reciclar y cuidar los recursos", "Dejar las luces encendidas", "Gritar mucho"],
            correct: "Reciclar y cuidar los recursos"
        }
    ],
    "Educacion Religiosa": [
        {
            question: "¿Qué significa la palabra 'Dios' en la religión cristiana?",
            options: ["Un superhéroe", "El creador del universo", "Una estrella", "Una montaña"],
            correct: "El creador del universo"
        },
        {
            question: "¿Quién es Jesús según la religión cristiana?",
            options: ["Un rey", "Un profeta", "El hijo de Dios", "Un ángel"],
            correct: "El hijo de Dios2"
        },
        {
            question: "¿Qué nos enseña la religión sobre cómo tratar a los demás?",
            options: ["Con respeto y amor", "Con enojo", "Con miedo", "Con desprecio"],
            correct: "Con respeto y amor"
        },
        {
            question: "¿Qué día se celebra la resurrección de Jesús?",
            options: ["Navidad", "Año Nuevo", "Semana Santa", "Pascua"],
            correct: "Pascua"
        },
        {
            question: "¿Cuál es uno de los 10 Mandamientos?",
            options: ["No robarás", "No comerás postre", "Dormirás mucho", "No correrás en la casa"],
            correct: "No robarás"
        }
    ],
    "Arte Y Cultura": [
        {
            question: "¿Qué color se obtiene al mezclar rojo y azul?",
            options: ["Verde", "Morado", "Amarillo", "Marrón"],
            correct: "Morado"
        },
        {
            question: "¿Cuál de estos es un instrumento de percusión?",
            options: ["Piano", "Flauta", "Tambor", "Violín"],
            correct: "Tambor"
        },
        {
            question: "¿Qué forma tiene un círculo?",
            options: ["Rectángulo", "Redonda", "Cuadrada", "Triangular"],
            correct: "Redonda"
        },
        {
            question: "¿Qué necesitamos para pintar un cuadro?",
            options: ["Pincel y pinturas", "Juguetes", "Pelotas", "Libros"],
            correct: "Pincel y pinturas"
        },
        {
            question: "¿Qué hacemos cuando cantamos?",
            options: ["Dibujamos", "Usamos nuestra voz", "Corremos", "Comemos"],
            correct: "Usamos nuestra voz"
        }
    ],
    "Educacion Fisica": [
        {
            question: "¿Qué deporte se juega con una raqueta?",
            options: ["Tenis", "Fútbol", "Natación", "Básquet"],
            correct: "Tenis"
        },
        {
            question: "¿Qué debemos hacer antes de jugar para evitar lesiones?",
            options: ["Estirarnos", "Correr", "Comer", "Dormir"],
            correct: "Estirarnos"
        },
        {
            question: "¿Qué deporte se practica en el agua?",
            options: ["Correr", "Natación", "Ciclismo", "Fútbol"],
            correct: "Natación"
        },
        {
            question: "¿Qué parte del cuerpo usamos para correr?",
            options: ["Manos", "Ojos", "Pies", "Nariz"],
            correct: "Pies"
        },
        {
            question: "¿Qué deporte se juega con una pelota y canastas?",
            options: ["Básquet", "Fútbol", "Vóley", "Tenis"],
            correct: "Básquet"
        }
    ],
    "Ingles": [
        {
            question: "¿Cómo se dice 'manzana' en inglés?",
            options: ["Apple", "Orange", "Grape", "Pear"],
            correct: "Apple"
        },
        {
            question: "¿Cómo se dice 'azul' en inglés?",
            options: ["Red", "Yellow", "Blue", "Green"],
            correct: "Blue"
        },
        {
            question: "¿Cómo se dice 'escuela' en inglés?",
            options: ["School", "Book", "Teacher", "Pencil"],
            correct: "School"
        },
        {
            question: "¿Cómo se dice 'maestro' en inglés?",
            options: ["Student", "Teacher", "Book", "Chair"],
            correct: "Teacher"
        },
        {
            question: "¿Cómo se dice 'amigo' en inglés?",
            options: ["Friend", "Mother", "Chair", "House"],
            correct: "Friend"
        }
    ]
},
    
    "4":{
        matematicas: [
            {
              question: "¿Cuánto es 125 - 68?",
              options: ["57", "67", "59", "62"],
              correct: "57"
            },
            {
              question: "¿Cuál es el resultado de 9 x 6?",
              options: ["54", "63", "49", "72"],
              correct: "54"
            },
            {
              question: "¿Cuánto es 144 ÷ 12?",
              options: ["10", "11", "12", "13"],
              correct: "12"
            },
            {
              question: "Si un triángulo tiene un lado de 5 cm, otro de 7 cm y otro de 10 cm, ¿cuál es su perímetro?",
              options: ["20 cm", "22 cm", "24 cm", "25 cm"],
              correct: "22 cm"
            },
            {
              question: "¿Cuántos grados hay en un ángulo recto?",
              options: ["90 grados", "180 grados", "360 grados", "45 grados"],
              correct: "90 grados"
            }
          ],
          comunicacion: [
            {
              question: "¿Cuál es el verbo en la siguiente oración: 'El perro corre rápido'?",
              options: ["Perro", "Corre", "Rápido", "El"],
              correct: "Corre"
            },
            {
              question: "¿Qué tipo de texto es una narración?",
              options: ["Informativo", "Descriptivo", "Relato de una historia", "Poético"],
              correct: "Relato de una historia"
            },
            {
              question: "¿Qué es un sinónimo de 'feliz'?",
              options: ["Triste", "Alegre", "Enojado", "Cansado"],
              correct: "Alegre"
            },
            {
              question: "¿Cómo se llama el personaje principal de una historia?",
              options: ["Antagonista", "Protagonista", "Narrador", "Espectador"],
              correct: "Protagonista"
            },
            {
              question: "¿Qué se utiliza para dar más información en una oración?",
              options: ["Verbo", "Sujeto", "Adjetivo", "Pronombre"],
              correct: "Adjetivo"
            }
          ],
          cienciaYAmbiente: [
            {
              question: "¿Qué órgano del cuerpo humano bombea sangre?",
              options: ["Pulmones", "Estómago", "Corazón", "Hígado"],
              correct: "Corazón"
            },
            {
              question: "¿Qué tipo de animal pone huevos?",
              options: ["Mamífero", "Reptil", "Ave", "Tanto B como C"],
              correct: "Tanto B como C"
            },
            {
              question: "¿Qué proceso realizan las plantas para producir su alimento?",
              options: ["Fotosíntesis", "Respiración", "Digestión", "Evaporación"],
              correct: "Fotosíntesis"
            },
            {
              question: "¿Cuál es la función de las raíces de las plantas?",
              options: ["Producir flores", "Absorber agua y nutrientes", "Hacer fotosíntesis", "Proteger el tallo"],
              correct: "Absorber agua y nutrientes"
            },
            {
              question: "¿Qué tipo de energía proviene del sol?",
              options: ["Energía solar", "Energía térmica", "Energía eólica", "Energía hidráulica"],
              correct: "Energía solar"
            }
          ],
          personalSocial: [
            {
              question: "¿Qué es el respeto?",
              options: ["Ignorar a los demás", "Valorar las opiniones y sentimientos de otros", "Gritar", "Pelear"],
              correct: "Valorar las opiniones y sentimientos de otros"
            },
            {
              question: "¿Cuál es una responsabilidad que tenemos en casa?",
              options: ["Jugar todo el día", "Ayudar con los quehaceres", "Romper cosas", "Ignorar a la familia"],
              correct: "Ayudar con los quehaceres"
            },
            {
              question: "¿Qué significa ser solidario?",
              options: ["Hacer todo por uno mismo", "Ayudar a los demás", "Ignorar a los amigos", "No compartir"],
              correct: "Ayudar a los demás"
            },
            {
              question: "¿Qué es una tradición?",
              options: ["Algo nuevo", "Algo que se repite a lo largo del tiempo", "Un objeto", "Un tipo de comida"],
              correct: "Algo que se repite a lo largo del tiempo"
            },
            {
              question: "¿Qué debemos hacer en caso de emergencia?",
              options: ["Mantener la calma y buscar ayuda", "Correr sin rumbo", "Ignorar la situación", "Gritar mucho"],
              correct: "Mantener la calma y buscar ayuda"
            }
          ],
          educacionReligiosa: [
            {
              question: "¿Qué significa 'oración' en la religión?",
              options: ["Un cuento", "Una conversación con Dios", "Un juego", "Una historia de terror"],
              correct: "Una conversación con Dios"
            },
            {
              question: "¿Qué celebramos en la Semana Santa?",
              options: ["La Navidad", "La Pascua", "La resurrección de Jesús", "El año nuevo"],
              correct: "La resurrección de Jesús"
            },
            {
              question: "¿Qué es un templo?",
              options: ["Un lugar para jugar", "Un lugar para aprender", "Un lugar sagrado para adorar", "Un lugar para dormir"],
              correct: "Un lugar sagrado para adorar"
            },
            {
              question: "¿Cuál es uno de los mandamientos?",
              options: ["No comer dulces", "Amarás a tu prójimo como a ti mismo", "Siempre llegar tarde", "No compartir"],
              correct: "Amarás a tu prójimo como a ti mismo"
            },
            {
              question: "¿Quién fue Moisés?",
              options: ["Un rey", "Un profeta en la Biblia", "Un guerrero", "Un filósofo"],
              correct: "Un profeta en la Biblia"
            }
          ],
          arteYCultura: [
            {
              question: "¿Qué técnica se usa para hacer una pintura al óleo?",
              options: ["Con acuarela", "Con lápices", "Con pinturas a base de aceite", "Con tiza"],
              correct: "Con pinturas a base de aceite"
            },
            {
              question: "¿Qué es un museo?",
              options: ["Un lugar para comer", "Un lugar para guardar ropa", "Un lugar donde se exhiben obras de arte y objetos históricos", "Un lugar para dormir"],
              correct: "Un lugar donde se exhiben obras de arte y objetos históricos"
            },
            {
              question: "¿Qué instrumento se toca con las manos?",
              options: ["Trompeta", "Piano", "Guitarra", "Flauta"],
              correct: "Guitarra"
            },
            {
              question: "¿Qué tipo de danza es el ballet?",
              options: ["Danza popular", "Danza clásica", "Danza moderna", "Danza folclórica"],
              correct: "Danza clásica"
            },
            {
              question: "¿Qué es la literatura?",
              options: ["Un tipo de comida", "La escritura de cuentos, poemas y novelas", "Un tipo de deporte", "Un tipo de pintura"],
              correct: "La escritura de cuentos, poemas y novelas"
            }
          ],
          educacionFisica: [
            {
              question: "¿Cuál es un ejercicio de calentamiento?",
              options: ["Saltar la cuerda", "Hacer estiramientos", "Correr en una maratón", "Jugar al fútbol"],
              correct: "Hacer estiramientos"
            },
            {
              question: "¿Qué equipo necesitamos para jugar al baloncesto?",
              options: ["Pelota y canasta", "Pelota y raqueta", "Balón y red", "Pelota y meta"],
              correct: "Pelota y canasta"
            },
            {
              question: "¿Qué es importante hacer después de hacer ejercicio?",
              options: ["Comer mucho", "Descansar y hidratarse", "Dormir", "Ignorar el cansancio"],
              correct: "Descansar y hidratarse"
            },
            {
              question: "¿Qué deporte se juega en una cancha con una red en el medio?",
              options: ["Fútbol", "Vóley", "Natación", "Atletismo"],
              correct: "Vóley"
            },
            {
              question: "¿Qué parte del cuerpo se fortalece al hacer abdominales?",
              options: ["Brazos", "Espalda", "Abdomen", "Piernas"],
              correct: "Abdomen"
            }
          ],
          ingles: [
            {
              question: "¿Cómo se dice 'perro' en inglés?",
              options: ["Cat", "Dog", "Bird", "Fish"],
              correct: "Dog"
            },
            {
              question: "¿Cómo se dice 'gracias' en inglés?",
              options: ["Please", "Hello", "Thank you", "Goodbye"],
              correct: "Thank you"
            },
            {
              question: "¿Qué significa 'apple'?",
              options: ["Pera", "Manzana", "Plátano", "Naranja"],
              correct: "Manzana"
            }
          ]
        },
       "5": {
        "Matematicas": [
            {
                question: "¿Cuánto es 256 + 478?",
                options: ["724", "734", "748", "764"],
                correct: "734"
            },
            {
                question: "¿Cuál es el área de un rectángulo con base de 8 cm y altura de 5 cm?",
                options: ["40 cm²", "30 cm²", "50 cm²", "60 cm²"],
                correct: "40 cm²"
            },
            {
                question: "Si un tren sale de una ciudad a las 3:00 p.m. y llega a las 5:30 p.m., ¿cuánto tiempo viajó?",
                options: ["2 horas", "2 horas y 30 minutos", "3 horas", "3 horas y 30 minutos"],
                correct: "2 horas y 30 minutos"
            },
            {
                question: "¿Cuántos lados tiene un hexágono?",
                options: ["5", "6", "7", "8"],
                correct: "6"
            },
            {
                question: "¿Qué fracción es equivalente a 0.25?",
                options: ["1/2", "1/4", "3/4", "2/5"],
                correct: "1/4"
            }
        ],
        "Comunicacion": [
            {
                question: "¿Qué tipo de texto es una carta?",
                options: ["Narrativo", "Descriptivo", "Expositivo", "Argumentativo"],
                correct: "Narrativo"
            },
            {
                question: "¿Cuál es el sinónimo de 'rápido'?",
                options: ["Lento", "Ágil", "Pesado", "Tardo"],
                correct: "Ágil"
            },
            {
                question: "¿Cuál es la función del adjetivo en una oración?",
                options: ["Sustituir al verbo", "Describir al sustantivo", "Indicar la acción", "Unir oraciones"],
                correct: "Describir al sustantivo"
            },
            {
                question: "¿Qué es una fábula?",
                options: ["Un poema", "Un cuento corto con una lección", "Una novela larga", "Un ensayo"],
                correct: "Un cuento corto con una lección"
            },
            {
                question: "¿Cuál es la forma correcta de escribir el plural de 'ratón'?",
                options: ["Ratóns", "Ratones", "Ratoneses", "Ratón"],
                correct: "Ratones"
            }
        ],
        "Ciencia Y Ambiente": [
            {
                question: "¿Cuál es el órgano responsable de la respiración en los seres humanos?",
                options: ["Estómago", "Corazón", "Pulmones", "Hígado"],
                correct: "Pulmones"
            },
            {
                question: "¿Qué tipo de recurso es el agua?",
                options: ["Renovable", "No renovable", "Artificial", "Sintético"],
                correct: "Renovable"
            },
            {
                question: "¿Qué parte de la planta absorbe agua del suelo?",
                options: ["Hojas", "Tallo", "Raíces", "Flores"],
                correct: "Raíces"
            },
            {
                question: "¿Cuál es la función de las hojas en las plantas?",
                options: ["Reproducir", "Absorber agua", "Hacer fotosíntesis", "Proteger el tallo"],
                correct: "Hacer fotosíntesis"
            },
            {
                question: "¿Qué es un ecosistema?",
                options: ["Un grupo de personas", "Un lugar donde viven las plantas y los animales", "Una casa", "Un tipo de planta"],
                correct: "Un lugar donde viven las plantas y los animales"
            }
        ],
        "PersonalSocial": [
            {
                question: "¿Qué es la convivencia?",
                options: ["Vivir solo", "Compartir y respetar a los demás", "Ignorar a las personas", "Solo estar en casa"],
                correct: "Compartir y respetar a los demás"
            },
            {
                question: "¿Cuál es un derecho fundamental de los niños?",
                options: ["No estudiar", "Jugar todo el tiempo", "Tener acceso a la educación", "No ayudar en casa"],
                correct: "Tener acceso a la educación"
            },
            {
                question: "¿Qué significa 'solidaridad'?",
                options: ["Ser egoísta", "Ayudar a los demás en momentos difíciles", "Ignorar los problemas ajenos", "No participar en actividades"],
                correct: "Ayudar a los demás en momentos difíciles"
            },
            {
                question: "¿Qué es un conflicto?",
                options: ["Una situación de paz", "Un desacuerdo o problema entre personas", "Un juego", "Un tipo de comida"],
                correct: "Un desacuerdo o problema entre personas"
            },
            {
                question: "¿Qué es la empatía?",
                options: ["La capacidad de entender y sentir lo que otros sienten", "Ignorar a los demás", "Jugar solo", "No preocuparse por los demás"],
                correct: "La capacidad de entender y sentir lo que otros sienten"
            }
        ],
        "EducacionReligiosa": [
            {
                question: "¿Qué es un profeta en la religión?",
                options: ["Una persona que pinta", "Una persona que habla en nombre de Dios", "Una persona que canta", "Una persona que cocina"],
                correct: "Una persona que habla en nombre de Dios"
            },
            {
                question: "¿Qué libro sagrado es importante en el cristianismo?",
                options: ["El Corán", "La Biblia", "El Talmud", "El Bhagavad-gītā"],
                correct: "La Biblia"
            },
            {
                question: "¿Qué celebramos el 25 de diciembre?",
                options: ["El Día de la Independencia", "La Navidad", "El Día del Trabajo", "El Año Nuevo"],
                correct: "La Navidad"
            },
            {
                question: "¿Qué es la oración?",
                options: ["Un cuento", "Una conversación con Dios", "Un tipo de comida", "Un juego"],
                correct: "Una conversación con Dios"
            },
            {
                question: "¿Quién fue Jesús?",
                options: ["Un rey", "Un profeta en el cristianismo", "Un guerrero", "Un filósofo"],
                correct: "Un profeta en el cristianismo"
            }
        ],
        "Arte Y Cultura": [
            {
                question: "¿Cuál es una técnica artística que se hace con papel y lápiz?",
                options: ["Pintura al óleo", "Dibujo", "Escultura", "Fotografía"],
                correct: "Dibujo"
            },
            {
                question: "¿Qué es un mural?",
                options: ["Una pintura en una hoja de papel", "Una pintura en una pared", "Un tipo de escultura", "Un cuadro pequeño"],
                correct: "Una pintura en una pared"
            },
            {
                question: "¿Cuál es un tipo de música que se toca con instrumentos?",
                options: ["Silencio", "Música instrumental", "Música vocal", "Música de fondo"],
                correct: "Música instrumental"
            },
            {
                question: "¿Qué es un festival?",
                options: ["Una reunión triste", "Una celebración con actividades y eventos", "Un lugar para descansar", "Una tienda"],
                correct: "Una celebración con actividades y eventos"
            },
            {
                question: "¿Qué es la danza folclórica?",
                options: ["Una danza moderna", "Una danza tradicional que representa la cultura de un lugar", "Una danza individual", "Una danza que no tiene música"],
                correct: "Una danza tradicional que representa la cultura de un lugar"
            }
        ],
        "Educacion Fisica": [
            {
                question: "¿Cuál es el principal objetivo del ejercicio físico?",
                options: ["Jugar todo el día", "Mantenerse saludable", "Dormir", "Comer más"],
                correct: "Mantenerse saludable"
            },
            {
                question: "¿Qué deporte se juega con una pelota y una red?",
                options: ["Fútbol", "Baloncesto", "Voleibol", "Natación"],
                correct: "Voleibol"
            },
            {
                question: "¿Qué es el calentamiento?",
                options: ["Un ejercicio para relajarse", "Un ejercicio para preparar al cuerpo para la actividad física", "Un juego", "Un deporte"],
                correct: "Un ejercicio para preparar al cuerpo para la actividad física"
            },
            {
                question: "¿Cuál de los siguientes es un ejercicio de fuerza?",
                options: ["Correr", "Levantar pesas", "Hacer yoga", "Saltar"],
                correct: "Levantar pesas"
            },
            {
                question: "¿Qué se debe hacer después de hacer ejercicio?",
                options: ["Comer inmediatamente", "Estiramientos", "Dormir", "No hacer nada"],
                correct: "Estiramientos"
            }
        ],
        "Ingles": [
            {
                question: "¿Cómo se dice 'casa' en inglés?",
                options: ["Home", "School", "Tree", "Car"],
                correct: "Home"
            },
            {
                question: "¿Cuál es la forma correcta del verbo 'to be' en pasado para 'yo'?",
                options: ["Am", "Is", "Was", "Were"],
                correct: "Was"
            },
            {
                question: "¿Cómo se dice 'grande' en inglés?",
                options: ["Small", "Large", "Tall", "Short"],
                correct: "Large"
            },
            {
                question: "¿Cuál es la traducción de '¿Cómo estás?' en inglés?",
                options: ["How are you?", "Where are you?", "What is your name?", "What do you want?"],
                correct: "How are you?"
            },
            {
                question: "¿Cómo se dice 'feliz' en inglés?",
                options: ["Sad", "Happy", "Angry", "Tired"],
                correct: "Happy"
            }
        ]
    },
        
        "6": { 
        "Matematicas": [
            {
                question: "¿Cuánto es 15 x 8?",
                options: ["120", "100", "110", "130"],
                correct: "120"
            },
            {
                question: "¿Cuál es el valor de 2⁵?",
                options: ["8", "16", "32", "64"],
                correct: "32"
            },
            {
                question: "¿Qué fracción es equivalente a 3/6?",
                options: ["1/2", "1/3", "2/3", "3/4"],
                correct: "1/2"
            },
            {
                question: "Si el perímetro de un cuadrado es 24 cm, ¿cuánto mide cada lado?",
                options: ["4 cm", "6 cm", "8 cm", "10 cm"],
                correct: "6 cm"
            },
            {
                question: "¿Cuál es el resultado de 120 ÷ 5?",
                options: ["20", "24", "30", "36"],
                correct: "24"
            }
        ],
        "Comunicacion": [
            {
                question: "¿Cuál es el tema de un texto?",
                options: ["La idea principal que trata el texto", "La cantidad de palabras", "El autor del texto", "El lugar donde se publica"],
                correct: "La idea principal que trata el texto"
            },
            {
                question: "¿Qué es una metáfora?",
                options: ["Una comparación directa", "Una descripción detallada", "Un tipo de poema", "Una comparación implícita"],
                correct: "Una comparación implícita"
            },
            {
                question: "¿Qué son los sinónimos?",
                options: ["Palabras con significado opuesto", "Palabras que significan lo mismo o son similares", "Palabras que riman", "Palabras que se escriben igual"],
                correct: "Palabras que significan lo mismo o son similares"
            },
            {
                question: "¿Cuál es el propósito de un cuento?",
                options: ["Informar", "Entretener", "Convencer", "Describir"],
                correct: "Entretener"
            },
            {
                question: "¿Qué es un poema?",
                options: ["Un texto en prosa", "Un texto que expresa sentimientos y emociones", "Un tipo de novela", "Un cuento corto"],
                correct: "Un texto que expresa sentimientos y emociones"
            }
        ],
        "Ciencia Y Ambiente": [
            {
                question: "¿Cuál es el planeta más cercano al sol?",
                options: ["Tierra", "Venus", "Mercurio", "Marte"],
                correct: "Mercurio"
            },
            {
                question: "¿Qué órgano del cuerpo humano bombea sangre?",
                options: ["Estómago", "Pulmones", "Hígado", "Corazón"],
                correct: "Corazón"
            },
            {
                question: "¿Cuál es el principal gas que respiramos?",
                options: ["Dióxido de carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"],
                correct: "Oxígeno"
            },
            {
                question: "¿Qué es la fotosíntesis?",
                options: ["Un proceso por el cual las plantas producen su alimento", "Un tipo de respiración", "Un proceso de descomposición", "Una forma de reproducción"],
                correct: "Un proceso por el cual las plantas producen su alimento"
            },
            {
                question: "¿Qué tipo de animal es un delfín?",
                options: ["Reptil", "Ave", "Mamífero", "Anfibio"],
                correct: "Mamífero"
            }
        ],
        "PersonalSocial": [
            {
                question: "¿Qué significa el término 'cultura'?",
                options: ["La comida que se come", "Las tradiciones, creencias y costumbres de un grupo", "La vestimenta de las personas", "El idioma que se habla"],
                correct: "Las tradiciones, creencias y costumbres de un grupo"
            },
            {
                question: "¿Qué es la discriminación?",
                options: ["Tratar a todos por igual", "No hacer distinción entre las personas", "Tratar injustamente a alguien por su raza, género u otras características", "Ayudar a los demás"],
                correct: "Tratar injustamente a alguien por su raza, género u otras características"
            },
            {
                question: "¿Qué es un derecho humano?",
                options: ["Algo que solo algunas personas tienen", "Un beneficio que se otorga a los niños", "Un derecho que todas las personas deben tener", "Un privilegio que se gana"],
                correct: "Un derecho que todas las personas deben tener"
            },
            {
                question: "¿Cuál es el objetivo de las campañas de reciclaje?",
                options: ["Aumentar la contaminación", "Producir más basura", "Proteger el medio ambiente", "Vender más productos"],
                correct: "Proteger el medio ambiente"
            },
            {
                question: "¿Qué es la paz?",
                options: ["La ausencia de guerra y conflicto", "Un tipo de lucha", "Un estado de tristeza", "Un juego"],
                correct: "La ausencia de guerra y conflicto"
            }
        ],
        "Educacion Religiosa": [
            {
                question: "¿Qué es la religión?",
                options: ["Un tipo de música", "Un sistema de creencias y prácticas sobre lo divino", "Un deporte", "Un tipo de comida"],
                correct: "Un sistema de creencias y prácticas sobre lo divino"
            },
            {
                question: "¿Quién es Moisés en la religión judía?",
                options: ["Un rey", "Un profeta que guió a los israelitas", "Un guerrero", "Un sacerdote"],
                correct: "Un profeta que guió a los israelitas"
            },
            {
                question: "¿Qué es la oración en las religiones?",
                options: ["Una conversación con otras personas", "Una forma de arte", "Una conversación con Dios", "Un juego"],
                correct: "Una conversación con Dios"
            },
            {
                question: "¿Cuál es uno de los símbolos del cristianismo?",
                options: ["La luna", "La estrella", "La cruz", "La montaña"],
                correct: "La cruz"
            },
            {
                question: "¿Qué libro sagrado es importante para los musulmanes?",
                options: ["La Biblia", "El Corán", "El Talmud", "El Bhagavad-gītā"],
                correct: "El Corán"
            }
        ],
        "Arte Y Cultura": [
            {
                question: "¿Qué es una pintura?",
                options: ["Un tipo de poema", "Una obra de arte hecha con colores sobre una superficie", "Una escultura", "Un tipo de música"],
                correct: "Una obra de arte hecha con colores sobre una superficie"
            },
            {
                question: "¿Qué significa 'folclore'?",
                options: ["La música moderna", "Las tradiciones y costumbres de un pueblo", "Las obras literarias", "Los deportes"],
                correct: "Las tradiciones y costumbres de un pueblo"
            },
            {
                question: "¿Qué es una escultura?",
                options: ["Un tipo de pintura", "Una obra de arte tridimensional", "Una danza", "Un relato"],
                correct: "Una obra de arte tridimensional"
            },
            {
                question: "¿Qué instrumento se utiliza para tocar música clásica?",
                options: ["Guitarra", "Piano", "Batería", "Saxofón"],
                correct: "Piano"
            },
            {
                question: "¿Qué es el teatro?",
                options: ["Un tipo de danza", "Un lugar para ver películas", "Una representación de una historia en vivo", "Una exposición de arte"],
                correct: "Una representación de una historia en vivo"
            }
        ],
        "Educacion Fisica": [
            {
                question: "¿Cuál es la importancia de hacer ejercicio?",
                options: ["Mantenerse en forma y saludable", "Solo para competir", "Para no estudiar", "Para dormir más"],
                correct: "Mantenerse en forma y saludable"
            },
            {
                question: "¿Qué es un deporte de equipo?",
                options: ["Un deporte que se juega solo", "Un deporte que se juega con varias personas en un equipo", "Un deporte sin reglas", "Un deporte que no tiene competencia"],
                correct: "Un deporte que se juega con varias personas en un equipo"
            },
            {
                question: "¿Qué se debe hacer antes de hacer ejercicio?",
                options: ["Hacer estiramientos", "Comer mucho", "Dormir", "Jugar videojuegos"],
                correct: "Hacer estiramientos"
            },
            {
                question: "¿Cuál de los siguientes es un deporte?",
                options: ["Correr", "Comer", "Dormir", "Mirar televisión"],
                correct: "Correr"
            },
            {
                question: "¿Qué es una competición?",
                options: ["Un lugar para practicar", "Un evento donde los deportistas compiten entre sí", "Una reunión social", "Un tipo de baile"],
                correct: "Un evento donde los deportistas compiten entre sí"
            }
        ],
        "Ingles": [
            {
                question: "¿Cómo se dice 'gato' en inglés?",
                options: ["Dog", "Cat", "Bird", "Fish"],
                correct: "Cat"
            },
            {
                question: "¿Cuál es el pasado del verbo 'go'?",
                options: ["Gone", "Went", "Go", "Going"],
                correct: "Went"
            },
            {
                question: "¿Qué significa 'friend'?",
                options: ["Enemigo", "Amigo", "Maestro", "Compañero"],
                correct: "Amigo"
            },
            {
                question: "¿Cómo se dice 'gracias' en inglés?",
                options: ["Please", "Thank you", "Sorry", "Hello"],
                correct: "Thank you"
            },
            {
                question: "¿Qué palabra completa la frase: 'I __ to school every day.'?",
                options: ["Walk", "Walking", "Walks", "Walked"],
                correct: "Walk"
            }
        ]
    }
        }

let currentGrade = "";
let currentSubject = "";
let currentQuestionIndex = 0;
let currentQuestions = [];
let score = 0;

// Configurar los eventos iniciales
startBtn.addEventListener('click', () => {
    const userName = userNameInput.value;
    currentGrade = gradeSelect.value;
    currentSubject = subjectSelect.value;

    if (!userName || !currentGrade || !currentSubject) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    // Cargar preguntas del grado y materia seleccionados
    currentQuestions = questionsData[currentGrade][currentSubject];
    loadQuestion();
});

// Agregar selector de materia dinámicamente según el grado
gradeSelect.addEventListener('change', () => {
    subjectSelect.innerHTML = '<option value="" disabled selected>Selecciona tu materia</option>';
    const selectedGrade = gradeSelect.value;
    if (questionsData[selectedGrade]) {
        Object.keys(questionsData[selectedGrade]).forEach(subject => {
            const option = document.createElement('option');
            option.value = subject;
            option.textContent = subject;
            subjectSelect.appendChild(option);
        });
    }
});
gradeSelect.insertAdjacentElement('afterend', subjectSelect);

function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.onclick = () => selectAnswer(option);
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(selectedOption) {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";
    resultSummary.textContent = `Preguntas respondidas correctamente: ${score}/${currentQuestions.length}`;
    localStorage.setItem('quizResults', JSON.stringify({ score, grade: currentGrade, subject: currentSubject }));
}

restartBtn.addEventListener('click', () => {
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
});
