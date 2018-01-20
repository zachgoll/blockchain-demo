const Router = require('express').Router;
const router = Router();
const queries = require('./../db/utxo_queries');

router.get('/spent', (req, res, next) => {
    queries.getSpentUtxos()
        .then((utxos) => {
            res.status(200).json(utxos);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/unspent', (req, res, next) => {
    queries.getUnspentUtxos()
        .then((utxos) => {
            res.status(200).json(utxos);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    queries.getUtxoById(id)
        .then((utxo) => {
            res.status(200).json(utxo);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/all', (req, res, next) => {
    const id = req.params.id;

    queries.getUserUtxos(id)
        .then((utxos) => {
            res.status(200).json(utxos);
        })
        .catch((err) => {
            next(err);
        });
});


router.post('/new', (req, res, next) => {
    queries.postUtxo(req.body)
        .then((utxoId) => {
            return queries.getUtxoById(utxoId);
        })
        .then((utxo) => {
            res.status(200).json(utxo);
        })
        .catch((err) => {
            next(err);
        });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    queries.editUtxo(id, req.body)
        .then((utxoId) => {
            return queries.getUtxoById(utxoId);
        })
        .then((utxo) => {
            res.status(200).json(utxo);
        })
        .catch((err) => {
            next(err);
        });
});

router.delete('/:user_id/:utxo_id/delete', (req, res, next) => {
    const uid = req.params.user_id;
    const utid = req.params.utxo_id;

    queries.deleteUtxo(uid, utid)
        .then(() => {
            res.status(200).send('Deleted');
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;