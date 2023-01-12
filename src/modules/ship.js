export class Ship {
    constructor(length = 1, coords) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
        this.coords = coords;
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
