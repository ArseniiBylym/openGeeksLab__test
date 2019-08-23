/**
 * @api {get} /api/categories Get all categories
 * @apiGroup Categories
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiSuccess {String} _id Category id
 * @apiSuccess {String} name Category name
 * @apiSuccess {String} parent Parent category id
 * @apiSuccess {String} createdAt Category create date
 * @apiSuccess {String} updatedAt Category update date
 * @apiSuccess {String} __v Category version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * [
 *    {
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
 * @apiError {String} CategoriesNotFound Categories not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Categories not found"
 */



 /**
 * @api {get} /api/categories/:id Get category or parent categories
 * @apiGroup Categories
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories/5d5fa8e471cade1db8cbc7fa
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories/5d5fa8e471cade1db8cbc7fa?getParents=true
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam (Query string) {Boolean} getParents Get array of parent categories(optional)
 * 
 * @apiSuccess {String} _id Category id
 * @apiSuccess {String} name Category name
 * @apiSuccess {String} parent Parent category id
 * @apiSuccess {String} createdAt Category create date
 * @apiSuccess {String} updatedAt Category update date
 * @apiSuccess {String} __v Category version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * {
 *    "parent": "5d5fa8e471cade1db8cbc7fa",
 *    "_id": "5d5fa99f61248607380a15a8",
 *    "name": "second dinners",
 *    "createdAt": "2019-08-23T08:53:51.658Z",
 *    "updatedAt": "2019-08-23T08:53:51.658Z",
 *    "__v": 0
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
 * @apiError {String} CategoryNotFound Category not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Category not found"
 */


 /**
 * @api {post} /api/categories Create new category
 * @apiGroup Categories
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} name Category name (required)
 * @apiParam {String} parent Parent category id (optional)
 * 
 * @apiSuccess {String} _id Category id
 * @apiSuccess {String} name Category name
 * @apiSuccess {String} parent Parent category id
 * @apiSuccess {String} createdAt Category create date
 * @apiSuccess {String} updatedAt Category update date
 * @apiSuccess {String} __v Category version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *   "parent": "5d5fa8e471cade1db8cbc7fa",
 *    "_id": "5d5fa99f61248607380a15a8",
 *    "name": "second dinners",
 *    "createdAt": "2019-08-23T08:53:51.658Z",
 *    "updatedAt": "2019-08-23T08:53:51.658Z",
 *    "__v": 0
 * }
 * 
 * @apiError {String} CategoriesNotFound Categories not found
 * @apiErrorExample {json} 500 Error-Response:
 * HTTP/1.1 500 Not Found
 * {
 *    "message": "Server error message"
 * }
 */



 /**
 * @api {put} /api/categories/:id Update category
 * @apiGroup Categories
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories/5d5fa99f61248607380a15a8
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} name(required) Category name
 * @apiParam {String} parent(optional) Parent category id
 * 
 * @apiSuccess {String} _id Category id
 * @apiSuccess {String} name Category name
 * @apiSuccess {String} parent Parent category id
 * @apiSuccess {String} createdAt Category create date
 * @apiSuccess {String} updatedAt Category update date
 * @apiSuccess {String} __v Category version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *   "parent": "5d5fa8e471cade1db8cbc7fa",
 *    "_id": "5d5fa99f61248607380a15a8",
 *    "name": "second dinners",
 *    "createdAt": "2019-08-23T08:53:51.658Z",
 *    "updatedAt": "2019-08-23T08:53:51.658Z",
 *    "__v": 0
 * }
 * 
 * @apiError {String} CategoriesNotFound Categories not found
 * @apiErrorExample {json} 500 Error-Response:
 * HTTP/1.1 500 Server error
 * {
 *    "message": "Server error message"
 * }
 */


 
 /**
 * @api {delete} /api/categories/:id Delete category
 * @apiGroup Categories
 * @apiExample {js} Request example
 * http://localhost:5000/api/categories/5d5fa99f61248607380a15a8
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiSuccess {String} id Deleted category id
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * "5d5fa8e471cade1db8cbc7fa"
 * 
 * @apiError {String} CategoriesNotFound Categories not found
 * @apiErrorExample {json} 500 Error-Response:
 * HTTP/1.1 500 Server error
 * {
 *    "message": "Server error message"
 * }
 */