var table = document.getElementById("theMaze");
table.style.borderCollapse = "collapse";
table.style.margin = "auto";

for (var row = 0; row < 10; row++) {
    var newRow = table.insertRow();

    for (var column = 0; column < 10; column++) {
        var newCell = newRow.insertCell();
        newCell.style.width = "50px";
        newCell.style.height = "50px";
        newCell.style.background = "lightgrey";

        newCell.classList.add('row-' + row, 'column-' + column);

        
        if (row === 0 && (column < 4 || column > 4)) {
            newCell.style.borderTop = "1px solid black";
        }

        if (row === 0 && (column < 2 || column === 3 || column === 4 || column === 5 || column === 7 || column === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 1 && (column === 2 || column === 4 || column === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 2 && (column < 2 || column === 3 || column === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 3 && (column === 1 || column === 2 || column === 3 || column === 4 || column === 7 || column === 9 )) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 4 && (column === 4 || column === 5 || column === 6 || column === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 5 && (column === 2 || column === 3 || column === 4 || column === 7 || column === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 6 && (column === 5 || column === 6 || column === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 7 && (column === 1 || column === 3 || column === 4 || column === 6 || column === 7 || column === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row ===8 && (column === 4 || column === 5 || column === 6 || column === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (column === 0) {
            newCell.style.borderLeft = "1px solid black";
        }

        if (column === 0 && (row === 2 || row === 4 || row === 5 || row === 6 || row === 8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 1 && (row === 1 || row === 5 || row === 6 || row === 7 || row === 8)) {
            newCell.style.borderRight = "1px solid black";

        }

        if (column === 2 && (row === 2 || row === 4 || row === 7 || row === 9)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 3 && (row === 0 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 4 && (row === 2 || row === 3 || row === 6 || row === 7)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 5 && (row === 1 || row === 2 || row === 3 || row === 4 || row === 5 || row ===8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 6 && (row < 4 || row === 5 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 7 && (row === 2 || row === 4 || row === 7 || row === 8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 8 && (row === 3 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (column === 9) {
            newCell.style.borderRight = "1px solid black";
        }

        if (row === 9 && (column < 5 || column > 5)) {
            newCell.style.borderBottom = "1px solid black";
        }
 
    }
}


var targetCell = document.querySelector('.row-9.column-5');

targetCell.addEventListener('click', function() {
    if (this.style.background === "lightgrey") {
        this.style.background = "darkgrey";
    }
});

function handleClick() {
    if(this.style.background === "lightgrey") {
        this.style.background = "darkgrey";
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      var currentRow = parseInt(targetCell.classList[0].split('-')[1]);
      var currentColumn = parseInt(targetCell.classList[1].split('-')[1]);
      if (currentColumn > 0) {
        var newColumn = currentColumn - 1;
        var newTargetCell = document.querySelector('.row-' + currentRow + '.column-' + newColumn);
        if (targetCell && newTargetCell && !hasWallLeft(targetCell)) {
          targetCell.style.background = "lightgrey";
          newTargetCell.style.background = "darkgrey";
          targetCell = newTargetCell;
        }
      }
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      var currentRow = parseInt(targetCell.classList[0].split('-')[1]);
      var currentColumn = parseInt(targetCell.classList[1].split('-')[1]);
      if (currentColumn < 9) {
        var newColumn = currentColumn + 1;
        var newTargetCell = document.querySelector('.row-' + currentRow + '.column-' + newColumn);
        if (targetCell && newTargetCell && !hasWallRight(targetCell)) {
          targetCell.style.background = "lightgrey";
          newTargetCell.style.background = "darkgrey";
          targetCell = newTargetCell;
        }
      }
    }
  });

function getColumnNumber(cell) {
    return parseInt(cell.classList[1].split('-')[1]);
  }

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp') {
        var currentRow = parseInt(targetCell.classList[0].split('-')[1]);
        if (currentRow > 0) {
            var newRow = currentRow - 1;
            var newTargetCell = document.querySelector('.row-' + newRow + '.column-' + getColumnNumber(targetCell));
            if (targetCell && newTargetCell && !hasWallAbove(targetCell)) {
                targetCell.style.background = "lightgrey";
                newTargetCell.style.background = "darkgrey";
                targetCell = newTargetCell;
            }
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        var currentRow = parseInt(targetCell.classList[0].split('-')[1]);
        if (currentRow > 0) {
            var newRow = currentRow + 1;
            var newTargetCell = document.querySelector('.row-' + newRow + '.column-' + getColumnNumber(targetCell));
            if (targetCell && newTargetCell && !hasWallBelow(targetCell)) {
                targetCell.style.background = "lightgrey";
                newTargetCell.style.background = "darkgrey";
                targetCell = newTargetCell;
            }
        }
    }
});

function hasWallAbove(cell) {
    var row = parseInt(cell.classList[0].split('-')[1]);
    var column = parseInt(cell.classList[1].split('-')[1]);
    var aboveRow = row - 1;
    var aboveCell = document.querySelector('.row-' + aboveRow + '.column-' + column);
    return aboveCell.style.borderBottom === '1px solid black';
  }
  
  function hasWallBelow(cell) {
    var row = parseInt(cell.classList[0].split('-')[1]);
    var column = parseInt(cell.classList[1].split('-')[1]);
    var belowRow = row + 1;
    var belowCell = document.querySelector('.row-' + belowRow + '.column-' + column);
    return cell.style.borderBottom === '1px solid black';
  }
  
  function hasWallLeft(cell) {
    var row = parseInt(cell.classList[0].split('-')[1]);
    var column = parseInt(cell.classList[1].split('-')[1]);
    var leftColumn = column - 1;
    var leftCell = document.querySelector('.row-' + row + '.column-' + leftColumn);
    var computedStyle = window.getComputedStyle(leftCell);
    return computedStyle.getPropertyValue('border-right-style') === 'solid';
  }
  
  function hasWallRight(cell) {
    var row = parseInt(cell.classList[0].split('-')[1]);
    var column = parseInt(cell.classList[1].split('-')[1]);
    var rightColumn = column + 1;
    var rightCell = document.querySelector('.row-' + row + '.column-' + rightColumn);
    var computedStyle = window.getComputedStyle(cell);
    return computedStyle.getPropertyValue('border-right-style') === 'solid';
  }