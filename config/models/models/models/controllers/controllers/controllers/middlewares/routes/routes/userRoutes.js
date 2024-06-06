const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/me', authMiddleware, userController.getUser);
router.post('/account', authMiddleware, userController.createAccount);
router.get('/account', authMiddleware, userController.getAccount);

module.exports = router;
