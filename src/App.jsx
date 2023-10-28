import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {


    return <main>
        <div id="game-container">
            <ol id="players">
                {/*PLAYERS*/}
                <Player initialName="Player 1" symbol="X" />
                <Player initialName="Player 2" symbol="O" />
            </ol>
            {/*GAMEBOARD*/}
            <Gameboard />
        </div>

        {/*LOG*/}
    </main>;

}

export default App
