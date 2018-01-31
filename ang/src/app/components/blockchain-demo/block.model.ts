export class Block {
    public id: number;
    public height: number;
    public block_hash: string;
    public previous_block: string;
    public merkle_root: string;
    public created_at: any;
    public updated_at: any;
    public nonce: number;
    public num_txs: number;

    constructor(
        id: number,
        height: number,
        block_hash: string,
        previous_block: string,
        merkle_root: string,
        created_at: any,
        updated_at: any,
        nonce: number,
        num_txs: number
    ) {
        id = this.id;
        height = this.height;
        block_hash = this.block_hash;
        previous_block = this.previous_block;
        merkle_root = this.merkle_root;
        created_at = this.created_at;
        updated_at = this.updated_at;
        nonce = this.nonce;
        num_txs = this.num_txs;
    }
}
