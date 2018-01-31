export class Utxo {
    public id: number;
    public value: number;
    public current_owner: number;

    constructor(id: number, value: number, current_owner: number, user_id: number) {
        this.id = id;
        this.value = value;
        this.current_owner = current_owner;
    }
}
