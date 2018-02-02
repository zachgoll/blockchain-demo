var knex = require('./knex');

function User() {
    return knex('user_profile')
}

function getAllUsers() {
    return User().select();
}

function getUserById(id) {
    return User().where('id', parseInt(id)).first();
}

function getUserByUsername(username) {
    return User().where('username', username).first();
}

function postUser(user) {
    return User().insert(user, 'id');
}

function editUser(username, update) {
    return User()
        .where('username', username)
        .first()
        .update(update);
}

function editUserById(user_id, update) {
    return User()
        .where('id', user_id)
        .first()
        .update(update);
}

function postUserQuestion(id, question) {
    return knex('user_questions').insert({
        user_id: id,
        question: question
    });
}

function getQuestionsById(id) {
    return knex('user_questions').where('user_id', id);
}

function generateKeypair(keypair) {
    return knex('user_keypairs').insert(keypair);
}

function getKeypair(id) {
    return knex('user_keypairs').where('user_id', id).first();
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    postUser: postUser,
    getUserByUsername: getUserByUsername,
    editUser: editUser,
    editUserById: editUserById,
    postUserQuestion: postUserQuestion,
    getQuestionsById: getQuestionsById,
    generateKeypair: generateKeypair,
    getKeypair: getKeypair
}