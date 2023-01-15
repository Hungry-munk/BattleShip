import { Player } from "./player.js";

export class AiPlayer extends Player {
    constructor(name) {
        super(name);
        this.previousMoveHit = { hit: false, move: undefined };
        this.previousSourounding = { oneHit: true, moves: undefined };
    }

    getRandomCoord() {
        let randomCoord;
        do {
            randomCoord = [
                this.gameBoard.randomCoord(),
                this.gameBoard.randomCoord(),
            ];
        } while (this.#repeatedCoord(randomCoord));
        return randomCoord;
    }

    #repeatedCoord(coord) {
        return !![
            ...this.gameBoard.missedShots,
            ...this.gameBoard.hitShots,
        ].find(
            missedShot =>
                missedShot[0] === coord[0] && missedShot[1] === coord[1]
        );
    }

    getRandomNearMove() {
        return this;
    }

    getCoord() {
        if (this.previousMoveHit.hit) {
            // if it the last move was a hit
        }
    }
}
