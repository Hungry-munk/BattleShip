export class Ship {
    constructor(length = 1, coords) {
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
        this.coords = coords;
    }

    get isSunk() {
        return this.hitCount === this.length;
    }

    hit() {
        this.hitCount += 1;
        return this.hitCount;
    }
}
