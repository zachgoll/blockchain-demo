import { UtxoRaw } from './utxo-raw.model';

export class Tx {
    public coinbase: boolean;
    public id: number;
    public fee: number;
    public tx_hash: string;
    public inputs: UtxoRaw[];
    public outputs: UtxoRaw[];

    constructor(coinbase: boolean, id: number, fee: number, tx_hash: string, inputs: UtxoRaw[], outputs: UtxoRaw[]){
        this.coinbase = coinbase;
        this.id = id;
        this.fee = fee;
        this.tx_hash = tx_hash;
        this.inputs = inputs;
        this.outputs = outputs;
    }
}
