const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const userRoutes = require('./routes/user');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const multer = require('multer');

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, callback){
        // Name the file
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Check file type
function checkFileType(file, callback){
    // Allowed file extension types
    const filetypes = /jpeg|jpg|png|gif/;

    // Check extension
    const extName = filetypes.test(path.extname
    (file.originalname).toLowerCase());

    // Check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extName){
        return callback(null, true);
    } else {
        callback('Error: image filetypes only!')
    }
}

// Initialize upload variable
const upload = multer({
    storage: storage,
    limits: {fileSize: 5000000},
    fileFilter: function(req, file, callback){
        checkFileType(file, callback);
    }
}).single('photo');

const app = express();

if (process.env.NODE_ENV !== 'test'){
    app.use(logger('dev'));
}

// Connects front end to backend
app.use(cors());

// Parses http res data
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Where angular builds to
app.use(express.static(path.join(__dirname, 'public')));

// Routes middleware
app.use('/api/v1', routes);

// Routes middleware
app.use('/users', userRoutes);

app.post('/upload', (req, res, next) => {
    var path = '';
    upload(req, res, (err) => {
        if(err) {
            return res.status(422).json({
                success: false, 
                msg: "Images less than 5 MB only!"
            });
        }
        path = req.file.path;
        return res.send({
            success: true, 
            msg: "Uploaded!",
            file: `uploads/${req.file.filename}`
        });
    });
});

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