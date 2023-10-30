const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({onSelection, turns}){
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    //
    // function handleSelection(rowIndex, columnIndex){
    //     setGameBoard((prevGameBoard)=> {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][columnIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     } );
    //
    //     endTurn();
    // }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>{row.map((playerSymbol, columnIndex)=>
                <li key={columnIndex}>
                    <button onClick={()=>onSelection(rowIndex, columnIndex)}>{playerSymbol}</button>
                    </li>
                )}</ol>
            </li>
        )}

    </ol>
}
