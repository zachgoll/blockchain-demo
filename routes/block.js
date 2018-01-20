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

router.get('/incoming', (req, res, next) => {
    queries.getIncomingBlocks()
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

module.exports = router;