
export default function GameBoard({onSelection, board}){


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
        {board.map((row, rowIndex)=>
            <li key={rowIndex}>
                <ol>{row.map((playerSymbol, columnIndex)=>
                <li key={columnIndex}>
                    <button onClick={()=>onSelection(rowIndex, columnIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>
                )}</ol>
            </li>
        )}

    </ol>
}
