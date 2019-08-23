const path = require(`path`);
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const PORT = process.env.PORT || 5000;
const app = express();

const categoryRouter = require('./routes/category.route');
const articleRouter = require('./routes/article.route');
const recipeRouter = require('./routes/recipe.route');

// Middlewares
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

// Main routes
app.use('/api/categories', categoryRouter);
app.use('/api/articles', articleRouter);
app.use('/api/recipes', recipeRouter);

// Error handling
app.use((err, req, res, next) => {
    const {statusCode = 500, message, errors} = err;
    return res.status(statusCode).json({message, errors});
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

mongoose
    .connect(MONGO_DB_URI, {useNewUrlParser: true})
    .then(() => {
        app.listen(PORT);
        console.log(`Server listen on port ${PORT}`);
    })
    .catch(error => {
        console.log('Connection error', error)
    });
