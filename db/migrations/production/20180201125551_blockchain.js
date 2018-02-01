exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_profile', (table) => {
        table.increments().primary();
        table.string('email');
        table.string('username');
        table.string('f_name');
        table.string('l_name');
        table.string('password');
        table.timestamps(true, true);
        table.string('picture_url').defaultTo('http://www.tadamun.so/wp-content/uploads/2016/09/blank-avatar.png');
        table.string('session');
    })
    .then(() => {
        return knex.schema.createTable('block', (table) => {
            table.increments().primary();
            table.integer('height');
            table.string('block_hash');
            table.string('previous_block');
            table.string('merkle_root');
            table.string('timestamp');
            table.integer('nonce');
            table.integer('num_txs');
        });
    })
    .then(() => {
        return knex.schema.createTable('tx', (table) => {
            table.increments().primary();
            table.string('tx_hash');
            table.float('fee');
            table.boolean('coinbase').defaultTo(false);
        });
    })
    .then(() => {
        return knex.schema.createTable('utxo', function(table){
            table.increments().primary();
            table.float('value').notNullable();
            table.integer('current_owner').references('id').inTable('user_profile');
          });
    })
    .then(() => {
        return knex.schema.createTable('user_questions', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.text('question');
        });
    })
    .then(() => {
        return knex.schema.createTable('tx_inputs', (table) => {
            table.integer('tx_id').references('id').inTable('tx');
            table.integer('utxo_id').references('id').inTable('utxo');
        });
    })
    .then(() => {
        return knex.schema.createTable('tx_outputs', (table) => {
            table.integer('tx_id').references('id').inTable('tx');
            table.integer('utxo_id').references('id').inTable('utxo');
        });
    })
    .then(() => {
        return knex.schema.createTable('tx_subscriptions', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('tx_id').references('id').inTable('tx');
        });
    })
    .then(() => {
        return knex.schema.createTable('tx_rejections', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('tx_id').references('id').inTable('tx');
        });
    })
    .then(() => {
        return knex.schema.createTable('utxos', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('utxo_id').references('id').inTable('utxo');
        });
    })
    .then(() => {
        return knex.schema.createTable('block_subscriptions', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('block_id').references('id').inTable('block');
        });
    })
    .then(() => {
        return knex.schema.createTable('block_rejections', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('block_id').references('id').inTable('block');
        });
    })
    .then(() => {
        return knex.schema.createTable('blockchain', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('block_id').references('id').inTable('block');
        });
    })
    .then(() => {
        return knex.schema.createTable('block_txs', (table) => {
            table.integer('block_id').references('id').inTable('block');
            table.integer('tx_id').references('id').inTable('tx');
        });
    })
    .then(() => {
        return knex.schema.createTable('spent_utxos', (table) => {
            table.integer('user_id').references('id').inTable('user_profile');
            table.integer('utxo_id').references('id').inTable('utxo');
        });
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('block_txs')
    .then(() => {
        return knex.schema.dropTableIfExists('tx_inputs')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('tx_outputs')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('tx_subscriptions')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('tx_rejections')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('tx')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('utxos')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('spent_utxos')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('utxo')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('block_subscriptions')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('block_rejections')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('user_questions')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('blockchain')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('block')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('user_profile')
    });
};
