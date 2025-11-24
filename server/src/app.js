const express = require('express');
const morgan = require('morgan'); // HTTP Request Logger
const errorHandler = require('./middleware/errorHandler.js');// Your custom error handler

const app = express();

// --- Middleware Setup ---
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev')); 
}
app.use(express.json()); 

// --- API Routes ---
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Example route that throws an error (for testing the handler)
app.get('/api/error-test', (req, res, next) => {
    const error = new Error('Intentional Test Error');
    res.statusCode = 404; 
    next(error); 
});


// --- Global Error Handling ---
app.use(errorHandler); 

module.exports = app;