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

function getAllQuestions() {
    return knex('user_questions as uq')
        .select('*')
        .orderBy('uq.upvotes', 'desc').limit(10);
}

function getSessionQuestions(sessionId) {
    return knex('user_questions as uq')
        .select('uq.id', 'uq.user_id', 'uq.question', 'uq.answer', 'uq.answered_by', 'uq.upvotes')
        .innerJoin('user_profile', 'uq.user_id', 'user_profile.id')
        .where('user_profile.session', sessionId)
        .orderBy('uq.upvotes', 'desc');
}

function getQuestionSubscriptions(userId) {
    return knex('votes').where('user_id', userId);
}

function getQuestionSubscriptionsAll() {
    return knex('votes').select('*');
}

function subscribeQuestion(vote) {
    return knex('votes').insert(vote);
}

function deleteQuestionSub(u_id, q_id) {
    return knex('votes')
        .where({
            user_id: parseInt(u_id),
            question_id: parseInt(q_id)
        })
        .del();
}

function deleteQuestionSubAll(q_id) {
    return knex('votes')
        .where('question_id', parseInt(q_id))
        .del();
}

function deleteQuestion(id) {
    return knex('user_questions').del().where('id', id);
}

function incrementUpvote(questionId) {
    return knex('user_questions').where('id', questionId).increment('upvotes', 1);
}

function decrementUpvote(questionId) {
    return knex('user_questions').where('id', questionId).decrement('upvotes', 1);
}

function addCompany(company) {
    return knex('companies').insert(company);
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
    getKeypair: getKeypair,
    deleteQuestion: deleteQuestion,
    getAllQuestions: getAllQuestions,
    getSessionQuestions: getSessionQuestions,
    incrementUpvote: incrementUpvote,
    getQuestionSubscriptions: getQuestionSubscriptions,
    subscribeQuestion: subscribeQuestion,
    deleteQuestionSub: deleteQuestionSub,
    getQuestionSubscriptionsAll: getQuestionSubscriptionsAll,
    deleteQuestionSubAll: deleteQuestionSubAll,
    decrementUpvote: decrementUpvote,
    addCompany: addCompany
}