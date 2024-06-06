const router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const transactionController = require('../controllers/transactionController');

router.post('/deposit', authMiddleware, transactionController.deposit);
router.post('/withdrawal', authMiddleware, transactionController.withdrawal);

module.exports = router;
