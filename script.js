var table = document.getElementById("theMaze");
table.style.borderCollapse = "collapse";
table.style.margin = "auto";

for (var row = 0; row < 10; row++) {
    var newRow = table.insertRow();

    for (var columns = 0; columns < 10; columns++) {
        var newCell = newRow.insertCell();
        newCell.style.width = "50px";
        newCell.style.height = "50px";
        newCell.style.background = "lightgrey";

        if (row === 0 && (columns < 4 || columns >4)) {
            newCell.style.borderTop = "1px solid black";
        }

        if (row === 0 && (columns < 2 || columns === 3 || columns === 4 || columns === 5 || columns === 7 || columns === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 1 && (columns === 2 || columns === 4 || columns === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 2 && (columns < 2 || columns === 3 || columns === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 3 && (columns === 1 || columns === 2 || columns === 3 || columns === 4 || columns === 7 || columns === 9 )) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 4 && (columns === 4 || columns === 5 || columns === 6 || columns === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 5 && (columns === 2 || columns === 3 || columns === 4 || columns === 7 || columns === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 6 && (columns === 5 || columns === 6 || columns === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row === 7 && (columns === 1 || columns === 3 || columns === 4 || columns === 6 || columns === 7 || columns === 9)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (row ===8 && (columns === 4 || columns === 5 || columns === 6 || columns === 8)) {
            newCell.style.borderBottom = "1px solid black";
        }

        if (columns === 0) {
            newCell.style.borderLeft = "1px solid black";
        }

        if (columns === 0 && (row === 2 || row === 4 || row === 5 || row === 6 || row === 8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 1 && (row === 1 || row === 5 || row === 6 || row === 7 || row === 8)) {
            newCell.style.borderRight = "1px solid black";

        }

        if (columns === 2 && (row === 2 || row === 4 || row === 7 || row === 9)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 3 && (row === 0 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 4 && (row === 2 || row === 3 || row === 6 || row === 7)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 5 && (row === 1 || row === 2 || row === 3 || row === 4 || row === 5 || row ===8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 6 && (row < 4 || row === 5 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 7 && (row === 2 || row === 4 || row === 7 || row === 8)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 8 && (row === 3 || row === 6)) {
            newCell.style.borderRight = "1px solid black";
        }

        if (columns === 9) {
            newCell.style.borderRight = "1px solid black";
        }

        if (row === 9 && (columns < 5 || columns > 5)) {
            newCell.style.borderBottom = "1px solid black";
        }
 
    }
}