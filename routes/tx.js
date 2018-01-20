const Router = require('express').Router;
const router = Router();
const queries = require('./../db/tx_queries');

router.get('/:id/inputs', (req, res, next) => {
    const id = req.params.id;

    queries.getInputs(id)
        .then((inputs) => {
            res.status(200).json(inputs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/outputs', (req, res, next) => {
    const id = req.params.id;

    queries.getOutputs(id)
        .then((outputs) => {
            res.status(200).json(outputs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/', (req, res, next) => {
    queries.getAllTxs()
        .then((txs) => {
            res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

/*
      WHERE id NOT IN (SELECT tx_id FROM tx_subscriptions)
AND id NOT IN (SELECT tx_id FROM tx_rejections);
*/

router.get('/incoming', (req, res, next) => {
    queries.getIncomingTxs()
        .then((txs) => {
            return res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    queries.getTxById(id)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

/**
 * Takes in an object
 * {
 *      utxo: {
 *          value: 2
 *      },
 *      user_id: 1,
 *      tx_id: 1
 * }
 *
 * creates a new utxo, and then binds it to the given tx
 */
router.post('/outputs/new', (req, res, next) => {
    let u_id;
    queries.postUtxo(req.body.utxo)
        .then((utxoId) => {
            return queries.getUtxoById(utxoId);
        })
        .then((utxo) => {
            u_id = utxo.id;
            return queries.createTxOutput({
                tx_id: req.body.tx_id,
                utxo_id: utxo.id
            });
        })
        .then(() => {
            return queries.bindUtxo({
                user_id: req.body.user_id,
                utxo_id: u_id
            });
        })
        .then(() => {
            return queries.getOutputs(req.body.tx_id);
        })
        .then((outputs) => {
            res.status(200).json(outputs);
        })
        .catch((err) => {
            next(err);
        });
});

/**
 * Takes in object
 * {
 *  utxo_id: ,
 *  tx_id: ,
 *  user_id
 * }
 */

router.post('/inputs/new', (req, res, next) => {
    
    let input = {
        tx_id: req.body.tx_id,
        utxo_id: req.body.utxo_id
    };

    let spend = {
        user_id: req.body.user_id,
        utxo_id: req.body.utxo_id
    };

    queries.createTxInput(input)
        .then(() => {
            return queries.deleteUtxo(req.body.utxo_id, req.body.user_id);
        })
        .then(() => {
            return queries.spendUtxo(spend);
        })
        .then(() => {
            return queries.getInputs(req.body.tx_id);
        })
        .then((inputs) => {
            res.status(200).json(inputs);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/new', (req, res, next) => {
    queries.postTx(req.body)
        .then((txId) => {
            return queries.getTxById(txId);
        })
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    queries.editTx(id, req.body)
        .then((txId) => {
            return queries.getTxById(txId);
        })
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;