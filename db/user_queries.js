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

function postUserQuestion(id, question) {
    return knex('user_questions').insert({
        user_id: id,
        question: question
    });
}

function getQuestionsById(id) {
    return knex('user_questions').where('user_id', id);
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    postUser: postUser,
    getUserByUsername: getUserByUsername,
    editUser: editUser,
    postUserQuestion: postUserQuestion,
    getQuestionsById: getQuestionsById
}