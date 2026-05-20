### Відповідь AI
Крок 1: Mock-залежності. Залежністю є об'єкт `db`. Створимо mock із методами `find` та `save`.
Крок 2: Happy-path. Для `getUser` — повернення об'єкта при валідному id. Для `createUser` — повернення створеного об'єкта при наявності email.
Крок 3: Edge-cases. Перевірка кидання помилки `No email`, якщо email відсутній.

```javascript
describe('UserService', () => {
  let dbMock, userService;

  beforeEach(() => {
    dbMock = { find: jest.fn(), save: jest.fn() };
    userService = new UserService(dbMock);
  });

  test('getUser happy path', async () => {
    dbMock.find.mockResolvedValue({ id: 1, name: 'John' });
    const user = await userService.getUser(1);
    expect(user.name).toBe('John');
  });

  test('createUser throws error if no email', async () => {
    await expect(userService.createUser({})).rejects.toThrow('No email');
  });
});
