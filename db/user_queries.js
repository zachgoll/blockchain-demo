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



module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    postUser: postUser,
    getUserByUsername: getUserByUsername
}