### Відповідь AI
const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/user', [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('age').isInt({ min: 18 }).withMessage('Age must be an integer greater than or equal to 18')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.status(201).json({ message: 'User created successfully', data: req.body });
});

module.exports = router;

### Критична оцінка відповіді
- **Що добре:** Модель чітко виконала обмеження "без зайвого тексту" та правильно застосувала вбудовані правила валідації для `email`, `password` та `age`.
- **Що виправлено:** Модель використала застарілий `require()` синтаксис (CommonJS). Для сучасної розробки код було вручну адаптовано під ES Модулі (`import/export`).
