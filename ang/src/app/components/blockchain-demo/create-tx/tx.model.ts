export class Tx {
    public id: number;
    public fee: number;
    public hash: string;

    constructor(id: number, fee: number, hash: string){
        this.id = id;
        this.fee = fee;
        this.hash = hash;
    }
}
