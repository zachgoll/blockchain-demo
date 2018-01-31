exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('utxo').del(),
    knex('user_profile').del(),
    knex('user_profile').insert(
      [{
        username: 'zach',
        email: 'zach@chainworks.com',
        f_name: 'Zach',
        l_name: 'Gollwitzer',
        password: 'zachpassword',
        session: '1234'
      },
      {
        username: 'steve',
        email: 'steven@chainworks.com',
        f_name: 'Steven',
        l_name: 'Burns',
        password: 'stevepassword',
        session: '1234'
      },
      {
        username: 'priya',
        email: 'priya@chainworks.com',
        f_name: 'Priya',
        l_name: 'Tandon',
        password: 'priyapassword',
        session: '1234'
      },
      {
        username: 'rohit',
        email: 'rohit@chainworks.com',
        f_name: 'Rohit',
        l_name: 'Tandon',
        password: 'rohitpassword',
        session: '1234'
      }]
      )
      .then(() => {
        return knex('utxo').insert(
          [{value: 50, current_owner: 1}, 
            {value: 50, current_owner: 2}, 
            {value: 50, current_owner: 3}, 
            {value: 50, current_owner: 4}]);
      })
      .then(() => {
        return knex('utxos').insert([{user_id: 1, utxo_id: 1}, {user_id: 2, utxo_id: 2}, {user_id: 3, utxo_id: 3}, {user_id: 4, utxo_id: 4}]);
      }),
    () => {});
};