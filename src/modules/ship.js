export class Ship {
    constructor(length = 1, coords) {
        this.length = length;
        this.hits = [];
        this.hitCount = 0;
        this.coords = coords;
    }

    get sunk() {
        return this.hitCount === this.length;
    }

    hit(coords) {
        this.hitCount += 1;
        this.hits.push(coords);
        return this.hitCount;
    }
}
