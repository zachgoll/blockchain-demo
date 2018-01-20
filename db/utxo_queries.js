var knex = require('./knex');

function Utxo() {
    return knex('utxo');
}

function getSpentUtxos() {
    return knex('spent_utxos')
        .select('utxo.value', 'user_profile.f_name', 'user_profile.id')
        .innerJoin('user_profile', 'spent_utxos.user_id', 'user_profile.id')
        .innerJoin('utxo', 'utxo.id', 'spent_utxos.utxo_id');
}

function getUnspentUtxos() {
    return knex('utxos')
        .select('utxo.value', 'user_profile.f_name', 'user_profile.id')
        .innerJoin('user_profile', 'utxos.user_id', 'user_profile.id')
        .innerJoin('utxo', 'utxo.id', 'utxos.utxo_id');
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