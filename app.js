const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const userRoutes = require('./routes/user');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();

if (process.env.NODE_ENV !== 'test'){
    app.use(logger('dev'));
}

// Connects front end to backend
app.use(cors());

// Parses http res data
app.use(bodyParser.json());

// Where angular builds to
app.use(express.static(path.join(__dirname, 'public')));

// Routes middleware
app.use('/api/v1', routes);

// Routes middleware
app.use('/users', userRoutes);

/**
 * Error handlers for different environments
 * Note: app.get('env') is equivalent to process.env.NODE_ENV, except
 * it defaults to 'development' if no NODE_ENV is set
 */

// Development error handler
if (app.get('env') === 'development'){
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}


// Production error handler
if (app.get('env') === 'production'){
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;