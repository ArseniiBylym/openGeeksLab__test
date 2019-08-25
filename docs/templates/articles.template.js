/**
 * @api {get} /api/articles Get all articles or only one category
 * @apiGroup Articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles?category=5d5fa99f61248607380a15a8
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam (Query string) {String} [category] Category id 
 * 
 * @apiSuccess {String} _id Article id
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} subTitle Article subtitle
 * @apiSuccess {String} text Article text
 * @apiSuccess {String} [imageUrl] Article image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Article create date
 * @apiSuccess {String} updatedAt Article update date
 * @apiSuccess {String} __v Article version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * [
 *    {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Article 1",
 *       "subTitle": "subtitle",
 *       "text": "lorem",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "category": "5d5fa99f61248607380a15a8",
 *       "createdAt": "2019-08-23T10:16:14.046Z",
 *       "updatedAt": "2019-08-23T10:16:14.046Z",
 *       "__v": 0
 *   },
 *   {
 *       "_id": "5d5fbd0d5e375b1db0d11139",
 *       "title": "Article 2",
 *       "subTitle": "subtitle",
 *       "text": "lorem",
 *       "category": "5d5fa8e471cade1db8cbc7fa",
 *       "createdAt": "2019-08-23T10:16:45.072Z",
 *       "updatedAt": "2019-08-23T10:16:45.072Z",
 *       "__v": 0
 *   },
 * ]
 * @apiError {String} ArticlesNotFound Articles not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Articles not found"
 */


 
 /**
 * @api {get} /api/articles/:id Get article or parent categories list
 * @apiGroup Articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles/5d5fa8e471cade1db8cbc7fa
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles/5d5fa8e471cade1db8cbc7fa?getParents=true
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam (Query string) {Boolean} [getParents] Get array of parent categories
 * 
 * @apiSuccess {String} _id Article id
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} subTitle Article subtitle
 * @apiSuccess {String} text Article text
 * @apiSuccess {String} [imageUrl] Article image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Article create date
 * @apiSuccess {String} updatedAt Article update date
 * @apiSuccess {String} __v Article version
 * 
 * @apiSuccessExample {json} 200 Success-Response:
 * HTTP/1.1 200 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Article 1",
 *       "subTitle": "subtitle",
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
 * @apiError {String} ArticleNotFound Article not found
 * @apiErrorExample {json} 404 Error-Response:
 * HTTP/1.1 404 Not Found
 *  "Article not found"
 */


 
 /**
 * @api {post} /api/articles Create new article
 * @apiGroup Articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} title Article title 
 * @apiParam {String} subTitle Article subtitle 
 * @apiParam {String} text Article text 
 * @apiParam {String} category Article category id 
 * @apiParam {String} [imageUrl] Article image 
 * 
 * @apiSuccess {String} _id Article id
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} subTitle Article subtitle
 * @apiSuccess {String} text Article text
 * @apiSuccess {String} [imageUrl] Article image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Article create date
 * @apiSuccess {String} updatedAt Article update date
 * @apiSuccess {String} __v Article version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Article 1",
 *       "subTitle": "subtitle",
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
 * @api {put} /api/articles/:id Update article
 * @apiGroup Articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles/5d5fbcee5e375b1db0d11138
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiParam {String} title Article title 
 * @apiParam {String} subTitle Article subtitle 
 * @apiParam {String} text Article text 
 * @apiParam {String} category Article category id 
 * @apiParam {String} [imageUrl] Article image 
 * 
 * @apiSuccess {String} _id Article id
 * @apiSuccess {String} title Article title
 * @apiSuccess {String} subTitle Article subtitle
 * @apiSuccess {String} text Article text
 * @apiSuccess {String} [imageUrl] Article image
 * @apiSuccess {String} category Category id
 * @apiSuccess {String} createdAt Article create date
 * @apiSuccess {String} updatedAt Article update date
 * @apiSuccess {String} __v Article version
 * 
 * @apiSuccessExample {json} 201 Success-Response:
 * HTTP/1.1 201 OK
 * {
 *       "_id": "5d5fbcee5e375b1db0d11138",
 *       "title": "Article 1",
 *       "subTitle": "subtitle",
 *       "imageUrl": "http://pinterest.com/image.jpg"
 *       "text": "lorem",
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
 * @api {delete} /api/articles/:id Delete article
 * @apiGroup Articles
 * @apiExample {js} Request example
 * http://localhost:5000/api/articles/5d5fbcee5e375b1db0d11138
 * 
 * @apiHeader {String} Content-Type application/json
 * 
 * @apiSuccess {String} id Article id
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


