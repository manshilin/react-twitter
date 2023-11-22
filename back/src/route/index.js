// Підключаємо роутер до бек-енду
const express = require('express');
const router = express.Router();

// Підключаємо файли роутів
const post = require('./post');
// Підключить інші файли роутів, якщо вони будуть

// Об'єднуємо файли роутів за допомогою методу use, за потреби
router.use('/', post);
// Використовуйте інші файли роутів, якщо вони будуть

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
}
);
// Експортуємо глобальний роутер
module.exports = router;