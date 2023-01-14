import { Player } from "./player.js";

export class AiPlayer extends Player {
    getRandomMove() {
        return this;
    }

    getRandomNearMove() {
        return this;
    }
}
