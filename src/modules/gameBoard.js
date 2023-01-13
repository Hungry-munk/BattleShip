export class GameBoard {
    constructor() {
        this.board = new Array(10)
            .fill()
            .map(() =>
                new Array(10)
                    .fill()
                    .map(() => ({ attacked: false, isShip: false }))
            );
        this.ships = [];
        this.missedShots = [];
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
        } else {
            this.missedShots.push(coords);
        }
        this.board[coords[0]][coords[1]].attacked = true;
    }

    get shipsDown() {
        return this.ships.every(ship => ship.sunk);
    }
}
