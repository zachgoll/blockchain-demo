export class TxSubmit {
    public from: number;
    public tx: {
        tx_hash: string;
        fee: number
    };
    public inputs: {
        id: number;
        value: number;
        current_owner: number;
    }[];
    public outputs: {
        value: number;
        to: number;
    }[];


    constructor(
        from: number,
        tx: {
            tx_hash: string,
            fee: number
        },
        inputs: {
            id: number;
            value: number;
            current_owner: number;
        }[],
        outputs: {
            value: number,
            to: number
        }[]
    ) {
        this.from = from;
        this.tx = tx;
        this.inputs = inputs;
        this.outputs = outputs;
    }
}
