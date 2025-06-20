// Interactive Computer Science Test Application
class ComputerScienceTest {
    constructor() {
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.userAnswers = {};
        this.startTime = null;
        this.timerInterval = null;
        this.currentPage = 'home';
        
        this.init();
        this.hideConfirmModal();
    }

    init() {
        this.createQuestions();
        this.shuffleQuestions();
        // Wait for DOM to be fully loaded before binding events
        setTimeout(() => {
            this.bindEvents();
            this.showPage('home');
        }, 100);
    }

    createQuestions() {
        this.questions = [
            // Урок 1-2: Устройство компьютера и ПО (8 вопросов)
            {
                id: 1,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Какой компонент компьютера отвечает за временное хранение данных во время работы программ?',
                options: ['Жесткий диск', 'Оперативная память (RAM)', 'Процессор', 'Видеокарта'],
                correct: 1
            },
            {
                id: 2,
                type: 'multiple',
                topic: 'Устройство компьютера и ПО',
                question: 'Какие из перечисленных устройств являются устройствами вывода информации?',
                options: ['Монитор', 'Клавиатура', 'Принтер', 'Мышь', 'Динамики'],
                correct: [0, 2, 4]
            },
            {
                id: 3,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Что происходит с данными в оперативной памяти при выключении компьютера?',
                options: ['Сохраняются навсегда', 'Удаляются безвозвратно', 'Переносятся на жесткий диск', 'Архивируются'],
                correct: 1
            },
            {
                id: 4,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Какая характеристика процессора определяет количество операций, выполняемых за единицу времени?',
                options: ['Объем кэш-памяти', 'Тактовая частота', 'Количество ядер', 'Техпроцесс'],
                correct: 1
            },
            {
                id: 5,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Что такое BIOS в компьютере?',
                options: ['Операционная система', 'Прикладная программа', 'Базовая система ввода-вывода', 'Антивирусная программа'],
                correct: 2
            },
            {
                id: 6,
                type: 'multiple',
                topic: 'Устройство компьютера и ПО',
                question: 'Какие типы программного обеспечения существуют?',
                options: ['Системное ПО', 'Прикладное ПО', 'Инструментальное ПО', 'Аппаратное ПО'],
                correct: [0, 1, 2]
            },
            {
                id: 7,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Какой тип памяти используется для постоянного хранения программ и данных?',
                options: ['ОЗУ', 'Кэш-память', 'Постоянное запоминающее устройство', 'Регистры процессора'],
                correct: 2
            },
            {
                id: 8,
                type: 'single',
                topic: 'Устройство компьютера и ПО',
                question: 'Что означает аббревиатура GPU?',
                options: ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Game Processing Unit'],
                correct: 1
            },

            // Урок 3-4: Файлы и облачные хранилища (6 вопросов)
            {
                id: 9,
                type: 'single',
                topic: 'Файлы и облачные хранилища',
                question: 'Какой символ НЕ может использоваться в имени файла в Windows?',
                options: ['_', '-', ':', '.'],
                correct: 2
            },
            {
                id: 10,
                type: 'multiple',
                topic: 'Файлы и облачные хранилища',
                question: 'Какие из перечисленных сервисов являются облачными хранилищами?',
                options: ['Google Drive', 'Dropbox', 'Windows Media Player', 'OneDrive', 'Notepad'],
                correct: [0, 1, 3]
            },
            {
                id: 11,
                type: 'single',
                topic: 'Файлы и облачные хранилища',
                question: 'Что означает расширение файла .exe?',
                options: ['Исполняемый файл', 'Текстовый файл', 'Изображение', 'Архив'],
                correct: 0
            },
            {
                id: 12,
                type: 'single',
                topic: 'Файлы и облачные хранилища',
                question: 'Какой максимальный размер файла может быть в файловой системе FAT32?',
                options: ['2 ГБ', '4 ГБ', '8 ГБ', '16 ГБ'],
                correct: 1
            },
            {
                id: 13,
                type: 'multiple',
                topic: 'Файлы и облачные хранилища',
                question: 'Преимущества облачных хранилищ включают:',
                options: ['Доступность с любого устройства', 'Автоматическое резервное копирование', 'Полная конфиденциальность', 'Синхронизация между устройствами'],
                correct: [0, 1, 3]
            },
            {
                id: 14,
                type: 'single',
                topic: 'Файлы и облачные хранилища',
                question: 'Что происходит при дефрагментации жесткого диска?',
                options: ['Удаление файлов', 'Упорядочивание данных для быстрого доступа', 'Сжатие файлов', 'Шифрование данных'],
                correct: 1
            },

            // Урок 5-6: Интернет и безопасность (8 вопросов)
            {
                id: 15,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Что означает протокол HTTPS?',
                options: ['HyperText Transfer Protocol', 'HyperText Transfer Protocol Secure', 'HyperText Transmission Protocol', 'HyperText Transport Protocol'],
                correct: 1
            },
            {
                id: 16,
                type: 'multiple',
                topic: 'Интернет и безопасность',
                question: 'Какие методы защиты информации используются в интернете?',
                options: ['Шифрование', 'Антивирусы', 'Файрволлы', 'Резервное копирование', 'Дефрагментация'],
                correct: [0, 1, 2, 3]
            },
            {
                id: 17,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Что такое фишинг?',
                options: ['Вид компьютерного вируса', 'Способ мошенничества для получения личных данных', 'Метод сжатия файлов', 'Протокол передачи данных'],
                correct: 1
            },
            {
                id: 18,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Какой стандартный порт использует протокол HTTP?',
                options: ['21', '25', '80', '443'],
                correct: 2
            },
            {
                id: 19,
                type: 'multiple',
                topic: 'Интернет и безопасность',
                question: 'Признаки надежного пароля:',
                options: ['Длина более 8 символов', 'Использование букв разных регистров', 'Включение цифр и спецсимволов', 'Личная информация пользователя'],
                correct: [0, 1, 2]
            },
            {
                id: 20,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Что такое DNS?',
                options: ['Система доменных имен', 'Протокол безопасности', 'Вид вредоносного ПО', 'Метод сжатия данных'],
                correct: 0
            },
            {
                id: 21,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Какой уровень модели OSI отвечает за маршрутизацию пакетов?',
                options: ['Физический', 'Канальный', 'Сетевой', 'Транспортный'],
                correct: 2
            },
            {
                id: 22,
                type: 'single',
                topic: 'Интернет и безопасность',
                question: 'Что означает аббревиатура VPN?',
                options: ['Virtual Private Network', 'Very Private Network', 'Virtual Protected Network', 'Verified Private Network'],
                correct: 0
            },

            // Урок 7: Измерение информации (6 вопросов)
            {
                id: 23,
                type: 'single',
                topic: 'Измерение информации',
                question: 'Сколько байт информации содержит сообщение из 2048 символов в кодировке UTF-8, где каждый символ занимает 3 байта?',
                options: ['2048 байт', '6144 байта', '4096 байт', '8192 байта'],
                correct: 1
            },
            {
                id: 24,
                type: 'single',
                topic: 'Измерение информации',
                question: 'Какой объем информации содержит растровое изображение размером 1024×768 пикселей с глубиной цвета 24 бита?',
                options: ['2,25 МБ', '2,36 МБ', '3,0 МБ', '1,5 МБ'],
                correct: 1
            },
            {
                id: 25,
                type: 'single',
                topic: 'Измерение информации',
                question: 'Сколько различных сообщений можно закодировать с помощью 12-битного кода?',
                options: ['12', '144', '2048', '4096'],
                correct: 3
            },
            {
                id: 26,
                type: 'single',
                topic: 'Измерение информации',
                question: 'Аудиофайл длительностью 3 минуты записан с частотой дискретизации 44100 Гц и разрядностью 16 бит в стерео. Каков его размер?',
                options: ['15,12 МБ', '30,24 МБ', '7,56 МБ', '22,68 МБ'],
                correct: 0
            },
            {
                id: 27,
                type: 'single',
                topic: 'Измерение информации',
                question: 'Сколько информации содержит сообщение, уменьшающее неопределенность в 64 раза?',
                options: ['6 бит', '8 бит', '64 бита', '32 бита'],
                correct: 0
            },
            {
                id: 28,
                type: 'single',
                topic: 'Измерение информации',
                question: 'В алфавите племени 32 символа. Какое минимальное количество бит потребуется для кодирования одного символа?',
                options: ['4 бита', '5 бит', '6 бит', '32 бита'],
                correct: 1
            },

            // Урок 8-9: Системы счисления (8 вопросов)
            {
                id: 29,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Переведите число 1010111₂ в десятичную систему счисления:',
                options: ['83', '87', '91', '95'],
                correct: 1
            },
            {
                id: 30,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Переведите число 3A7₁₆ в десятичную систему счисления:',
                options: ['935', '927', '943', '951'],
                correct: 1
            },
            {
                id: 31,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Переведите число 377₈ в двоичную систему счисления:',
                options: ['11111111₂', '11111110₂', '11111101₂', '11111100₂'],
                correct: 0
            },
            {
                id: 32,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Какое наибольшее десятичное число можно записать тремя цифрами в семеричной системе счисления?',
                options: ['342', '335', '343', '336'],
                correct: 2
            },
            {
                id: 33,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Переведите число 1024₁₀ в шестнадцатеричную систему счисления:',
                options: ['400₁₆', '800₁₆', '200₁₆', '100₁₆'],
                correct: 0
            },
            {
                id: 34,
                type: 'single',
                topic: 'Системы счисления',
                question: 'В какой системе счисления выполняется равенство: 12 + 15 = 30?',
                options: ['7', '8', '9', '10'],
                correct: 1
            },
            {
                id: 35,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Переведите число 11011011₂ в восьмеричную систему счисления:',
                options: ['333₈', '334₈', '335₈', '336₈'],
                correct: 0
            },
            {
                id: 36,
                type: 'single',
                topic: 'Системы счисления',
                question: 'Сколько единиц в двоичной записи числа 255₁₀?',
                options: ['6', '7', '8', '9'],
                correct: 2
            },

            // Урок 10: Арифметические операции (4 вопроса)
            {
                id: 37,
                type: 'single',
                topic: 'Арифметические операции',
                question: 'Выполните сложение в двоичной системе: 10110110₂ + 01101101₂',
                options: ['100100011₂', '100100010₂', '100100001₂', '100100100₂'],
                correct: 0
            },
            {
                id: 38,
                type: 'single',
                topic: 'Арифметические операции',
                question: 'Выполните умножение в восьмеричной системе: 37₈ × 25₈',
                options: ['1043₈', '1053₈', '1063₈', '1073₈'],
                correct: 1
            },
            {
                id: 39,
                type: 'single',
                topic: 'Арифметические операции',
                question: 'Выполните вычитание в шестнадцатеричной системе: 2A3₁₆ - 1BC₁₆',
                options: ['E5₁₆', 'E6₁₆', 'E7₁₆', 'E8₁₆'],
                correct: 2
            },
            {
                id: 40,
                type: 'single',
                topic: 'Арифметические операции',
                question: 'Выполните деление в двоичной системе: 1100100₂ ÷ 101₂',
                options: ['1001₂', '1010₂', '1011₂', '1100₂'],
                correct: 3
            },

            // Урок 11-12: Алгебра логики (6 вопросов)
            {
                id: 41,
                type: 'truth-table',
                topic: 'Алгебра логики',
                question: 'Постройте таблицу истинности для логического выражения: (A ∧ B) ∨ (¬C)',
                expression: '(A ∧ B) ∨ (¬C)',
                variables: ['A', 'B', 'C'],
                correct: [
                    [0, 0, 0, 1],
                    [0, 0, 1, 0],
                    [0, 1, 0, 1],
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [1, 0, 1, 0],
                    [1, 1, 0, 1],
                    [1, 1, 1, 1]
                ]
            },
            {
                id: 42,
                type: 'single',
                topic: 'Алгебра логики',
                question: 'Упростите логическое выражение: (A ∨ B) ∧ (A ∨ ¬B)',
                options: ['A', 'B', 'A ∧ B', 'A ∨ B'],
                correct: 0
            },
            {
                id: 43,
                type: 'truth-table',
                topic: 'Алгебра логики',
                question: 'Постройте таблицу истинности для выражения: A ⊕ B ⊕ C (исключающее ИЛИ)',
                expression: 'A ⊕ B ⊕ C',
                variables: ['A', 'B', 'C'],
                correct: [
                    [0, 0, 0, 0],
                    [0, 0, 1, 1],
                    [0, 1, 0, 1],
                    [0, 1, 1, 0],
                    [1, 0, 0, 1],
                    [1, 0, 1, 0],
                    [1, 1, 0, 0],
                    [1, 1, 1, 1]
                ]
            },
            {
                id: 44,
                type: 'single',
                topic: 'Алгебра логики',
                question: 'Какой результат даст выражение ¬(A ∨ B) при A = 0, B = 0?',
                options: ['0', '1', 'A', 'B'],
                correct: 1
            },
            {
                id: 45,
                type: 'single',
                topic: 'Алгебра логики',
                question: 'Сколько переменных содержит функция, имеющая 16 строк в таблице истинности?',
                options: ['3', '4', '5', '16'],
                correct: 1
            },
            {
                id: 46,
                type: 'single',
                topic: 'Алгебра логики',
                question: 'Какое логическое выражение эквивалентно импликации A → B?',
                options: ['¬A ∨ B', 'A ∨ ¬B', 'A ∧ B', '¬A ∧ ¬B'],
                correct: 0
            },

            // Урок 13: Алгоритмизация (4 вопроса)
            {
                id: 47,
                type: 'algorithm',
                topic: 'Алгоритмизация',
                question: 'Определите результат выполнения алгоритма при x = 15: начало → x = 15 → y = x × 2 → если y > 25, то y = y + 5, иначе y = y - 5 → конец',
                options: ['15', '30', '35', '25'],
                correct: 2
            },
            {
                id: 48,
                type: 'algorithm',
                topic: 'Алгоритмизация',
                question: 'Какое значение y получится после выполнения алгоритма при x = 8: начало → x = 8 → y = x + 4 → если x четное, то y = y - 2, иначе y = y + 3 → конец',
                options: ['16', '10', '15', '8'],
                correct: 1
            },
            {
                id: 49,
                type: 'algorithm',
                topic: 'Алгоритмизация',
                question: 'Сколько раз выполнится тело цикла: i = 1; пока i ≤ 5: i = i + 1; конец цикла',
                options: ['4', '5', '6', '7'],
                correct: 1
            },
            {
                id: 50,
                type: 'single',
                topic: 'Алгоритмизация',
                question: 'Какая структура алгоритма позволяет выполнить группу команд определенное количество раз?',
                options: ['Следование', 'Ветвление', 'Цикл', 'Подпрограмма'],
                correct: 2
            }
        ];
    }

    shuffleQuestions() {
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
        }
    }

    bindEvents() {
        // Remove any existing event listeners first
        this.removeAllEventListeners();

        // Bind all event listeners with error handling
        this.safeBindEvent('start-test', 'click', () => this.startTest());
        this.safeBindEvent('prev-btn', 'click', () => this.previousQuestion());
        this.safeBindEvent('next-btn', 'click', () => this.nextQuestion());
        this.safeBindEvent('finish-btn', 'click', () => this.finishTest());
        this.safeBindEvent('confirm-finish', 'click', () => this.finishTest());
        this.safeBindEvent('cancel-finish', 'click', () => this.hideConfirmModal());
        this.safeBindEvent('restart-test', 'click', () => this.restartTest());
        this.safeBindEvent('back-home', 'click', () => this.goBackHome());

        // Add modal overlay click to close
        const modal = document.getElementById('confirm-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideConfirmModal();
                }
            });
        }
    }

    safeBindEvent(elementId, eventType, handler) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener(eventType, handler);
        }
    }

    removeAllEventListeners() {
        // This method can be expanded if needed for cleanup
    }

    startTest() {
    try {
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.startTime = new Date();
        this.startTimer();
        this.showPage('test');
        this.loadQuestion();
        this.hideConfirmModal(); 
    } catch (error) {
        console.error('Error starting test:', error);
    }
}

    startTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        this.timerInterval = setInterval(() => {
            try {
                const now = new Date();
                const elapsed = Math.floor((now - this.startTime) / 1000);
                const hours = Math.floor(elapsed / 3600);
                const minutes = Math.floor((elapsed % 3600) / 60);
                const seconds = elapsed % 60;
                
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.textContent = 
                        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
            } catch (error) {
                console.error('Timer error:', error);
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    loadQuestion() {
        try {
            const question = this.questions[this.currentQuestionIndex];
            
            // Update progress
            const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
            this.safeUpdateElement('progress-fill', (el) => el.style.width = `${progress}%`);
            this.safeUpdateElement('progress-text', (el) => el.textContent = `Вопрос ${this.currentQuestionIndex + 1} из ${this.questions.length}`);
            this.safeUpdateElement('question-indicator', (el) => el.textContent = `${this.currentQuestionIndex + 1} / ${this.questions.length}`);
            this.safeUpdateElement('question-number', (el) => el.textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`);
            this.safeUpdateElement('question-text', (el) => el.textContent = question.question);
            
            // Set question type status
            const typeMap = {
                'single': 'Одиночный выбор',
                'multiple': 'Множественный выбор',
                'truth-table': 'Таблица истинности',
                'algorithm': 'Алгоритм'
            };
            this.safeUpdateElement('question-type', (el) => el.textContent = typeMap[question.type] || 'Вопрос');

            // Load question content based on type
            this.loadQuestionByType(question);

            // Update navigation buttons
            this.updateNavigationButtons();

            // Restore user answer if exists
            this.restoreAnswer(question);
        } catch (error) {
            console.error('Error loading question:', error);
        }
    }

    safeUpdateElement(elementId, updateFunction) {
        const element = document.getElementById(elementId);
        if (element) {
            updateFunction(element);
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');

        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        
        if (nextBtn) {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                nextBtn.classList.add('hidden');
            } else {
                nextBtn.classList.remove('hidden');
            }
        }
        
        if (finishBtn) {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                finishBtn.classList.remove('hidden');
            } else {
                finishBtn.classList.add('hidden');
            }
        }
    }

    loadQuestionByType(question) {
        const optionsContainer = document.getElementById('options-container');
        const truthTableContainer = document.getElementById('truth-table-container');
        
        // Hide all containers first
        if (optionsContainer) optionsContainer.classList.add('hidden');
        if (truthTableContainer) truthTableContainer.classList.add('hidden');

        switch (question.type) {
            case 'single':
            case 'multiple':
            case 'algorithm':
                this.loadOptionsQuestion(question);
                if (optionsContainer) optionsContainer.classList.remove('hidden');
                break;
            case 'truth-table':
                this.loadTruthTableQuestion(question);
                if (truthTableContainer) truthTableContainer.classList.remove('hidden');
                break;
        }
    }

    loadOptionsQuestion(question) {
        const container = document.getElementById('options-container');
        if (!container) return;

        const inputType = question.type === 'multiple' ? 'checkbox' : 'radio';
        
        container.innerHTML = question.options.map((option, index) => `
            <div class="option" onclick="this.querySelector('input').click()">
                <input type="${inputType}" name="question-${question.id}" value="${index}" id="option-${index}">
                <label for="option-${index}" class="option-text">${option}</label>
            </div>
        `).join('');

        // Add event listeners for option selection
        const inputs = container.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateOptionStyles();
                this.saveAnswer();
            });
        });
    }

    loadTruthTableQuestion(question) {
        const container = document.getElementById('truth-table-container');
        if (!container) return;

        const variables = question.variables;
        const rows = Math.pow(2, variables.length);

        let tableHTML = `
            <h4>Постройте таблицу истинности для выражения: ${question.expression}</h4>
            <table class="truth-table">
                <thead>
                    <tr>
                        ${variables.map(v => `<th>${v}</th>`).join('')}
                        <th>${question.expression}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        for (let i = 0; i < rows; i++) {
            const values = [];
            for (let j = variables.length - 1; j >= 0; j--) {
                values.push((i >> j) & 1);
            }
            
            tableHTML += `
                <tr>
                    ${values.map(v => `<td>${v}</td>`).join('')}
                    <td><input type="text" class="truth-table-input" data-row="${i}" maxlength="1"></td>
                </tr>
            `;
        }

        tableHTML += `
                </tbody>
            </table>
        `;

        container.innerHTML = tableHTML;

        // Add event listeners for truth table inputs
        const inputs = container.querySelectorAll('.truth-table-input');
        inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                // Only allow 0 or 1
                if (e.target.value !== '0' && e.target.value !== '1') {
                    e.target.value = '';
                }
                this.saveAnswer();
            });
        });
    }

    updateOptionStyles() {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            const input = option.querySelector('input');
            if (input) {
                option.classList.toggle('selected', input.checked);
            }
        });
    }

    saveAnswer() {
        try {
            const question = this.questions[this.currentQuestionIndex];
            
            switch (question.type) {
                case 'single':
                case 'algorithm':
                    const radioInput = document.querySelector(`input[name="question-${question.id}"]:checked`);
                    this.userAnswers[question.id] = radioInput ? parseInt(radioInput.value) : null;
                    break;
                case 'multiple':
                    const checkboxInputs = document.querySelectorAll(`input[name="question-${question.id}"]:checked`);
                    this.userAnswers[question.id] = Array.from(checkboxInputs).map(input => parseInt(input.value));
                    break;
                case 'truth-table':
                    const truthInputs = document.querySelectorAll('.truth-table-input');
                    const answers = [];
                    truthInputs.forEach(input => {
                        answers.push(input.value === '1' ? 1 : (input.value === '0' ? 0 : null));
                    });
                    this.userAnswers[question.id] = answers;
                    break;
            }
        } catch (error) {
            console.error('Error saving answer:', error);
        }
    }

    restoreAnswer(question) {
        try {
            const answer = this.userAnswers[question.id];
            if (!answer && answer !== 0) return;

            switch (question.type) {
                case 'single':
                case 'algorithm':
                    const radioInput = document.querySelector(`input[name="question-${question.id}"][value="${answer}"]`);
                    if (radioInput) {
                        radioInput.checked = true;
                        this.updateOptionStyles();
                    }
                    break;
                case 'multiple':
                    if (Array.isArray(answer)) {
                        answer.forEach(value => {
                            const checkboxInput = document.querySelector(`input[name="question-${question.id}"][value="${value}"]`);
                            if (checkboxInput) {
                                checkboxInput.checked = true;
                            }
                        });
                        this.updateOptionStyles();
                    }
                    break;
                case 'truth-table':
                    const truthInputs = document.querySelectorAll('.truth-table-input');
                    if (Array.isArray(answer)) {
                        truthInputs.forEach((input, index) => {
                            if (answer[index] !== null) {
                                input.value = answer[index].toString();
                            }
                        });
                    }
                    break;
            }
        } catch (error) {
            console.error('Error restoring answer:', error);
        }
    }

    previousQuestion() {
        try {
            if (this.currentQuestionIndex > 0) {
                this.saveAnswer();
                this.currentQuestionIndex--;
                this.loadQuestion();
            }
        } catch (error) {
            console.error('Error going to previous question:', error);
        }
    }

    nextQuestion() {
        try {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.saveAnswer();
                this.currentQuestionIndex++;
                this.loadQuestion();
            }
        } catch (error) {
            console.error('Error going to next question:', error);
        }
    }

    showConfirmModal() {
        try {
            this.saveAnswer();
            const answeredCount = Object.keys(this.userAnswers).length;
            this.safeUpdateElement('answered-count', (el) => el.textContent = answeredCount);
            
            const modal = document.getElementById('confirm-modal');
            if (modal) {
                modal.classList.remove('hidden');
                // Focus on the first button to improve accessibility
                const confirmBtn = document.getElementById('confirm-finish');
                if (confirmBtn) {
                    setTimeout(() => confirmBtn.focus(), 100);
                }
            }
        } catch (error) {
            console.error('Error showing confirm modal:', error);
        }
    }

    hideConfirmModal() {
        try {
            const modal = document.getElementById('confirm-modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        } catch (error) {
            console.error('Error hiding confirm modal:', error);
        }
    }

    finishTest() {
        try {
            this.hideConfirmModal();
            this.stopTimer();
            this.calculateResults();
            this.showPage('results');
        } catch (error) {
            console.error('Error finishing test:', error);
        }
    }

    calculateResults() {
        try {
            let correctAnswers = 0;
            const topicStats = {};

            this.questions.forEach(question => {
                const userAnswer = this.userAnswers[question.id];
                let isCorrect = false;

                switch (question.type) {
                    case 'single':
                    case 'algorithm':
                        isCorrect = userAnswer === question.correct;
                        break;
                    case 'multiple':
                        if (userAnswer && question.correct) {
                            const userSet = new Set(userAnswer);
                            const correctSet = new Set(question.correct);
                            isCorrect = userSet.size === correctSet.size && 
                                       [...userSet].every(x => correctSet.has(x));
                        }
                        break;
                    case 'truth-table':
                        if (userAnswer && question.correct) {
                            isCorrect = userAnswer.every((val, idx) => 
                                val === question.correct[idx][question.correct[idx].length - 1]);
                        }
                        break;
                }

                if (isCorrect) correctAnswers++;

                // Update topic statistics
                if (!topicStats[question.topic]) {
                    topicStats[question.topic] = { correct: 0, total: 0 };
                }
                topicStats[question.topic].total++;
                if (isCorrect) topicStats[question.topic].correct++;
            });

            this.displayResults(correctAnswers, topicStats);
        } catch (error) {
            console.error('Error calculating results:', error);
        }
    }

    displayResults(correctAnswers, topicStats) {
        try {
            const totalQuestions = this.questions.length;
            const percentage = Math.round((correctAnswers / totalQuestions) * 100);
            
            // Calculate grade based on very lenient system
            const gradingSystem = {
                5: { min: 80, message: "Отлично! Вы показали превосходные знания по информатике!" },
                4: { min: 50, message: "Хорошо! У вас солидные знания по предмету!" },
                3: { min: 30, message: "Удовлетворительно. Рекомендуем повторить материал!" },
                2: { min: 0, message: "Попробуйте еще раз! Изучите материал внимательнее." }
            };

            let grade = 2;
            let message = gradingSystem[2].message;

            for (let g = 5; g >= 2; g--) {
                if (percentage >= gradingSystem[g].min) {
                    grade = g;
                    message = gradingSystem[g].message;
                    break;
                }
            }

            // Display main results
            this.safeUpdateElement('score-percentage', (el) => el.textContent = `${percentage}%`);
            this.safeUpdateElement('grade-display', (el) => el.textContent = grade);
            this.safeUpdateElement('grade-message', (el) => el.textContent = message);
            this.safeUpdateElement('correct-answers', (el) => el.textContent = correctAnswers);
            this.safeUpdateElement('incorrect-answers', (el) => el.textContent = totalQuestions - correctAnswers);

            // Display time
            if (this.startTime) {
                const now = new Date();
                const elapsed = Math.floor((now - this.startTime) / 1000);
                const hours = Math.floor(elapsed / 3600);
                const minutes = Math.floor((elapsed % 3600) / 60);
                const seconds = elapsed % 60;
                this.safeUpdateElement('total-time', (el) => el.textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            }

            // Display topic statistics
            const topicStatsContainer = document.getElementById('topic-stats');
            if (topicStatsContainer) {
                topicStatsContainer.innerHTML = Object.entries(topicStats).map(([topic, stats]) => {
                    const topicPercentage = Math.round((stats.correct / stats.total) * 100);
                    return `
                        <div class="topic-stat">
                            <span class="topic-name">${topic}</span>
                            <span class="topic-score">${stats.correct}/${stats.total} (${topicPercentage}%)</span>
                        </div>
                    `;
                }).join('');
            }

            // Display detailed answers
            const detailedContainer = document.getElementById('detailed-answers');
            if (detailedContainer) {
                detailedContainer.innerHTML = this.questions.map((question, index) => {
                    const userAnswer = this.userAnswers[question.id];
                    let isCorrect = false;

                    // Check if answer is correct (same logic as in calculateResults)
                    switch (question.type) {
                        case 'single':
                        case 'algorithm':
                            isCorrect = userAnswer === question.correct;
                            break;
                        case 'multiple':
                            if (userAnswer && question.correct) {
                                const userSet = new Set(userAnswer);
                                const correctSet = new Set(question.correct);
                                isCorrect = userSet.size === correctSet.size && 
                                           [...userSet].every(x => correctSet.has(x));
                            }
                            break;
                        case 'truth-table':
                            if (userAnswer && question.correct) {
                                isCorrect = userAnswer.every((val, idx) => 
                                    val === question.correct[idx][question.correct[idx].length - 1]);
                            }
                            break;
                    }

                    return `
                        <div class="answer-item">
                            <span class="answer-question">Вопрос ${index + 1}: ${question.question.substring(0, 60)}...</span>
                            <span class="answer-status ${isCorrect ? 'correct' : 'incorrect'}">${isCorrect ? '✅' : '❌'}</span>
                        </div>
                    `;
                }).join('');
            }
        } catch (error) {
            console.error('Error displaying results:', error);
        }
    }

    restartTest() {
        try {
            this.shuffleQuestions();
            this.startTest();
        } catch (error) {
            console.error('Error restarting test:', error);
        }
    }

    goBackHome() {
        try {
            this.stopTimer();
            this.showPage('home');
        } catch (error) {
            console.error('Error going back home:', error);
        }
    }

    showPage(page) {
        try {
            // Hide all pages
            const pages = ['home-page', 'test-page', 'results-page'];
            pages.forEach(pageId => {
                const pageElement = document.getElementById(pageId);
                if (pageElement) {
                    pageElement.classList.add('hidden');
                }
            });

            // Show requested page
            const targetPage = document.getElementById(`${page}-page`);
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }
            
            this.currentPage = page;

            if (page === 'home') {
                this.stopTimer();
            }
        } catch (error) {
            console.error('Error showing page:', error);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        new ComputerScienceTest();
    } catch (error) {
        console.error('Error initializing application:', error);
    }
});