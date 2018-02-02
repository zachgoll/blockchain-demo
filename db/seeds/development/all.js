exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('companies').insert({secret_phrase: 'ul2017', name: 'Underwriters Laboratories'}),
    () => {});
};