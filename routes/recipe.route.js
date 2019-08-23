const {Router} = require('express');
const recipeController = require('../controllers/recipe.controller');
const {recipeValidator} = require('../middlewares/validators');

const router = Router();

router.get('/', recipeController.getAll);
router.get('/:id', recipeController.getItem);
router.post('/', recipeValidator, recipeController.add);
router.put('/:id', recipeValidator, recipeController.update);
router.delete('/:id', recipeController.delete);

module.exports = router;
