const grid = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]
var column1 = 5


var playerOne = 1
var playerTwo = 2
var currentPlayer = playerOne

const destination = document.getElementById('container')

function drawGrid() {
    while (destination.lastChild) {
        destination.removeChild(destination.lastChild)
    }

    for (let i = 0; i < grid.length; i++) {
        let column = grid[i]
        let boxColumn = document.createElement('div')
        boxColumn.className = 'columns'
        boxColumn.id = 'column' + i
        destination.appendChild(boxColumn)
        if (column.length <= 5) {
            boxColumn.addEventListener('click', addPiece);
        }
        for (let j = 0; j < column.length; j++) {
            var row = column[j];
            if (row == 1) {
                drawPiece(boxColumn, "red")
            } else if (row == 2) {
                drawPiece(boxColumn, "black")
            }

        }
    }
}
function drawPiece(column, color) {
    let circle = document.createElement('div')
    circle.classList.add('circle', color)
    column.appendChild(circle);
}

function addPiece(event) {
    let boxColumn = event.currentTarget
    var columnID = boxColumn.id.split('column')[1];
    grid[columnID].push(currentPlayer);
    drawGrid();
    checkWin();
    switchPlayer();
}

function switchPlayer() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else if (currentPlayer === playerTwo) {
        currentPlayer = playerOne;
    }
}
function checkWin() {
    checkVertical();
    checkHorizontal();
    checkDiagonal();
}

function checkVertical() {
    let playerOneWins = [1, 1, 1, 1].toString();
    let playerTwoWins = [2, 2, 2, 2].toString();
    for (let k = 0; k < grid.length; k++) {
        for (let p = 0; p < 7; p++)
            if (grid[k][p] == currentPlayer) {
                let neighbors = grid[k].slice(p, p + 4).toString();
                // console.log(currentPlayer, neighbors, playerOneWins, playerTwoWins)
                if (neighbors == playerOneWins) {
                    alert('Player 1 Wins')
                } else if (neighbors == playerTwoWins) {
                    alert("Player 2 Wins")
                }



            }
    }
}

function checkHorizontal() {
    let playerOneWins = [1, 1, 1, 1].toString();
    let playerTwoWins = [2, 2, 2, 2].toString();
    for (let k = 0; k < grid.length; k++) {
        for (let p = 0; p < 7; p++)
            if (grid[k][p] == currentPlayer && k <= grid.length - 4) {
                let neighbors = [
                    grid[k][p],
                    grid[k + 1][p],
                    grid[k + 2][p],
                    grid[k + 3][p],
                ].toString();
                // console.log(currentPlayer, neighbors, playerOneWins, playerTwoWins)
                if (neighbors == playerOneWins) {
                    alert('Player 1 Wins')
                } else if (neighbors == playerTwoWins) {
                    alert("Player 2 Wins")
                }



            }
    }
}

function checkDiagonal() {
    let playerOneWins = [1, 1, 1, 1].toString();
    let playerTwoWins = [2, 2, 2, 2].toString();
    for (let k = 0; k < grid.length; k++) {
        for (let p = 0; p < 7; p++)
            if (grid[k][p] == currentPlayer && k <= grid.length - 4) {
                let neighbors = [
                    grid[k][p],
                    grid[k + 1][p + 1],
                    grid[k + 2][p + 2],
                    grid[k + 3][p + 3],
                ].toString();
                let negNeighbors = [
                    grid[k][p],
                    grid[k + 1][p - 1],
                    grid[k + 2][p - 2],
                    grid[k + 3][p - 3],
                ].toString();
                console.log(neighbors)
                if (neighbors == playerOneWins || negNeighbors == playerOneWins) {
                    alert('Player 1 Wins')
                } else if (neighbors == playerTwoWins || negNeighbors == playerTwoWins) {
                    alert("Player 2 Wins")
                }



            }
    }
}



drawGrid();