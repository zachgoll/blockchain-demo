import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class GlossaryComponent implements OnInit {

  constructor() { }

  /**
   * CSV to JSON 
   *  {lb}
     "term":"{f1}",
    "definition":"{f2}"
      {rb}
      http://www.convertcsv.com/csv-to-json.htm
   */

  terms = [
    {
       "term":"Address"
      ,"definition":"Publicly known string of characters used to send and receive transactions from on the network."
    },
    {
       "term":"ASIC"
      ,"definition":"Short form for ‘Application Specific Integrated Circuit’. Often compared to GPUs, ASICs are specially made for mining and may offer significant power savings."
    },
    {
       "term":"Block"
      ,"definition":"Package of data that carries immutable information including a block header and block transactions."
    },
    {
       "term":"Block Hash"
      ,"definition":"A deterministic, irreversible hash of the header of the block.  This hash will change if any data in the entire block is changed, including transactions."
    },
    {
       "term":"Block Header"
      ,"definition":"An 80-byte header belonging to a single block storing metadata pertaining to that block which includes the previous block hash, the merkle root hash, the timestamp, nonce, and number of transactions in the block."
    },
    {
       "term":"Block Interval"
      ,"definition":"The average time interval in which new blocks are typically mined.  Bitcoin strives for a 10 minute block interval and will adjust the difficulty target according to the aggregate hash power in the network."
    },
    {
       "term":"Block Reward"
      ,"definition":"The payment that a miner recceives for mining a block.  This provides an incentive for miners to participate in and secure the network via monetary compensation."
    },
    {
       "term":"Block Timestamp"
      ,"definition":"A Unix time timestamp contained in each block. Iit serves as a source of variation for the block hash making it more difficult for bad nodes to manipulate a blockchain."
    },
    {
       "term":"Blockchain (Chainworks)"
      ,"definition":"A write once (immutable), distributed and sequential database (chain) of transactions (blocks) fused onto a decentralized network of peer clients that are economic agents (incentivized by block reward) to agree (consensus protocol) at regular time intervals (block interval) about the state of shared network data (ledger)."
    },
    {
       "term":"Blockchain (Tapscott)"
      ,"definition":"An incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value."
    },
    {
       "term":"Coinbase Transaction"
      ,"definition":"The first transaction in a block. Always created by a miner, this transaction includes the current block reward and the sum of the transaction fees as outputs sent back to the miner.  There are no inputs in the coinbase transaction."
    },
    {
       "term":"Consensus"
      ,"definition":"A term often used in peer to peer networks which refers to the agreement between network participants on the state of some data."
    },
    {
       "term":"Consensus Protocol"
      ,"definition":"Often a reference to the type of consensus algorithm used to secure a particular blockchain.  In Bitcoin, the consensus protocol is POW (proof of work)."
    },
    {
       "term":"Dapp"
      ,"definition":"Referred to as a Decentralized Application, a Dapp replaces the common backend database architecture with the blockchain."
    },
    {
       "term":"Deterministic"
      ,"definition":"An algorithm which, given a particular input, will always produce the same output."
    },
    {
       "term":"Distributed Ledger (aka Shared Ledger)"
      ,"definition":"A consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions."
    },
    {
       "term":"Ethash"
      ,"definition":"The consensus algorithm used natively for the proof-of-work function in Ethereum-based blockchain currencies."
    },
    {
       "term":"Genesis Block"
      ,"definition":"The first block of a blockchain. Modern versions of Bitcoin number it as block 0, though very early versions counted it as block 1."
    },
    {
       "term":"Hash Function"
      ,"definition":"Any function that can be used to map data of arbitrary size to data of fixed size, is deterministic, and irreversible. "
    },
    {
       "term":"Hashes "
      ,"definition":"The values returned by a hash function.  Also known as: hash values, hash codes, or digests."
    },
    {
       "term":"Immutable "
      ,"definition":"Unchanging over time or unable to be changed."
    },
    {
       "term":"Keccak Hash 256"
      ,"definition":"A common hash function which is used for address generation and other tasks in Ethereum."
    },
    {
       "term":"Merkle Root"
      ,"definition":"The topmost (root) leaf of a merkle tree which is stored in the block header and which changes anytime a transaction in a block is altered in any way."
    },
    {
       "term":"Merkle Tree"
      ,"definition":"A binary tree like data structure which allows all transactions in a block to be consolidated and represented by a single 64 character hash, also called the merkle root."
    },
    {
       "term":"Mining"
      ,"definition":"The process of creating a block, solving a proof-of-work for that block, and broadcasting the block to peers in the network as \"valid\"."
    },
    {
       "term":"Nonce"
      ,"definition":"An arbitrary number incremented over and over to solve a proof-of-work algorithm while mining."
    },
    {
       "term":"Peer-to-Peer"
      ,"definition":"A decentralized network architecture in which each participant has equal rights but not necessarily responsibilities."
    },
    {
       "term":"Previous Block Hash"
      ,"definition":"Contained in the header of every block, the previous block hash refers to the previous block in the blockchain, and allows the chain to be linked together."
    },
    {
       "term":"Privacy"
      ,"definition":"In blockchain circles, privacy often refers to anonymity of both identity and data."
    },
    {
       "term":"Private Key"
      ,"definition":"A large, random number that is used to indicate a specific identity on the blockchain.  This value is responsible for securing a user's funds and if compromised, can result in a complete loss of funds."
    },
    {
       "term":"Proof of Stake (POS)"
      ,"definition":"A consensus mechanism where miners are chosen at random to solve the proof of work for a block based on their stake in the network."
    },
    {
       "term":"Proof of Work (POW)"
      ,"definition":"A consensus mechanism where miners compete to solve a computationally difficult cryptographic puzzle to prove that a block has been mined with integrity."
    },
    {
       "term":"Public Key"
      ,"definition":"A cryptographic key that can be obtained and used by anyone to encrypt messages intended for a particular recipient, such that the encrypted messages can be deciphered only by using a second key that is known only to the recipient (the private key)."
    },
    {
       "term":"SHA-256 Hash"
      ,"definition":"A popular hashing algorithm designed and developed by the NSA and used for a variety of functions including mining/hashing in Bitcoin."
    },
    {
       "term":"Shared Ledger (aka Distributed Ledger)"
      ,"definition":"A consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions."
    },
    {
       "term":"Smart contracts"
      ,"definition":"business rules executed in trust-less manner via code"
    },
    {
       "term":"Transaction"
      ,"definition":"An exchange of value, services, or other goods between two or more people."
    },
    {
       "term":"Transaction Hash"
      ,"definition":"An identifier used to uniquely identify a particular transaction on the blockchain."
    },
    {
       "term":"Transaction Inputs"
      ,"definition":"One or more UTXOs which are unlocked via a user's private key and included as \"funds\" for a given transaction.  After being used in a transaction, a UTXO is considered \"spent\" and can no longer be used in the Bitcoin network."
    },
    {
       "term":"Transaction Outputs"
      ,"definition":"One or more UTXOs which are created as a result of a transaction, and which can only be spent by the user who's public key was used to lock the outputs.  All transaction outputs are newly created UTXOs and can be used as inputs in future transactions."
    },
    {
       "term":"Trust-less"
      ,"definition":"Refers to a system in which participants may interact and transact with each other despite lacking trust in each other.  This is common in peer to peer networks like Bitcoin."
    },
    {
       "term":"UTXO"
      ,"definition":"Bitcoin specific term.  An Unspent Transaction Output is a value of Bitcoin which has a locking and unlocking script.  The user who has the private key which satisfies the unlocking script can use the UTXO as a transaction input."
    },
    {
       "term":"UTXO Set"
      ,"definition":"Bitcoin specific term.  The UTXO set represents all the UTXOs available in the Bitcoin network, and together, allow one to construct a user's \"balance\" of Bitcoin."
    },
    {
       "term":"Value"
      ,"definition":"the importance, worth, or usefulness of something."
    }];

  ngOnInit() {
  }

}
