import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utxo } from '../components/blockchain-demo/utxo.model';
import { Tx } from '../components/blockchain-demo/tx.model';
import { TxSubmit } from '../components/blockchain-demo/tx-submit.model';
import { Block } from '../components/blockchain-demo/block.model';

@Injectable()
export class QueryService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserQuestions() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get('/api/v1/' + id + '/questions');
  }

  getUserById() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get('/api/v1/users/' + id);
  }

  getUtxos(user_id: number) {
    return this.http.get<Utxo[]>('/api/v1/utxos/unspent/' + user_id);
  }

  getIncomingTxs(user_id: number) {
    return this.http.get<Tx[]>('/api/v1/txs/incoming/' + user_id);
  }

  getBlockTxs(block_id: number) {
    return this.http.get<Tx[]>('/api/v1/blocks/txs/' + block_id);
  }

  getIncomingBlocks(user_id: number) {
    return this.http.get<Block[]>('/api/v1/blocks/incoming/' + user_id);
  }

  getUserTxs(user_id: number) {
    return this.http.get<Tx[]>('/api/v1/txs/' + user_id);
  }

  getTxById(tx_id: number) {
    return this.http.get<Tx>('/api/v1/txs/tx/' + tx_id);
  }

  getInputs(id: number) {
    return this.http.get<Utxo[]>('/api/v1/txs/' + id + '/inputs');
  }

  getOutputs(id: number) {
    return this.http.get<Utxo[]>('/api/v1/txs/' + id + '/outputs');
  }

  postUtxo(user_id: number) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const utxo = {
      value: 50,
      current_owner: user_id
    };

    return this.http.post<Utxo>('/api/v1/utxos/new', utxo, {headers: headers});
  }

  spendUtxo(utxoId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const utxo = {
      user_id: this.authService.user.id,
      utxo_id: utxoId
    };

    return this.http.post('/api/v1/utxos/spend', utxo, {headers: headers});
  }

  subscribeUtxo(utxoId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const utxo = {
      user_id: id,
      utxo_id: utxoId
    };

    return this.http.post('/api/v1/utxos/bind', utxo, {headers: headers});
  }

  unsubUtxo(utxoId: number) {
    const id = JSON.parse(localStorage.getItem('user')).id;

    return this.http.delete('/api/v1/utxos/' + id + '/' + utxoId + '/delete');
  }

  postTx(tx: TxSubmit) {

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.post<Tx>('/api/v1/txs/new', tx, {headers: headers});

  }

  subscribeTx (txId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const tx = {
      user_id: id,
      tx_id: txId
    };

    return this.http.post('/api/v1/txs/bind', tx, {headers: headers});
  }

  rejectTx (txId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const tx = {
      user_id: id,
      tx_id: txId
    };

    return this.http.post('/api/v1/txs/reject', tx, {headers: headers});
  }

  unsubscribeTx (txId: number) {
    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const tx = {
      user_id: id,
      tx_id: txId
    };

    return this.http.post('/api/v1/txs/delete', tx, {headers: headers});
  }

  // TODO
  addTxToBlock (tx_id: number, block_id: number) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const tx = {
      tx_id: tx_id,
      block_id: block_id
    };

    return this.http.post('/api/v1/blocks/bind-tx', tx, {headers: headers});
  }

  postBlock(block: any) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    return this.http.post<Block>('/api/v1/blocks/new', block, {headers: headers});
  }

  subscribeBlock (blockId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const block = {
      user_id: id,
      block_id: blockId
    };

    return this.http.post('/api/v1/blocks/bind', block, {headers: headers});
  }

  rejectBlock (blockId: number) {

    const id = JSON.parse(localStorage.getItem('user')).id;
    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const block = {
      user_id: id,
      block_id: blockId
    };

    return this.http.post('/api/v1/blocks/reject', block, {headers: headers});
  }

  getBlockById (blockId: number) {
    return this.http.get<Block>('/api/v1/blocks/' + blockId);
  }

  getUserBlockchain(user_id: number) {
    return this.http.get<Block[]>('/api/v1/blocks/user/' + user_id);
  }

  updateUserPic(username: string, update) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put('api/v1/' + username + '/image', update, {headers: headers});
  }

  generateKeypair() {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const id = JSON.parse(localStorage.getItem('user')).id;

    const user = {
      user_id: id
    };

    return this.http.post('api/v1/generate-keypair', user, {headers: headers});
  }

  getKeypair(user_id: number) {
    return this.http.get<any>('/api/v1/keypair/' + user_id);
  }

  deleteQuestion(question_id: number) {
    return this.http.delete('/api/v1/questions/delete/' + question_id);
  }

  getSessionQuestions(session_id: string) {
    return this.http.get<any>('/api/v1/session-questions/' + session_id);
  }

  getAllQuestions() {
    return this.http.get<any>('/api/v1/all-questions');
  }

  incrementQuestion(questionId: number) {
    return this.http.get('/api/v1/questions/' + questionId);
  }

  decrementQuestion(questionId: number) {
    return this.http.get('/api/v1/questions/decrement/' + questionId);
  }

  getQuestionSubs() {
    const id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.get<any[]>('/api/v1/questions/subs/' + id);
  }

  subQuestion(questionId: number) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const id = JSON.parse(localStorage.getItem('user')).id;

    const question = {
      user_id: id,
      question_id: questionId
    };

    return this.http.post('api/v1/questions/subscribe', question, {headers: headers});
  }

  unsubQuestion(questionId: number) {
    const id = JSON.parse(localStorage.getItem('user')).id;
    return this.http.delete('/api/v1/questions/' + id + '/' + questionId + '/delete');
  }

  resetBlockchain() {
    return this.http.delete('/api/v1/reset-all');
  }

}
