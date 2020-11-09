export class Item {
    itemId: string;
    itemName: string;
    state: boolean;

    constructor(itemId: string, itemName: string, state: boolean) {
        this.itemId = itemId;
        this.itemName = itemName;
        this.state = state;
    }
}