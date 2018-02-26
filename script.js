const grid = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
]
var column1 = 5


var currentPlayer
var palyerOne
var playerTwo

var redDisc
var blackDisc

for (let i=0; i < grid.length; i++) {
    let boxColumn  = grid[i]
    boxColumn = document.createElement('div')
    boxColumn.className = 'columns'
    boxColumn.id = 'column' + i
    let destination = document.getElementById('container')
    destination.appendChild(boxColumn)
    boxColumn.addEventListener('click', addPiece);
    // for (var o = 0; o < column.length; o++) {
    //     var row = column[o];
    //     var boxRow = document.createElement('div')
    //     boxRow.id ='row' + o
    //     boxRow.className = 'boxes'
    //     let destination = document.getElementById('column' + i)
    //     destination.appendChild(boxRow);
    // }
};

function addPiece(event) {
    // console.log(event.target);
    // console.log(event.target.parentNode)
    let circle = document.createElement('div')
    circle.className = 'circle'
    let destination = event.target;
    destination.appendChild(circle);   
    console.log(event.target.class)
}

function addToArray (event) {
    
}

// function switchPlayer () {
//     if (currentPlayer = playerOne) {
//         currentPlayer = playerTwo;
//     } else if (currentPlayer = playerTwo) {
//         currentPlayer = palyerOne;
//     }

// }


