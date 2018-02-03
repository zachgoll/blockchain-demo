exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return Promise.join(
        knex('user_profile').del(),
        knex('companies').del(),
        knex('companies').insert({secret_phrase: 'chainworksul2018', name: 'Underwriters Laboratories'}),
        () => {});
  };