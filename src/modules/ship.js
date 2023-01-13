export class Ship {
    constructor(length = 1, coords) {
        this.length = length;
        this.hits = [];
        this.coords = coords;
    }

    get sunk() {
        return this.hitCount === this.length;
    }

    hit() {
        this.hitCount += 1;
        return this.hitCount;
    }
}
