/**
 * @api {get} /api/recipes Get all recipes or only one category
 * @apiGroup Recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes?category=5d5fa99f61248607380a15a8
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam (Query string) {String} [category] Category id 
 * 
 * @apiSuccess {String} _id Recipe id
 * @apiSuccess {String} title Recipe title
 * @apiSuccess {String} text Recipe text
 * @apiSuccess {String} [imageUrl] Recipe image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Recipe create date
 * @apiSuccess {String} updatedAt Recipe update date
 * @apiSuccess {String} __v Recipe version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * [
 *    {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Recipe 1",
 *       "text": "lorem",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "category": "5d5fa99f61248607380a15a8",
 *       "createdAt": "2019-08-23T10:16:14.046Z",
 *       "updatedAt": "2019-08-23T10:16:14.046Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5d5fbd0d5e375b1db0d11139",
 *       "title": "Recipe 2",
 *       "text": "lorem",
 *       "category": "5d5fa8e471cade1db8cbc7fa",
 *       "createdAt": "2019-08-23T10:16:45.072Z",
 *       "updatedAt": "2019-08-23T10:16:45.072Z",
 *       "__v": 0
 *   },
 * ]
 * @apiError {String} RecipesNotFound Recipes not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Recipes not found"
 */


 
 /**
 * @api {get} /api/recipes/:id Get recipe or parent categories list
 * @apiGroup Recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes/5d5fa8e471cade1db8cbc7fa
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes/5d5fa8e471cade1db8cbc7fa?getParents=true
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam (Query string) {Boolean} [getParents] Get array of parent categories
 * 
 * @apiSuccess {String} _id Recipe id
 * @apiSuccess {String} title Recipe title
 * @apiSuccess {String} text Recipe text
 * @apiSuccess {String} [imageUrl] Recipe image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Recipe create date
 * @apiSuccess {String} updatedAt Recipe update date
 * @apiSuccess {String} __v Recipe version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Recipe 1",
 *       "text": "lorem",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "category": "5d5fa99f61248607380a15a8",
 *       "createdAt": "2019-08-23T10:16:14.046Z",
 *       "updatedAt": "2019-08-23T10:16:14.046Z",
 *       "__v": 0
 * }
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * [
 *      {
 *      "parent": "5d5fa8e471cade1db8cbc7fa",
 *       "_id": "5d5fa99f61248607380a15a8",
 *       "name": "second dinners",
 *       "createdAt": "2019-08-23T08:53:51.658Z",
 *       "updatedAt": "2019-08-23T08:53:51.658Z",
 *       "__v": 0
 *    },
 *    {
 *       "parent": "null",
 *       "_id": "5d5fa8e471cade1db8cbc7fa",
 *       "name": "dinners",
 *       "createdAt": "2019-08-23T08:53:51.658Z",
 *       "updatedAt": "2019-08-23T08:53:51.658Z",
 *       "__v": 0
 *    }
 * ]
 * 
 * @apiError {String} RecipeNotFound Recipe not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Recipe not found"
 */


 
 /**
 * @api {post} /api/recipes Create new recipe
 * @apiGroup Recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} title Recipe title 
 * @apiParam {String} text Recipe text 
 * @apiParam {String} category Recipe category id 
 * @apiParam {String} [imageUrl] Recipe image 
 * 
 * @apiSuccess {String} _id Recipe id
 * @apiSuccess {String} title Recipe title
 * @apiSuccess {String} text Recipe text
 * @apiSuccess {String} [imageUrl] Recipe image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Recipe create date
 * @apiSuccess {String} updatedAt Recipe update date
 * @apiSuccess {String} __v Recipe version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Recipe 1",
 *       "text": "lorem",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "category": "5d5fa99f61248607380a15a8",
 *       "createdAt": "2019-08-23T10:16:14.046Z",
 *       "updatedAt": "2019-08-23T10:16:14.046Z",
 *       "__v": 0
 * }
 * 
 * @apiError {Object} ValidationErrors Validation errors array
 * @apiErrorExample {json} 400 Bad Request
 * HTTP/1.1 400 Bad Request
 * [
 *  {
 *       "msg": "Text is required",
 *       "param": "text",
 *       "location": "body"
 *   },
 *   {
 *       "msg": "Category is required",
 *       "param": "category",
 *       "location": "body"
 *   }
 * ]
 */



 
 /**
 * @api {put} /api/recipes/:id Update recipe
 * @apiGroup Recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes/5d5fbcee5e375b1db0d11138
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} title Recipe title 
 * @apiParam {String} text Recipe text 
 * @apiParam {String} category Recipe category id 
 * @apiParam {String} [imageUrl] Recipe image 
 * 
 * @apiSuccess {String} _id Recipe id
 * @apiSuccess {String} title Recipe title
 * @apiSuccess {String} text Recipe text
 * @apiSuccess {String} [imageUrl] Recipe image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Recipe create date
 * @apiSuccess {String} updatedAt Recipe update date
 * @apiSuccess {String} __v Recipe version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Recipe 1",
 *       "text": "lorem",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "category": "5d5fa99f61248607380a15a8",
 *       "createdAt": "2019-08-23T10:16:14.046Z",
 *       "updatedAt": "2019-08-23T10:16:14.046Z",
 *       "__v": 0
 * }
 * 
 * @apiError {Object} ValidationErrors Validation errors array
 * @apiErrorExample {json} 400 Bad Request
 * HTTP/1.1 400 Bad Request
 * [
 *  {
 *       "msg": "Text is required",
 *       "param": "text",
 *       "location": "body"
 *   },
 *   {
 *       "msg": "Category is required",
 *       "param": "category",
 *       "location": "body"
 *   }
 * ]
 */


 
 /**
 * @api {delete} /api/recipes/:id Delete recipe
 * @apiGroup Recipes
 * @apiExample {js} Request example
 * http://localhost:5000/api/recipes/5d5fbcee5e375b1db0d11138
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiSuccess {String} id Recipe id
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * "5d5fbcee5e375b1db0d11138"
 * 
 * @apiError {String} ServerError Server error
 * 
 * @apiErrorExample {json} 500 Error-Response:
 * HTTP/1.1 500 Server Error
 * {
 *    "message": "Server error message"
 * }
 */


