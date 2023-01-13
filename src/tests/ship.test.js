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

describe("testing ship coordinates", () => {
    const ship = new Ship(3, [
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
    ]);
    test("ship actaully contains the coords its meant to", () => {
        expect(ship.coords).toEqual(
            expect.arrayContaining([
                expect.arrayContaining([1, 2]),
                expect.arrayContaining([2, 2]),
                expect.arrayContaining([3, 2]),
                expect.arrayContaining([4, 2]),
                expect.arrayContaining([5, 2]),
            ])
        );
    });

    test("test fails becuase the array does not contain those values", () => {
        expect(ship.coords).not.toEqual(
            expect.arrayContaining([
                expect.arrayContaining([7, 2]),
                expect.arrayContaining([7, 2]),
                expect.arrayContaining([7, 2]),
                expect.arrayContaining([7, 2]),
                expect.arrayContaining([7, 2]),
            ])
        );
    });
});
