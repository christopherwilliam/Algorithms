export default class Stack {
    constructor(...args) {
        this._size = args.length;
        for(let i = 1; i <= args.length; i++) {
            this[i] = args[i - 1];
        }
    }
    push(item) {
        this._size += 1;
        this[this.size] = item;
    }
    pop() {
        if (!this.size) {
            throw new Error('stack is empty');
        }
        const topItem = this[this.size];
        delete this[this.size];
        this._size -= 1;
        return topItem;
    }
    get size() {
        return this._size;
    }
    set size(newSize) {
        throw new Error('*softly* ...don\'t');
    }
}