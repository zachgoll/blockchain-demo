const Router = require('express').Router;
const router = Router();
const Web3 = require('web3');
const queries = require('./../db/tx_queries');
const utxoQueries = require('./../db/utxo_queries');

const sha3 = new Web3().extend.utils.sha3;

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

router.get('/incoming/:id', (req, res, next) => {
    const user_id = req.params.id;

    queries.getIncomingTxs(user_id)
        .then((txs) => {
            return res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    const user_id = req.params.id;
    
    queries.getTxsById(user_id)
        .then((txs) => {
            res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/tx/:id', (req, res, next) => {
    const tx_id = req.params.id;
    
    queries.getTxById(tx_id)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

/**
 * Creation of a new Transaction
 * Must send a post body of: 
 * {
 *       "from": 3,
 *       "tx": {
 *           "tx_hash": "test tx",
 *           "fee": 1
 *       },
 *       "inputs": [{
 *           "id": 63,
 *           "value": 18,
 *           "username": "j",
 *           "user_id": 3
 *       }],
 *       "outputs": [{
 *           "value": 14,
 *           "to": 2
 *       },
 *       {
 *           "value": 3,
 *           "to": 3
 *       }]
 *   }
 * 
 *  Returns the newly created transaction as json output
 */

router.post('/new', (req, res, next) => {
    const inputs = req.body.inputs;
    const outputs = req.body.outputs;
    const from = req.body.from;
    let tId;

    queries.postTx(req.body.tx)
        .then((txId) => {
            
            // Set tx id for later
            tId = txId[0];

            // Create Inputs
            inputs.forEach((input) => {
                utxoQueries.deleteUtxo(from, input.id)
                    .then(() => {
                        let spend = {user_id: from, utxo_id: input.id};
                        return utxoQueries.spendUtxo(spend);
                    })
                    .then((utxo) => {
                        let inp = {tx_id: txId[0], utxo_id: input.id};
                        return queries.createTxInput(inp);
                    })
                    .catch((err) => console.log(err));
            });
            
            // Create Outputs, add outputs to tx, add outputs to utxos
            outputs.forEach((output) => {
                let uId;
                if (output.value > 0) {
                    utxoQueries.postUtxo({value: output.value, current_owner: output.to})
                    .then((utxoId) => {
                        uId = utxoId[0];
                        return utxoQueries.bindUtxo({user_id: from, utxo_id: uId});
                    })
                    .then(() => {
                        return queries.createTxOutput({tx_id: txId[0], utxo_id: uId});
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                }
            });
        })
        .then(() => {
            return queries.getTxById(tId);
        })
        .then((tx) => {
            const hash = {tx_hash: sha3(tx.id.toString())};
            return queries.editTx(tx.id, hash);
        })
        .then((tx) => {
            return queries.getTxById(tId);
        })
        .then((tx) => {
            let t = {tx_id: tId, user_id: from};
            return queries.bindTx(t);
        })
        .then(() => {
            return queries.getTxById(tId);
        })
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});


router.post('/newinput', (req, res, next) => {
    queries.createTxInput(req.body)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/bind', (req, res, next) => {
    queries.bindTx(req.body)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/reject', (req, res, next) => {
    queries.rejectTx(req.body)
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

router.post('/delete', (req, res, next) => {
    const user_id = req.body.user_id;
    const tx_id = req.body.tx_id;

    queries.deleteTx(user_id, tx_id)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;