const {Router} = require('express');
const categoryController = require('../controllers/category.controller');
const {categoryValidator} = require('../middlewares/validators');

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getItem);
router.post('/', categoryValidator, categoryController.add);
router.put('/:id', categoryValidator, categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
