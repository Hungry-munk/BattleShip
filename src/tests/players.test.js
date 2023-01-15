/* eslint-disable no-undef */
import { Player } from "../modules/player.js";
import { AiPlayer } from "../modules/AiPlayer.js";

describe("AIplayers ability to shoot different locations both random and close to the previous if hit", () => {
    const mockAiPlayer = new AiPlayer();
    test("AI player can shoot at random cord with empty board", () => {
        expect(mockAiPlayer.getRandomCoord().length).toBe(2);
    });
});
