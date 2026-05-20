export interface PromptTemplate {
  id: number;
  title: string;
  category: 'Code Generation' | 'Code Review' | 'Testing' | 'Documentation' | 'Debugging';
  technique: 'Zero-shot' | 'Few-shot' | 'Chain-of-Thought' | 'Role-based';
  template: (...args: any[]) => string;
}

export const backendPromptLibrary: PromptTemplate[] = [
  {
    id: 1,
    title: "Express.js route handler з валідацією",
    category: "Code Generation",
    technique: "Zero-shot",
    template: (entity: string, fields: string[]) => 
      `Створи Express.js роут-хендлер для створення сутності '${entity}'. Використай бібліотеку express-validator для перевірки полів: ${fields.join(', ')}. Повертай 400 при помилках валідації та 201 при успіху. Без зайвого тексту, тільки чистий JavaScript/TypeScript код.`
  },
  {
    id: 2,
    title: "Prisma schema для заданих entities",
    category: "Code Generation",
    technique: "Few-shot",
    template: (entities: string) => 
      `Ти генератор Prisma моделей. Створи схему на основі такого опису: ${entities}. 
      Приклад вхідних даних: User з email та posts. 
      Приклад виходу: model User { id Int @id @default(autoincrement()) email String @unique posts Post[] }
      Згенеруй схему для мого опису у такому ж строгому форматі.`
  },
  {
    id: 3,
    title: "Security review middleware коду",
    category: "Code Review",
    technique: "Role-based",
    template: (code: string) => 
      `Дій як Senior AppSec Engineer. Проведи аудит безпеки наступного коду Express middleware. Знайди вразливості (XSS, SQL Injection, broken auth) та надай виправлений безпечний варіант коду.
      Код:
      ${code}`
  },
  {
    id: 4,
    title: "Генерація unit тестів для сервісного класу",
    category: "Testing",
    technique: "Chain-of-Thought",
    template: (className: string, methods: string[], code: string) => 
      `Тобі потрібно написати unit-тести на Jest для класу ${className}, який має методи: ${methods.join(', ')}. 
      Міркуй покроково:
      1. Визнач mock-залежності для класу.
      2. Опиши happy-path сценарії для кожного методу.
      3. Опиши edge-cases та обробку помилок (граничні значення, кидання помилок).
      4. Згенеруй фінальний код тестів на основі цих міркувань.
      Ось код класу:
      ${code}`
  },
  {
    id: 5,
    title: "Пояснення складного коду простими словами",
    category: "Documentation",
    technique: "Role-based",
    template: (code: string) => 
      `Дій як ментор з програмування. Поясни цей складний фрагмент коду простими словами для розробника рівня Junior. Розбери логіку по рядках та поясни, яку проблему він вирішує.
      Код:
      ${code}`
  },
  {
    id: 6,
    title: "Перетворення SQL запиту в Prisma query",
    category: "Code Generation",
    technique: "Zero-shot",
    template: (sql: string) => 
      `Перетвори наступний сирий SQL-запит у виклик Prisma Client (Prisma query syntax). Напиши тільки JS/TS код без додаткових описів.
      SQL:
      ${sql}`
  },
  {
    id: 7,
    title: "Docker multi-stage Dockerfile для Node.js",
    category: "Code Generation",
    technique: "Chain-of-Thought",
    template: (port: number) => 
      `Створи оптимальний multi-stage Dockerfile для Node.js Express додатку, що працює на порту ${port}. 
      Кроки для міркування:
      1. Перший етап (Build): інсталяція всіх залежностей та збірка.
      2. Другий етап (Production): копіювання лише необхідних файлів, встановлення лише production-dependencies.
      3. Безпека: перемикання на non-root користувача перед запуском.
      Виведи фінальний Dockerfile.`
  },
  {
    id: 8,
    title: "OpenAPI специфікація для заданих маршрутів",
    category: "Documentation",
    technique: "Few-shot",
    template: (route: string, method: string, description: string) => 
      `Згенеруй фрагмент специфікації OpenAPI 3.0 у форматі YAML для маршруту.
      Приклад: GET /health повертає 200 із JSON {status: "UP"}.
      Вихід приладу: paths: /health: get: responses: '200': description: OK
      Згенеруй специфікацію для: ${method} ${route} — ${description}`
  },
  {
    id: 9,
    title: "Debugging TypeScript compile error",
    category: "Debugging",
    technique: "Zero-shot",
    template: (error: string, code: string) => 
      `Я отримую помилку компіляції TypeScript: "${error}". Поясни причину помилки та надай виправлену версію коду.
      Код:
      ${code}`
  },
  {
    id: 10,
    title: "Refactoring: виявлення code smells",
    category: "Code Review",
    technique: "Chain-of-Thought",
    template: (code: string) => 
      `Проаналізуй цей застарілий код. 
      Покроково:
      1. Перелічи всі знайдені code smells (глибока вкладеність, var, погані назви).
      2. Запропонуй сучасний рефакторинг з використанням методів масивів (ES6+) та чистих функцій.
      Код:
      ${code}`
  }
];
