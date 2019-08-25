const {Router} = require('express');
const articleController = require('../controllers/article.controller');
const {articleValidator} = require('../middlewares/validators');

const router = Router();

router.get('/', articleController.getAll);
router.get('/:id', articleController.getItem);
router.post('/', articleValidator, articleController.add);
router.put('/:id', articleValidator, articleController.update);
router.delete('/:id', articleController.delete);

module.exports = router;
