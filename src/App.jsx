import Player from "./components/Player.jsx";
import {useState} from "react";
import GameBoard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

// helper function that derives active player state based on the gameturns controlled by useState
function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O'
    }
    return currentPlayer;

}

function App() {

    // const [activePlayer, changeActivePlayer] = useState('X');
    const [ gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    // watch for bugs, make a copy of the initialgameboard to maintain immutability
    let gameBoard = [...initialGameBoard.map(array=> [...array])];

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }

    }

    const hasDraw = gameBoard.length === 9 && !winner;

    function handleSelection(rowIndex, columnIndex){
        // changeActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            let currentPlayer = deriveActivePlayer(prevTurns);
            // could inline but leaving here to show the creation of a new array of game turns
            const updatedTurns = [
                { square: {row: rowIndex, col: columnIndex}, player: currentPlayer },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    function handleRestart(){
        setGameTurns([]);
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                {/*PLAYERS*/}
                <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
                <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'} />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
            {/*GAMEBOARD*/}
            <GameBoard onSelection={handleSelection}
                       board={gameBoard}/>
        </div>

        {/*LOG*/}
        <Log turns={gameTurns} />
    </main>;

}

export default App
