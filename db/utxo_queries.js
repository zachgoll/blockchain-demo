var knex = require('./knex');

function Utxo() {
    return knex('utxo');
}

function getSpentUtxos() {
    return knex('spent_utxos').select('*');
}


function getUnspentUtxos(userId) {

    return knex('utxos').distinct('utxos.utxo_id').select('*')
        .innerJoin('utxo', 'utxos.utxo_id', 'utxo.id')
        .where('utxos.user_id', userId);
}

function getUtxoById(id) {
    return Utxo().where('id', parseInt(id)).first();
}

function postUtxo(utxo) {
    return Utxo().insert(utxo, 'id');
}

function editUtxo(id, updates) {
    return Utxo().where('id', parseInt(id)).update(updates);
}

function spendUtxo(utxo) {
    return knex('spent_utxos').insert(utxo);
}

function bindUtxo(utxo) {
    return knex('utxos').insert(utxo);
}

function deleteUtxo(u_id, ut_id) {
    return knex('utxos')
        .where({
            user_id: parseInt(u_id),
            utxo_id: parseInt(ut_id)
        })
        .del();
}

function getUserUtxos(user_id) {
    return knex.from('utxos')
        .where('utxos.user_id', user_id);
}



module.exports = {
    getUnspentUtxos: getUnspentUtxos,
    getSpentUtxos: getSpentUtxos,
    getUtxoById: getUtxoById,
    postUtxo: postUtxo,
    editUtxo: editUtxo,
    deleteUtxo: deleteUtxo,
    bindUtxo: bindUtxo,
    getUserUtxos: getUserUtxos,
    spendUtxo: spendUtxo
}