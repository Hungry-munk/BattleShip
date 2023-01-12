/* eslint-disable no-undef */
import { Ship } from "../modules/ship.js";

describe("hit method", () => {
    test("increaments hitCount ", () => {
        const ship = new Ship(4);
        ship.hit();
        expect(ship.hitCount).toBe(1);
    });
    test("increaments hitCount twice ", () => {
        const ship = new Ship(4);
        ship.hit();
        ship.hit();
        expect(ship.hitCount).toBe(2);
    });
});

describe("isSunk method", () => {
    test("a ship of length 2 to be sunked after hit twice", () => {
        const ship = new Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBeTruthy();
    });

    test(" a ship of length 3 to not be sunked after hit twice", () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        expect(ship.isSunk).toBeFalsy();
    });
});
