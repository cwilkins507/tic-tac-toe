import Player from "./components/Player.jsx";
import {useState} from "react";
import GameBoard from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";

function App() {

    const [activePlayer, changeActivePlayer] = useState('X');
    const [ gameTurns, setGameTurns] = useState([]);

    function handleSelection(rowIndex, columnIndex){
        changeActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
        setGameTurns(prevTurns => {
            let currentPlayer = 'X';
            if (prevTurns.length > 0 && prevTurns[0].player === 'X'){
                currentPlayer = 'O'
            }
            // could inline but leaving here to show the creation of a new array of game turns
            const updatedTurns = [
                { square: {row: rowIndex, col: columnIndex}, player: currentPlayer },
                ...prevTurns,
            ];

            return updatedTurns;
        });
    }

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                {/*PLAYERS*/}
                <Player initialName="Player 1" symbol="X" isActive={activePlayer==='X'} />
                <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'} />
            </ol>
            {/*GAMEBOARD*/}
            <GameBoard onSelection={handleSelection}
                       turns={gameTurns}/>
        </div>

        {/*LOG*/}
        <Log />
    </main>;

}

export default App
