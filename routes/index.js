const Router = require('express').Router;
const router = Router();
const queries = require('./../db/user_queries');
const utxos = require('./utxo');
const blocks = require('./block');
const txs = require('./tx');
const passport = require('passport');

router.use('/utxos', utxos);
router.use('/txs', txs);
router.use('/blocks', blocks);

router.get('/users', (req, res, next) => {
    queries.getAllUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/users/:id', (req, res, next) => {
    const id = req.params.id;
    
    queries.getUserById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;