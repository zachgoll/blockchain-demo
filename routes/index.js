const Router = require('express').Router;
const router = Router();
const queries = require('./../db/user_queries');
const utxos = require('./utxo');
const blocks = require('./block');
const txs = require('./tx');
const passport = require('passport');
const keythereum = require('keythereum');

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

router.put('/:username/image', (req, res, next) => {
    const username = req.params.username;

    queries.editUser(username, {picture_url: req.body.picture})
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err);
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

router.post('/:id/question', (req, res, next) => {
    const id = req.params.id;

    queries.postUserQuestion(id, req.body.question)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/questions', (req, res, next) => {
    const id = req.params.id;
    
    queries.getQuestionsById(id)
        .then((questions) => {
            res.status(200).json(questions);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/keypair/:id', (req, res, next) => {
    const id = req.params.id;


    
    queries.getKeypair(id)
        .then((keypair) => {
            res.status(200).json(keypair);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/generate-keypair', (req, res, next) => {
    const id = req.body.user_id;

    var params = { keyBytes: 32, ivBytes: 16 };

    // synchronous
    var dk = keythereum.create(params);

    var pw = "not important";
    var kdf = 'pbkdf2';

    var options = {
    kdf: "pbkdf2",
    cipher: "aes-128-ctr",
    kdfparams: {
        c: 262144,
        dklen: 32,
        prf: "hmac-sha256"
    }
    };

    var keyObject = keythereum.dump(pw, dk.privateKey, dk.salt, dk.iv, options);
    var priv = keythereum.recover(pw, keyObject);

    let keypair = {
        user_id: id,
        pub_key: '0x' + keyObject.address,
        priv_key: priv.toString('hex')
    };

    queries.generateKeypair(keypair)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;