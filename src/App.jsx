import Player from "./components/Player.jsx";

function App() {


    return <main>
        <div id="game-container">
            <ol id="players">
                {/*PLAYERS*/}
                <Player playerName="Player 1" symbol="X" />
                <Player playerName="Player 2" symbol="O" />
            </ol>
            {/*GAMEBOARD*/}
        </div>

        {/*LOG*/}
    </main>;

}

export default App
