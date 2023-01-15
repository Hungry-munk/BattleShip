export class GameBoard {
    constructor(size) {
        this.size = size;
        this.board = new Array(size)
            .fill()
            .map(() =>
                new Array(size)
                    .fill()
                    .map(() => ({ attacked: false, isShip: false }))
            );
        this.ships = [];
        this.missedShots = [];
        this.hitShots = [];
    }

    placeShip(allCoords) {
        allCoords.forEach(coords => {
            this.board[coords[0]][coords[1]].isShip = true;
            this.board[coords[0]][coords[1]].coords = coords;
            this.board[coords[0]][coords[1]].allCoords = allCoords;
        });
    }

    placeShips() {
        this.ships.forEach(ship => this.placeShip(ship.coords));
    }

    findShip(coords) {
        return this.ships.find(ship =>
            ship.coords.find(
                coord => coord[0] === coords[0] && coord[1] === coords[1]
            )
        );
    }

    receiveAttack(coords) {
        if (this.board[coords[0]][coords[1]].isShip) {
            this.findShip(coords).hit();
            this.board[coords[0]][coords[1]].attacked = true;
            this.hitShots.push(coords);
            return { hit: true, coords };
        }
        this.missedShots.push(coords);
        return { hit: false, coords };
    }

    get shipsDown() {
        return this.ships.every(ship => ship.sunk);
    }

    // location stuff
    generateRandomLocation(ship) {
        // return
        let shipCoords;
        do {
            shipCoords = this.#generateRandomLocationPath(
                // get origin coords
                [this.randomCoord(), this.randomCoord()],
                // get direction where 1 is vertcal and 0 is horizontal
                Math.floor(Math.random() * 2),
                ship.length
            );
        } while (!shipCoords);

        return shipCoords;
    }

    randomCoord() {
        return Math.floor(Math.random() * this.size);
    }

    #generateRandomLocationPath(origin, direction, size) {
        if (this.checkCollision([origin])) return false;
        const nextShipCoords = [[...origin]];
        const previousShipCoords = [[...origin]];
        // going both up and down or left and right
        let nextOutOfBounds = false;
        let previousOutOfBounds = false;

        for (let i = 1; i < size; i++) {
            const nextCoord = [...origin];
            const previousCoord = [...origin];
            // if out of bounds
            if (nextCoord[direction] + i > 9) nextOutOfBounds = true;
            if (nextCoord[direction] - i < 0) previousOutOfBounds = true;
            previousCoord[direction] -= i;
            nextCoord[direction] += i;
            nextShipCoords.push(nextCoord);
            previousShipCoords.push(previousCoord);
        }
        // checking its validitys
        if (this.checkCollision(nextShipCoords) || nextOutOfBounds) {
            return this.checkCollision(previousShipCoords) ||
                previousOutOfBounds
                ? false
                : previousShipCoords;
        }
        return nextShipCoords;
    }

    checkCollision(coords) {
        return !!this.ships.find(ship => {
            if (ship.coords) {
                return !!ship.coords.find(
                    shipCoord =>
                        !!coords.find(
                            coord =>
                                shipCoord[0] === coord[0] &&
                                shipCoord[1] === coord[1]
                        )
                );
            }
            return false;
        });
    }
}
