exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('utxo').del(),
    knex('user_profile').del(),
    () => {});
};