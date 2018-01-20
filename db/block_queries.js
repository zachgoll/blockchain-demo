var knex = require('./knex');

function Block() {
    return knex('block')
}

function getAllBlocks() {
    return Block().select();
}

function getIncomingBlocks() {

    var block_subs = knex('block_subscriptions').select('block_id');
    var in_blockchain = knex('blockchain').select('block_id');
    
    return knex('block')
        .whereNotIn('id', block_subs)
        .whereNotIn('id', in_blockchain);
}

function getUserBlockchain(userId) {
    return knex('blockchain')
        .innerJoin('block', 'blockchain.block_id', 'block.id')
        .where('blockchain.user_id', userId)
        .orderBy('block.height', 'asc');
}

function getBlockTxs(blockId) {
    return knex('block_txs')
        .innerJoin('tx', 'block_txs.tx_id', 'tx.id')
        .where('block_txs.block_id', blockId);
}

function getBlockById(id) {
    return Block().where('id', parseInt(id)).first();
}

function postBlock(block) {
    return Block().insert(block, 'id');
}

module.exports = {
    getAllBlocks: getAllBlocks,
    getIncomingBlocks: getIncomingBlocks,
    getUserBlockchain: getUserBlockchain,
    getBlockTxs: getBlockTxs,
    getBlockById: getBlockById,
    postBlock: postBlock
}