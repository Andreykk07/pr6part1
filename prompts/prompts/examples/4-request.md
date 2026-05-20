### Промпт (Згенеровано шаблоном №4, Техніка: Chain-of-Thought)
Тобі потрібно написати unit-тести на Jest для класу UserService, який має методи: getUser, createUser. 
Міркуй покроково:
1. Визнач mock-залежності для класу.
2. Опиши happy-path сценарії для кожного методу.
3. Опиши edge-cases та обробку помилок (граничні значення, кидання помилок).
4. Згенеруй фінальний код тестів на основі цих міркувань.
Ось код класу:
class UserService {
  constructor(db) { this.db = db; }
  async getUser(id) { return await this.db.find(id); }
  async createUser(data) { if(!data.email) throw new Error('No email'); return await this.db.save(data); }
}
