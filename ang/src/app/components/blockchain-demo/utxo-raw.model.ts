export class UtxoRaw {
    public id: number;
    public value: number;

    constructor(id: number, value: number){
        this.id = id;
        this.value = value;
    }
}