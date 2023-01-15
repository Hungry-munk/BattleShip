/* eslint-disable no-undef */
import { Ship } from "../modules/ship.js";
import { GameBoard } from "../modules/gameBoard.js";

describe.skip("array creation tests", () => {
    const gameBoard = new GameBoard(10);
    test("when arrays are created the is ship Value is false", () => {
        expect(gameBoard.board[0][0].isShip).toBe(false);
    });
    test("when arrays are created the is ship Value is false", () => {
        expect(gameBoard.board[0][1].isShip).toBe(false);
    });
});

describe.skip("placeShips method", () => {
    test("Placing 2 ships of size 4 and 5 with the placeships method ", () => {
        const gameBoard = new GameBoard(10);

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
        const gameBoard = new GameBoard(10);
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

describe.skip("findShip and attacking methods", () => {
    const gameBoard = new GameBoard(10);

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

    // attacking method
    gameBoard.receiveAttack([1, 3]);
    test("attacking method increases the hitcount and changes that object n those coords to attacked:true ", () => {
        expect(ship2.hitCount).toBe(1);
        expect(gameBoard.board[1][3].attacked).toBe(true);
    });

    test("attacking method doestn attack other squares", () => {
        expect(gameBoard.board[5][3].attacked).toBe(false);
        expect(gameBoard.board[7][6].attacked).toBe(false);
    });
});

describe.skip("testing shipsDown() get method ", () => {
    const gameBoard = new GameBoard(10);
    gameBoard.ships.push(new Ship(1, [[1, 5]]));
    test("sitatuation where shipsDown should return true", () => {
        gameBoard.placeShips();
        gameBoard.receiveAttack([1, 5]);
        expect(gameBoard.shipsDown).toBe(true);
    });
    test("sitatuation where shipsDown should return false", () => {
        gameBoard.placeShips();
        gameBoard.ships.push(new Ship(1, [[2, 4]]));
        expect(gameBoard.shipsDown).toBe(false);
    });
});

describe.skip("checkCollision method", () => {
    test("checkCollisoin returns true from coppied coord values for one ship", () => {
        const gameBoard = new GameBoard(10);
        //  creating a ship
        const ship1 = new Ship(5);
        ship1.coords = gameBoard.generateRandomLocation(ship1);
        gameBoard.ships.push(ship1);
        gameBoard.placeShips();
        // giving it the exact coords
        expect(gameBoard.checkCollision(ship1.coords)).toBe(true);
    });
});

describe.skip("everything to do with the generateRandomLocation method ", () => {
    describe("testing singular placements with th generateRandomLocation method", () => {
        const gameBoard = new GameBoard(10);
        test("can generate random location for one ship ", () => {
            const ship = new Ship(5);
            ship.coords = gameBoard.generateRandomLocation(ship);
            gameBoard.ships.push(ship);
            gameBoard.placeShips();
            expect(ship.coords.length).toBe(ship.length);
            // tseting multiple ships
        });
        test("can generate valid coords that dont colide with the other ship", () => {
            const ship = new Ship(4);
            ship.coords = gameBoard.generateRandomLocation(ship);
            gameBoard.ships.push(ship);
            gameBoard.placeShips();
            expect(ship.coords.length).toBe(ship.length);
        });
    });

    describe("testing placing multiple ships at once", () => {
        test("can place 5 ships correctly", () => {
            const gameBoard = new GameBoard(10);

            const ship1 = new Ship(5);
            const ship2 = new Ship(4);
            const ship3 = new Ship(4);
            const ship4 = new Ship(3);
            const ship5 = new Ship(4);

            ship1.coords = gameBoard.generateRandomLocation(ship1);
            gameBoard.ships.push(ship1);
            gameBoard.placeShips();

            ship2.coords = gameBoard.generateRandomLocation(ship2);
            gameBoard.ships.push(ship2);
            gameBoard.placeShips();

            ship3.coords = gameBoard.generateRandomLocation(ship3);
            gameBoard.ships.push(ship3);
            gameBoard.placeShips();

            ship4.coords = gameBoard.generateRandomLocation(ship4);
            gameBoard.ships.push(ship4);
            gameBoard.placeShips();

            ship5.coords = gameBoard.generateRandomLocation(ship5);
            gameBoard.ships.push(ship5);
            gameBoard.placeShips();

            expect(
                (() => {
                    // an IIFE for checking if any ship values are the same
                    const allValues = [];
                    gameBoard.ships.forEach(ship =>
                        allValues.push(...ship.coords)
                    );
                    for (let i = 0; i < allValues.length; i++) {
                        for (let j = 0; j < allValues.length; j++) {
                            if (
                                allValues[i][0] === allValues[j][0] &&
                                allValues[i][1] === allValues[j][1]
                            ) {
                                if (!(i === j)) return true;
                            }
                        }
                    }
                    return false;
                })()
            ).toBe(false);
        });
    });
});
