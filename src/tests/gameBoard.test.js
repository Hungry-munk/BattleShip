/* eslint-disable no-undef */
import { Ship } from "../modules/ship.js";
import { GameBoard } from "../modules/gameBoard.js";

describe.skip("array creation tests", () => {
    const gameBoard = new GameBoard();
    test("when arrays are created the is ship Value is false", () => {
        expect(gameBoard.board[0][0].isShip).toBe(false);
    });
    test("when arrays are created the is ship Value is false", () => {
        expect(gameBoard.board[0][1].isShip).toBe(false);
    });
});

describe.skip("placeShips method", () => {
    test("Placing 2 ships of size 4 and 5 with the placeships method ", () => {
        const gameBoard = new GameBoard();

        gameBoard.ships.push(
            new Ship(5, [
                [1, 2],
                [2, 2],
                [3, 2],
                [4, 2],
                [5, 2],
            ])
        );

        gameBoard.ships.push(
            new Ship(4, [
                [1, 3],
                [1, 4],
                [1, 5],
                [1, 6],
            ])
        );

        gameBoard.placeShips();

        expect(gameBoard.board[9][9]).toEqual({
            attacked: false,
            isShip: false,
            coords: undefined,
            allCoords: undefined,
        });
    });

    describe.skip("placing one ship correctly using the placeship method which doesnt effect other slots", () => {
        const gameBoard = new GameBoard();
        gameBoard.ships.push(
            new Ship(2, [
                [1, 2],
                [2, 2],
            ])
        );
        gameBoard.placeShip(gameBoard.ships[0].coords);
        test("placed ship values to be ships", () => {
            expect(gameBoard.board[1][2]).toEqual({
                isShip: true,
                attacked: false,
                coords: expect.anything(),
                allCoords: expect.anything(),
            });
        });
        test("not placed ship values not to be ships", () => {
            expect(gameBoard.board[7][2].isShip).toBe(false);
        });
        test("not placed ship values not to be ships 2", () => {
            expect(gameBoard.board[5][7].isShip).toBe(false);
        });
    });
});

describe("findShip method", () => {
    const gameBoard = new GameBoard();

    const ship = new Ship(5, [
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
    ]);
    gameBoard.ships.push(ship);

    const ship2 = new Ship(4, [
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6],
    ]);
    gameBoard.ships.push(ship2);
    gameBoard.placeShips();

    test("findShip method to return a the correct ship from one of its coords", () => {
        expect(gameBoard.findShip([1, 3])).toEqual(ship2);
    });

    test("findShip method to return undefined from entering a coord that isnt a ship", () => {
        expect(gameBoard.findShip([8, 5])).toBeFalsy();
    });
});
