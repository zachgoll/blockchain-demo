var knex = require('./knex');

function Tx() {
    return knex('tx');
}

function getIncomingTxs() {

    var tx_subs = knex('tx_subscriptions').select('tx_id');
    var tx_rej = knex('tx_rejections').select('tx_id');
    
    return knex('tx')
        .whereNotIn('id', tx_subs)
        .whereNotIn('id', tx_rej);
}

function getAllTxs() {
    return Tx().select();
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

function editTx(id, updates) {
    return Tx().where('id', parseInt(id)).update(updates);
}

function getInputs(tx_id) {
    let vals = [];

    return inputs = knex.from('tx')
        .select('utxo.value')
        .innerJoin('tx_inputs', 'tx_inputs.tx_id', 'tx.id')
        .innerJoin('utxo', 'tx_inputs.utxo_id', 'utxo.id')
        .where('tx.id', tx_id)
        .then((res) => {
            res.forEach((input) => {
                vals.push(input.value);
            });
            return vals;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getOutputs(tx_id) {
    let vals = [];

    return inputs = knex.from('tx')
        .select('utxo.value')
        .innerJoin('tx_outputs', 'tx_outputs.tx_id', 'tx.id')
        .innerJoin('utxo', 'tx_outputs.utxo_id', 'utxo.id')
        .where('tx.id', tx_id)
        .then((res) => {
            res.forEach((input) => {
                vals.push(input.value);
            });
            return vals;
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    getIncomingTxs: getIncomingTxs,
    getAllTxs: getAllTxs,
    getTxById: getTxById,
    postTx: postTx,
    editTx: editTx,
    getInputs: getInputs,
    getOutputs: getOutputs,
    createTxOutput: createTxOutput,
    createTxInput: createTxInput
}
