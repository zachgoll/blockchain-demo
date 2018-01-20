const Router = require('express').Router;
const router = Router();
const queries = require('./../db/user_queries');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function comparePw(password, hash, callback) {
    bcrypt.compare(password, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

router.post('/new', (req, res, next) => {
    
    let user = {
        username: req.body.username,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        password: req.body.password
    };

    return bcrypt.genSalt(10)
    .then((salt) => {
        return bcrypt.hash(user.password, salt);
    })
    .then((hash) => {
        user.password = hash;
        return queries.postUser(user);
    })
    .then((userId) => {
        return queries.getUserById(userId);
    })
    .then((user) => {
        res.status(200).json(user);
    })
    .catch((err) => {
        next(err);
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    queries.getUserByUsername(username)
        .then((user) => {
            if (!user){
                res.json({success: false, msg: 'No user exists for this username'});
            } else {
                comparePw(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if(isMatch){
                        const token = jwt.sign({data: user}, 'secret-key', {
                            expiresIn: 604800
                        });

                        res.status(200).json({
                            success: true,
                            token: 'Bearer ' + token,
                            user: {
                                id: user.id,
                                username: user.username
                            }
                        });
                    } else {
                        res.json({success: false, msg: 'Wrong password'});
                    }
                });
            }   
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:username', (req, res, next) => {
    const username = req.params.username;

    queries.getUserByUsername(username)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            next(err);
        })
});


router.get('/profile', (req, res, next) => {
	res.json({user: "anything"});
});

module.exports = router;