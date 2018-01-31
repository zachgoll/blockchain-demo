var knex = require('./knex');

function Tx() {
    return knex('tx');
}

/**
 * 
 *  SELECT * FROM tx WHERE tx.id NOT IN (SELECT tx_id FROM tx_subscriptions
 *  INNER JOIN tx ON tx_subscriptions.tx_id = tx.id
 *  WHERE user_id = 6)}
 */
function getIncomingTxs(userId) {

    var tx_subs = knex('tx_subscriptions')
        .select('tx_id')
        .innerJoin('tx', 'tx_subscriptions.tx_id', 'tx.id')
        .where('tx_subscriptions.user_id', userId);
    var tx_rej = knex('tx_rejections')
        .select('tx_id')
        .innerJoin('tx', 'tx_rejections.tx_id', 'tx.id')
        .where('tx_rejections.user_id', userId);
    var txs_in_blocks = knex('block_txs')
        .select('block_txs.tx_id')
        .innerJoin('block_subscriptions', 'block_subscriptions.block_id', 'block_txs.block_id')
        .where('block_subscriptions.user_id', userId);
    
    return knex('tx')
        .whereNotIn('tx.id', tx_subs)
        .whereNotIn('tx.id', tx_rej)
        .whereNotIn('tx.id', txs_in_blocks);
}

function getAllTxs() {
    return Tx().select();
}

function getTxsById(id) {
    return knex('tx_subscriptions').select('tx.id', 'tx.tx_hash', 'tx.fee', 'tx.coinbase').where('user_id', parseInt(id))
        .innerJoin('tx', 'tx_subscriptions.tx_id', 'tx.id');
}

function getTxById(id) {
    return Tx().where('id', parseInt(id)).first();
}

function createTxOutput(tx_output) {
    return knex('tx_outputs').insert(tx_output);
}

function createTxInput(tx_input) {
    return knex('tx_inputs').insert(tx_input);
}

function postTx(tx) {
    return Tx().insert(tx, 'id');
}

function bindTx(tx) {
    return knex('tx_subscriptions').insert(tx);
}

function rejectTx(tx) {
    return knex('tx_rejections').insert(tx);
}

function editTx(id, updates) {
    return Tx().where('id', parseInt(id)).update(updates);
}

function getInputs(tx_id) {
    let vals = [];

    return inputs = knex.from('tx')
        .select('utxo.id', 'utxo.value')
        .innerJoin('tx_inputs', 'tx_inputs.tx_id', 'tx.id')
        .innerJoin('utxo', 'tx_inputs.utxo_id', 'utxo.id')
        .where('tx.id', tx_id)
        .catch((err) => {
            console.log(err);
        });
}

function getOutputs(tx_id) {
    let vals = [];

    return inputs = knex.from('tx')
        .select('utxo.id', 'utxo.value')
        .innerJoin('tx_outputs', 'tx_outputs.tx_id', 'tx.id')
        .innerJoin('utxo', 'tx_outputs.utxo_id', 'utxo.id')
        .where('tx.id', tx_id)
        .catch((err) => {
            console.log(err);
        });
}

function deleteTx(user_id, tx_id) {
    return knex('tx_subscriptions')
        .where({
            user_id: parseInt(user_id),
            tx_id: parseInt(tx_id)
        })
        .del();
}

module.exports = {
    getIncomingTxs: getIncomingTxs,
    getAllTxs: getAllTxs,
    getTxsById: getTxsById,
    getTxById: getTxById,
    postTx: postTx,
    editTx: editTx,
    getInputs: getInputs,
    getOutputs: getOutputs,
    createTxOutput: createTxOutput,
    createTxInput: createTxInput,
    bindTx: bindTx,
    rejectTx: rejectTx,
    deleteTx: deleteTx
}
