class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const cellValue = board[r][c];

                if (cellValue === '.') {
                    continue;
                }

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (
                    rows[r].has(cellValue) ||
                    cols[c].has(cellValue) ||
                    boxes[boxIndex].has(cellValue)
                ) {
                    return false; 
                }

                rows[r].add(cellValue);
                cols[c].add(cellValue);
                boxes[boxIndex].add(cellValue);
            }
        }

        return true;
    }
}