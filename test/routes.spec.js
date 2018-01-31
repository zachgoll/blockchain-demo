process.env.NODE_ENV = 'test';

const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const knex = require('./../db/knex');
const server = require('../app');
const bcrypt = require('bcryptjs');
const utxoQuery = require('../db/utxo_queries');
const txQuery = require('../db/tx_queries');

chai.use(chaiHttp);

/**
 * If migrations lock error: DELETE FROM knex_migrations_lock;
 */

describe('API Routes', function() {

    /*
    beforeEach(() => knex.migrate.rollback()
        .then(() => knex.migrate.latest())
        .then(() => knex.seed.run())
    );

    afterEach((done) => {
        knex.migrate.rollback()
            .then(() => {
                done();
            });
    });
    */

    describe('GET requests', () => {
        it('should get all utxos', (done) => {
            chai.request(server)
            .get('/api/v1/utxos/unspent')
            .end((err, res) => {
                console.log(res.body);
                done();
            })
        });

        it('should send a new transaction from zach to steve of 20', (done) => {
            chai.request(server)
            .post('/api/v1/txs/new')
            .send({
                from: 1,
                tx: {
                    tx_hash: "test tx",
                    fee: 5
                },
                inputs: [{
                    id: 1,
                    value: 50,
                    username: "zach",
                    user_id: 1
                }],
                outputs: [{
                    value: 25,
                    to: 2
                },
                {
                    value: 20,
                    to: 1
                }]
            })
            .end((err, res) => {
                console.log(res.body);
                
                /*
                knex('tx_inputs').select('*').where('tx_id', res.body.tx_id).then((tx_inputs) => {
                    console.log(tx_inputs);
                });
                */
                
                done();
            });
        });
    });


    /*

    describe('GET requests', () => {
        xit('should return all unspent utxos', (done) => {
            chai.request(server)
            .get('/api/v1/utxos/unspent')
            .end(function(err, res) {
                assert(res.body[0].value === 50);
                done();
            });
        });

        xit('should return all spent utxos', (done) => {
            chai.request(server)
            .get('/api/v1/utxos/spent')
            .end(function(err, res) {
                assert(res.body.length === 0);
                done();
            });
        })

        xit('should return a single utxo by id', (done) => {
            chai.request(server)
            .get('/api/v1/utxos/1')
            .end(function(err, res) {
                assert(res.body.value === 3.24);
                done();
            });
        });

        xit('should return array of inputs for a given transaction', (done) => {
            chai.request(server)
            .get('/api/v1/txs/1/inputs')
            .end((err, res) => {
                assert(res.body[0] === 3.24);
                assert(res.body[1] === 5.34);
                done();
            });
        });

        xit('should return array of outputs for a given transaction', (done) => {
            chai.request(server)
            .get('/api/v1/txs/1/outputs')
            .end((err, res) => {
                assert(res.body[0] === 4.98);
                assert(res.body[1] === 3.5);
                done();
            });
        });

        xit('should return all txs', (done) => {
            chai.request(server)
            .get('/api/v1/txs')
            .end(function(err, res) {
                assert(res.body[0].fee === 0.1);
                done();
            });
        });

        xit('should return all incoming txs from other peers', (done) => {
            chai.request(server)
            .get('/api/v1/txs/incoming')
            .end((err, res) => {
                assert(res.body.length === 2);
                done();
            });
        });

        xit('should return a single tx by id', (done) => {
            chai.request(server)
            .get('/api/v1/txs/1')
            .end(function(err, res) {
                assert(res.body.fee === 0.1);
                done();
            });
        });

        xit('should return all users', (done) => {
            chai.request(server)
            .get('/api/v1/users')
            .end(function(err, res) {
                assert(res.body[0].f_name === 'Zach');
                assert(res.body[0].l_name === 'Gollwitzer');
                assert(res.body[0].password === 'mypassword');
                done();
            });
        });

        xit('should return a single user by id', (done) => {
            chai.request(server)
            .get('/api/v1/users/1')
            .end(function(err, res) {
                assert(res.body.f_name === 'Zach');
                assert(res.body.l_name === 'Gollwitzer');
                assert(res.body.password === 'mypassword');
                done();
            });
        });

        xit('should return all blocks', (done) => {
            chai.request(server)
            .get('/api/v1/blocks')
            .end(function(err, res) {
                assert(res.body[0].previous_block === '0x0000000000000000000000000000000000000000000000000000000000000000');
                assert(res.body[0].merkle_root === '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E111');
                assert(res.body[0].height === 0);
                assert(res.body[0].nonce === 231);
                assert(res.body[0].num_txs === 4);
                done();
            });
        });

        xit('should return a single block by id', (done) => {
            chai.request(server)
            .get('/api/v1/blocks/1')
            .end(function(err, res) {
                assert(res.body.previous_block === '0x0000000000000000000000000000000000000000000000000000000000000000');
                assert(res.body.merkle_root === '0xF0E4C2F76C58916EC258F246851BEA091D14D4247A2FC3E18694461B1816E111');
                assert(res.body.height === 0);
                assert(res.body.nonce === 231);
                assert(res.body.num_txs === 4);
                done();
            });
        });

    });

    describe('POST requests', () => {
        xit('should add a new utxo', (done) => {
            chai.request(server)
            .post('/api/v1/utxos/new')
            .send({
                value: 19
            })
            .end((err, res) => {
                assert(res.body.value === 19);
                done();
            });
        });

        it('should send a new transaction from zach to steve of 20', (done) => {
            chai.request(server)
            .post('/api/v1/txs/new')
            .send({
                from: 1,
                tx: {
                    tx_hash: "test tx",
                    fee: 5
                },
                inputs: [{
                    id: 1,
                    value: 50,
                    username: "zach",
                    user_id: 1
                }],
                outputs: [{
                    value: 25,
                    to: 2
                },
                {
                    value: 20,
                    to: 1
                }]
            })
            .end((err, res) => {
                console.log(res.body);
                done();
            });
        });

        xit('should add a new user', (done) => {

            chai.request(server)
            .post('/users/new')
            .send({
                username: 'stevejobs',
                f_name: 'Steve',
                l_name: 'Jobs',
                password: 'stevepw'
            })
            .end((err, res) => {
                chai.request(server)
                .get('/users/stevejobs')
                .end((err, res) => {
                    assert(res.body.username === 'stevejobs')
                    assert(res.body.f_name === 'Steve');
                    assert(res.body.l_name === 'Jobs');
                    assert(bcrypt.compareSync('stevepw', res.body.password));
                    done();
                });
            });
        });

        xit('should add a new block', (done) => {
            chai.request(server)
            .post('/api/v1/blocks/new')
            .send({
                height: 3,
                nonce: 342
            })
            .end((err, res) => {
                assert(res.body.height === 3);
                assert(res.body.nonce === 342);
                done();
            });
        });

        xit('should add new utxo and bind the utxo to given user and tx', (done) => {
            
            let new_utxo = {
                utxo: {
                    value: 13
                },
                user_id: 1,
                tx_id: 1
            };
            
            chai.request(server)
            .post('/api/v1/txs/outputs/new')
            .send(new_utxo)
            .end((err, res) => {
                chai.request(server)
                .get('/api/v1/utxos/' + new_utxo.user_id + '/all')
                .end((err, res) => {
                    assert(res.body.length === 2);
                    done();
                });
            });
        });
    });


    describe('PUT requests', () => {
        xit('should edit a utxo', (done) => {
            chai.request(server)
            .put('/api/v1/utxos/1')
            .send({
                value: 876
            })
            .end((err, res) => {
                assert(res.body.value === 876);
                done();
            });
        });

        xit('should edit a tx', (done) => {
            chai.request(server)
            .put('/api/v1/txs/1')
            .send({
                fee: 0.1
            })
            .end((err, res) => {
                assert(res.body.fee === 0.1);
                done();
            });
        });
    });

    describe('DELETE requests', () => {
        
        xit('should delete a utxo', (done) => {
            chai.request(server)
            .delete('/api/v1/utxos/1/1/delete')
            .end((err, res) => {
                chai.request(server)
                .get('/api/v1/utxos/unspent')
                .end((err, res) => {
                    assert(res.body.length === 1);
                    done();
                });
            });
        });

        xit('should add utxo to tx_inputs, delete utxo from utxos, and put it in spent_utxos', (done) => {
            let body = {
                utxo_id: 5,
                tx_id: 1,
                user_id: 1
            };
            
            chai.request(server)
            .post('/api/v1/txs/inputs/new')
            .send(body)
            .end((err, res) => {
                chai.request(server)
                .get('/api/v1/txs/1/inputs')
                .end((err, res) => {
                    assert(res.body[2] === 44.3);
                    done();
                });
            });
        });
    });
    */

});