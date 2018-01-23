exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('user_profile').del(),
    knex('utxo').del(),
    knex('block').del(),
    knex('tx').del(),
    knex('tx_inputs').del(),
    knex('tx_outputs').del(),
    knex('user_profile').insert({
      username: 'zachgoll',
      email: 'zach@chainworks.com',
      f_name: 'Zach',
      l_name: 'Gollwitzer',
      password: 'mypassword',
      picture_url: 'none',
      session: '1234'
    })
      .then(() => {
        return knex('utxo').insert([{value: 3.24}, {value: 5.34}, {value: 4.98}, {value: 3.5}, {value: 44.3}]);
      })
      .then(() => {
        return knex('utxos').insert([{user_id: 1, utxo_id: 1}, {user_id: 1, utxo_id: 2}]);
      })
      .then(() => {
        return knex('tx').insert([{fee: 0.1}, {fee: 0.3}, {fee: 0.5}, {fee: 0.6}]);
      })
      .then(() => {
        return knex('tx_inputs').insert([
          {tx_id: 1, utxo_id: 1},
          {tx_id: 1, utxo_id: 2}]);
      })
      .then(() => {
        return knex('tx_outputs').insert([
          {tx_id: 1, utxo_id: 3},
          {tx_id: 1, utxo_id: 4}]);
      })
      .then(() => {
        return knex('tx_subscriptions').insert([{user_id: 1, tx_id: 2}, {user_id: 1, tx_id: 3}]);
      })/*
      .then(() => {
        return knex('tx_rejections').insert({user_id: 1, tx_id: 4});
      })*/
      .then(() => {
        return knex('block').insert([{
          previous_block: '0x0000000000000000000000000000000000000000000000000000000000000000',
          merkle_root: '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E111',
          height: 0,
          nonce: 231,
          num_txs: 4
        },
        {
          previous_block: '0x00000000000asdf000000000000000000000000000000000000000000000000000',
          merkle_root: '0xF0E4C2F76C58916asC258F246851BEA091D14D4247A2FC3E18694461B1816E111',
          height: 1,
          nonce: 211,
          num_txs: 6
        },
        {
          previous_block: '0x00000000000asdf000000000000000000000000000000000000000000000000000',
          merkle_root: '0xF0E4C2F76C58916asC258F246851BEA091D14D4247A2FC3E18694461B1816E111',
          height: 2,
          nonce: 21,
          num_txs: 1
        }]);
      })
      .then(() => {
        return knex('blockchain').insert([{block_id: 1, user_id: 1}, {block_id: 2, user_id: 1}, {block_id: 3, user_id: 1}]);
      })
      .then(() => {
        return knex('block_subscriptions').insert({block_id: 1, user_id: 1});
      })
      .then(() => {
        return knex('block_txs').insert([{block_id: 1, tx_id: 1}, {block_id: 1, tx_id: 2}]);
      }),
    () => {});
};
