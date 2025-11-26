/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
    // Check the move format using a regular expression
    if (!/^[1-3],[1-3]$/.test(move)) {
        console.log('Try again...');
        return false;
    }
    // Extract row/col (convert from 1-based to 0-based)
    const [row, col] = move.split(',').map(n => Number(n) - 1);
    // Check if the board space is free ('_')
    if (board[row][col] !== '_') {
        console.log('Try again...');
        return

      false;
    }
    // Implement this at the end if you have time, otherwise you can help your teammates!
    return true;
}


/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
       
    // Check if the move is valid

    if (!validateMove(move, board)) {
        return false;
    }

    // Convert "row,col" into numeric indices
    const [row, col] = move.split(',').map(n => Number(n) - 1);

    // Update the board
    board[row][col] = player;


    return true;
}

