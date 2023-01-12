export default class GameBoard {
    constructor() {
        this.board = new Array(10).fill(
            new Array(10).fill({
                attacked: false,
            })
        );
        this.ships = [];
    }

    placeShip(allCoords) {
        allCoords.forEach(coords => {
            this.board[coords[0]][coords[1]].isShip = true;
            this.board[coords[0]][coords[1]].coords = coords;
            this.board[coords[0]][coords[1]].allCoords = allCoords;
        });
    }

    receiveAttack(coords) {
        if (this.baord[coords[0]][coords[1]].isShip) {
            this.findShip().hit();
        }
        this.baord[coords[0]][coords[1]].attacked = true;
    }

    findShip(coords) {
        return this.ships.find(ship =>
            ship.coords.find(
                coord => coord[0] === coords[0] && coord[1] === coords[1]
            )
        );
    }
}
