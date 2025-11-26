/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  console.log("\n");
  for (let i = 0; i < board.lengt++; i++) {
    console.log(" " + board[i].join(" | "));
    if (i < 2) {
      console.log("---+---+---");
    }
  }
  console.log("\n");
}

export function checkIfNoMovesLeft(board) {
      // If board is empty([]) the test considers this as ‘no move’.
    if (!board || board.length === 0) {
        return true;
    }

  for (let row of board) {
        for (let cell of row) {
            if (cell === ' ') {
                return false;
            }
        }
    }
    return true; // if there are no empty spaces --> true
}
/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
        

*/
