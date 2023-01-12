export class Ship {
    constructor(length = 1) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    get isSunk() {
        if (this.hitCount === this.length) {
            this.sunk = true;
            return true;
        }
        return false;
    }

    hit() {
        this.hitCount += 1;
        return this.hitCount;
    }
}
