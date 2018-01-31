const Router = require('express').Router;
const router = Router();
const queries = require('./../db/block_queries');

router.get('/', (req, res, next) => {
    queries.getAllBlocks()
        .then((blocks) => {
            res.status(200).json(blocks);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/incoming/:id', (req, res, next) => {
    const user_id = req.params.id;

    queries.getIncomingBlocks(user_id)
        .then((blocks) => {
            return res.status(200).json(blocks);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/user/:id', (req, res, next) => {
    const id = req.params.id;

    queries.getUserBlockchain(id)
        .then((blocks) => {
            return res.status(200).json(blocks);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id/txs', (req, res, next) => {
    const block_id = req.params.id;
    
    queries.getBlockTxs(block_id)
        .then((txs) => {
            return res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    
    queries.getBlockById(id)
        .then((block) => {
            res.status(200).json(block);
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/txs/:id', (req, res, next) => {
    const id = req.params.id;
    
    queries.getBlockTxs(id)
        .then((txs) => {
            res.status(200).json(txs);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/new', (req, res, next) => {
    queries.postBlock(req.body)
        .then((blockId) => {
            return queries.getBlockById(blockId);
        })
        .then((block) => {
            res.status(200).json(block);
        })
        .catch((err) => {
            next(err);
        });
});

/*
 table.increments().primary();
            table.integer('height');
            table.string('block_hash');
            table.string('previous_block');
            table.string('merkle_root');
            table.timestamps(true, true);
            table.integer('nonce');
            table.integer('num_txs');
            */

router.post('/bind', (req, res, next) => {
    queries.bindBlock(req.body)
        .then((block) => {
            res.status(200).json(block);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/reject', (req, res, next) => {
    queries.rejectBlock(req.body)
        .then((block) => {
            res.status(200).json(block);
        })
        .catch((err) => {
            next(err);
        });
});

router.post('/bind-tx', (req, res, next) => {
    queries.bindTxToBlock(req.body)
        .then((tx) => {
            res.status(200).json(tx);
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;