var knex = require('./knex');

function Block() {
    return knex('block')
}

function getAllBlocks() {
    return Block().select();
}

function getIncomingBlocks(userId) {

    var block_subs = knex('block_subscriptions')
        .select('block_id')
        .innerJoin('block', 'block_subscriptions.block_id', 'block.id')
        .where('block_subscriptions.user_id', userId);
    var block_rej = knex('block_rejections')
        .select('block_id')
        .innerJoin('block', 'block_rejections.block_id', 'block.id')
        .where('block_rejections.user_id', userId);
    
    return knex('block')
        .whereNotIn('block.id', block_subs)
        .whereNotIn('block.id', block_rej);
}

function getUserBlockchain(userId) {
    return knex('block_subscriptions')
        .innerJoin('block', 'block_subscriptions.block_id', 'block.id')
        .where('block_subscriptions.user_id', userId)
        .orderBy('block.height', 'asc');
}

function getBlockTxs(blockId) {
    return knex('block_txs')
        .innerJoin('tx', 'block_txs.tx_id', 'tx.id')
        .where('block_txs.block_id', blockId)
        .orderBy('tx.coinbase', 'desc');
}

function getBlockById(id) {
    return Block().where('id', parseInt(id)).first();
}

function postBlock(block) {
    return Block().insert(block, 'id');
}

function bindBlock(block) {
    return knex('block_subscriptions').insert(block);
}

function rejectBlock(block) {
    return knex('block_rejections').insert(block);
}

function bindTxToBlock(tx) {
    return knex('block_txs').insert(tx);
}

module.exports = {
    getAllBlocks: getAllBlocks,
    getIncomingBlocks: getIncomingBlocks,
    getUserBlockchain: getUserBlockchain,
    getBlockTxs: getBlockTxs,
    getBlockById: getBlockById,
    postBlock: postBlock,
    bindBlock: bindBlock,
    rejectBlock: rejectBlock,
    bindTxToBlock: bindTxToBlock
}